import {useCallback, useEffect, useRef, useState} from "react";
import {Container} from "react-bootstrap";

const GITHUB_USERNAME = "jyjulianwong";
const CACHE_KEY = "apps-carousel-cache-v2";
const CACHE_TTL_MS = 15 * 60 * 1000;
const fallbackIconSource = require("../assets/apple-touch-icon.png");

interface AppInfo {
  name: string;
  title: string;
  description: string;
  url: string;
  favicon: string;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  fork: boolean;
  has_pages: boolean;
  owner: { login: string };
}

/**
 * Fetches the deployed page for a GitHub Pages-enabled repository and
 * extracts its title and icon so the app can be listed without any manual
 * bookkeeping as new repositories are published or removed. The Apple touch
 * icon is preferred over the favicon since it's higher resolution and fills
 * a rounded square tile better.
 * @param {GitHubRepo} repo - The repository to resolve.
 * @return {Promise<AppInfo | null>} The resolved app, or null if the page could not be read.
 */
async function resolveApp(repo: GitHubRepo): Promise<AppInfo | null> {
  const pagesUrl = `https://${repo.owner.login}.github.io/${repo.name}/`;
  try {
    const res = await fetch(pagesUrl);
    if (!res.ok) return null;

    const doc = new DOMParser().parseFromString(await res.text(), "text/html");
    const title = doc.querySelector("title")?.textContent?.trim() || repo.name.replace(/[-_]/g, " ");
    const iconHref = doc
      .querySelector("link[rel=\"apple-touch-icon\"], link[rel=\"apple-touch-icon-precomposed\"]")
      ?.getAttribute("href")
      || doc.querySelector("link[rel~=\"icon\"]")?.getAttribute("href");
    const favicon = new URL(iconHref || "apple-touch-icon.png", pagesUrl).href;

    return {name: repo.name, title, description: repo.description || "", url: pagesUrl, favicon};
  } catch {
    return null;
  }
}

/**
 * Discovers every GitHub Pages web app deployed under the profile, caching
 * the result in sessionStorage for a short period to stay within GitHub's
 * unauthenticated API rate limits across repeated visits in the same session.
 * @return {Promise<AppInfo[]>} The list of resolved apps.
 */
async function loadApps(): Promise<AppInfo[]> {
  try {
    const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) || "null");
    if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
      return cached.apps;
    }
  } catch {
    // Ignore an unreadable cache entry and refetch below.
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner`,
    {headers: {Accept: "application/vnd.github+json"}}
  );
  if (!res.ok) throw new Error("Failed to list GitHub repositories.");

  const repos: GitHubRepo[] = await res.json();
  const candidates = repos.filter((repo) =>
    repo.has_pages && !repo.fork && repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase()
  );
  const resolved = await Promise.all(candidates.map(resolveApp));
  const apps = resolved
    .filter((app): app is AppInfo => app !== null)
    .sort((a, b) => a.title.localeCompare(b.title));

  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({timestamp: Date.now(), apps}));
  } catch {
    // Ignore a cache write failure (e.g. storage disabled or full).
  }

  return apps;
}

interface AppsCarouselCardProps {
  darkened?: boolean;
}

/**
 * A card component displaying a horizontally-scrollable list of every
 * GitHub Pages web app deployed under the profile, discovered automatically.
 * @param {AppsCarouselCardProps} props - A list of properties.
 * @constructor
 */
const AUTO_SCROLL_PX_PER_SEC = 40;
const TOUCH_RESUME_DELAY_MS = 1200;

function AppsCarouselCard(props: AppsCarouselCardProps): JSX.Element | null {
  const [apps, setApps] = useState<AppInfo[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<number | undefined>(undefined);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const dragMovedRef = useRef(false);

  const pauseAutoScroll = () => {
    if (resumeTimeoutRef.current !== undefined) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = undefined;
    }
    isPausedRef.current = true;
  };

  const resumeAutoScroll = (delayMs: number) => {
    if (resumeTimeoutRef.current !== undefined) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
    }, delayMs);
  };

  // Mouse drag-to-scroll uses window-level listeners (rather than handlers on
  // the carousel div alone) so a drag keeps tracking correctly even if the
  // cursor briefly moves outside the carousel's bounds or is released there.
  const handleWindowMouseMove = useCallback((e: MouseEvent) => {
    const scroller = scrollerRef.current;
    if (!scroller || !isDraggingRef.current) return;
    const delta = e.pageX - dragStartXRef.current;
    if (Math.abs(delta) > 5) dragMovedRef.current = true;
    scroller.scrollLeft = dragStartScrollLeftRef.current - delta;
  }, []);

  const handleWindowMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    setIsDragging(false);
    window.removeEventListener("mousemove", handleWindowMouseMove);
    window.removeEventListener("mouseup", handleWindowMouseUp);
    resumeAutoScroll(0);
  }, [handleWindowMouseMove]);

  useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
    };
  }, [handleWindowMouseMove, handleWindowMouseUp]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    e.preventDefault();
    isDraggingRef.current = true;
    dragMovedRef.current = false;
    dragStartXRef.current = e.pageX;
    dragStartScrollLeftRef.current = scroller.scrollLeft;
    setIsDragging(true);
    pauseAutoScroll();
    window.addEventListener("mousemove", handleWindowMouseMove);
    window.addEventListener("mouseup", handleWindowMouseUp);
  };

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (dragMovedRef.current) e.preventDefault();
  };

  useEffect(() => {
    let cancelled = false;

    loadApps()
      .then((apps) => {
        if (!cancelled) setApps(apps);
      })
      .catch(() => {
        // Leave the card hidden if the apps could not be discovered.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Auto-scrolls the (doubled) list on a fixed timer, wrapping back to the
  // start of the second copy once the first copy has scrolled past, giving
  // the illusion of an infinite loop without ever resetting scrollLeft to 0.
  // A plain interval is used instead of requestAnimationFrame because some
  // mobile browsers tie rAF delivery to the OS-level reduced-motion/animation
  // setting and can stop ticking it altogether, which would stall the
  // carousel entirely rather than merely slowing it down.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || apps.length === 0) return;

    const TICK_MS = 30;
    let lastTime = Date.now();

    const intervalId = window.setInterval(() => {
      const now = Date.now();
      // Cap elapsed time so a throttled/backgrounded tab doesn't produce a
      // large jump in scroll position once ticking resumes at full speed.
      const elapsedMs = Math.min(now - lastTime, 100);
      lastTime = now;

      if (!isPausedRef.current) {
        const singleSetWidth = scroller.scrollWidth / 2;
        scroller.scrollLeft += AUTO_SCROLL_PX_PER_SEC * (elapsedMs / 1000);
        if (scroller.scrollLeft >= singleSetWidth) {
          scroller.scrollLeft -= singleSetWidth;
        }
      }
    }, TICK_MS);

    return () => window.clearInterval(intervalId);
  }, [apps]);

  if (apps.length === 0) return null;

  const bgClassName = props.darkened ? "bg-black" : "bg-white";

  return (
    <div className={"py-5" + " " + bgClassName}>
      <Container className={"px-3 mb-3"}>
        <h1>My Apps</h1>
      </Container>
      <div
        ref={scrollerRef}
        className={"apps-carousel" + (isDragging ? " is-dragging" : "")}
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={() => resumeAutoScroll(0)}
        onMouseDown={handleMouseDown}
        onTouchStart={pauseAutoScroll}
        onTouchEnd={() => resumeAutoScroll(TOUCH_RESUME_DELAY_MS)}
        onTouchCancel={() => resumeAutoScroll(TOUCH_RESUME_DELAY_MS)}
      >
        {[...apps, ...apps].map((app, index) => (
          <a
            key={`${app.name}-${index}`}
            href={app.url}
            target={"_blank"}
            rel={"noreferrer"}
            className={"apps-carousel-item"}
            style={{textDecoration: "none", color: "inherit"}}
            aria-hidden={index >= apps.length}
            tabIndex={index >= apps.length ? -1 : 0}
            onClick={handleItemClick}
          >
            <div className={"apps-carousel-item-icon"}>
              <img
                src={app.favicon}
                alt={app.title}
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.onerror = null;
                  img.src = fallbackIconSource;
                }}
              />
            </div>
            <div className={"apps-carousel-item-text"}>
              <div className={"apps-carousel-item-title"}>{app.title}</div>
              {app.description && (
                <div className={"apps-carousel-item-description"}>{app.description}</div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AppsCarouselCard;
