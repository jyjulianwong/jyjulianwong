import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";

const GITHUB_USERNAME = "jyjulianwong";
const CACHE_KEY = "apps-carousel-cache-v1";
const CACHE_TTL_MS = 15 * 60 * 1000;
const fallbackIconSource = require("../assets/favicon.svg").default;

interface AppInfo {
  name: string;
  title: string;
  url: string;
  favicon: string;
}

interface GitHubRepo {
  name: string;
  fork: boolean;
  has_pages: boolean;
  owner: { login: string };
}

/**
 * Fetches the deployed page for a GitHub Pages-enabled repository and
 * extracts its title and favicon so the app can be listed without any
 * manual bookkeeping as new repositories are published or removed.
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
    const iconHref = doc.querySelector("link[rel~=\"icon\"]")?.getAttribute("href");
    const favicon = new URL(iconHref || "favicon.ico", pagesUrl).href;

    return {name: repo.name, title, url: pagesUrl, favicon};
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
function AppsCarouselCard(props: AppsCarouselCardProps): JSX.Element | null {
  const [apps, setApps] = useState<AppInfo[]>([]);

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

  if (apps.length === 0) return null;

  const bgClassName = props.darkened ? "bg-black" : "bg-white";

  return (
    <div className={"px-3 py-5" + " " + bgClassName}>
      <Container>
        <h1>Apps</h1>
        <div className={"apps-carousel"}>
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target={"_blank"}
              rel={"noreferrer"}
              className={"apps-carousel-item"}
              style={{textDecoration: "none", color: "inherit"}}
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
              <div className={"apps-carousel-item-title"}>{app.title}</div>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AppsCarouselCard;
