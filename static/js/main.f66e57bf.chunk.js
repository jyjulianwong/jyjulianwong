(this.webpackJsonpjyjulianwong=this.webpackJsonpjyjulianwong||[]).push([[0],{43:function(e,t,i){},44:function(e,t,i){},51:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/julian.4e55d431.png"},52:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/amphere.97f7b9ca.png"},53:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/catapultsports.d84fe8b3.png"},54:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/biiah.e9c4f2ab.png"},55:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/chevroletcorvettec6.689da4ae.png"},56:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/hondansxna1.cc937505.png"},57:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/lotuseliseseries3.307bb455.png"},58:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/porsche911turbo930.90ee4da4.png"},59:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/astonmartindb5.7663cece.png"},60:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/rollsroycephantomvii.b786b59e.png"},61:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/polestar2.884aad83.png"},62:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/ferrari458italia.d07adc6f.png"},63:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/ferrari308gts.57b6af49.png"},64:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/lexusesxv30.5ec329b9.png"},65:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/logo512.20b09aa5.png"},66:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(22),r=i.n(n),c=(i(43),i(44),i(45),i(6)),s=i(72),o=i(69),l=i(73),d=i(4),u=i.n(d),j=i(10),h=i(13),b=i(18),p=function(){function e(t,i){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:65536;Object(h.a)(this,e),this.action=t,this.interval=i,this.stopOnNextIter=a,this.iter=n,this.iterOverflow=r,this.init()}return Object(b.a)(e,[{key:"init",value:function(){var t=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.stopOnNextIter){t.next=8;break}return t.next=3,e.delay(this.interval);case 3:this.action(),this.iter=(this.iter+1)%this.iterOverflow,console.log("RepeatingTimer: Tick: "+this.iter),t.next=0;break;case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"stop",value:function(){this.stopOnNextIter=!0}}],[{key:"delay",value:function(e){return new Promise((function(t){setTimeout(t,e)}))}}]),e}(),f=i(2);var g=function(e){var t="jyjulianwong",i=Object(a.useState)(0),n=Object(c.a)(i,2),r=n[0],d=n[1];return Object(a.useEffect)((function(){var e=new p((function(){d((function(e){return(e+1)%(t.length+1)}))}),750);return function(){e.stop()}}),[]),Object(f.jsx)(s.a,{className:"bg-white",expand:"sm",children:Object(f.jsxs)(o.a,{className:"px-3",children:[Object(f.jsxs)(s.a.Brand,{href:"/",children:[e.imageSource&&Object(f.jsx)("img",{src:e.imageSource,alt:"FixedAnimatedNavbar.imageSource",width:30,height:30,className:"d-inline-block align-center"})," ",Object(f.jsx)("p",{style:{display:"inline"},children:"> "+t}),Object(f.jsx)("p",{style:{display:"inline",visibility:r%2==0?"hidden":"inherit"},children:"_"})]}),Object(f.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(s.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(l.a,{className:"me-auto",children:[Object(f.jsx)(l.a.Link,{href:"/",children:"Home"}),Object(f.jsx)(l.a.Link,{href:"/top100cars",children:"Top 100 Cars"})]})})]})})};var m=function(e){var t=e.imageSource?"bg-image":e.darkened?"bg-black":"bg-white";return Object(f.jsx)("div",{className:"d-flex justify-content-center align-items-center "+t,style:{height:360,backgroundImage:"url("+e.imageSource+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:Object(f.jsxs)(o.a,{className:"p-3 text-start",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("mark",{children:e.title})}),Object(f.jsx)("h6",{children:Object(f.jsx)("mark",{children:e.description})})]})})},x=i(70),O=i(71);var v=function(e){var t=e.darkened?"bg-black":"bg-white";return Object(f.jsx)("div",{className:"px-3 py-5 "+t,children:Object(f.jsxs)(x.a,{className:"gx-1 gy-3",children:[Object(f.jsx)(O.a,{xs:12,children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)("h1",{children:e.title}),Object(f.jsx)("h6",{children:e.description}),e.redirect&&e.redirectText&&Object(f.jsx)("h5",{children:Object(f.jsxs)("a",{href:e.redirect,style:{textDecoration:"none"},children:[e.redirectText," >"]})})]})}),Object(f.jsx)(O.a,{xs:12,children:e.imageSource&&Object(f.jsx)("img",{src:e.imageSource,alt:"PortfolioCard.imageSource",style:{maxWidth:"100%",maxHeight:480,width:"auto",height:"auto"}})}),Object(f.jsx)(O.a,{xs:6,md:3,children:Object(f.jsxs)(o.a,{children:["Company",Object(f.jsx)("h6",{children:e.company})]})}),Object(f.jsx)(O.a,{xs:6,md:3,children:Object(f.jsxs)(o.a,{children:["Position",Object(f.jsx)("h6",{children:e.position})]})}),Object(f.jsx)(O.a,{xs:6,md:3,children:Object(f.jsxs)(o.a,{children:["Location",Object(f.jsx)("h6",{children:e.location})]})}),Object(f.jsx)(O.a,{xs:6,md:3,children:Object(f.jsxs)(o.a,{children:["Duration",Object(f.jsx)("h6",{children:e.duration})]})})]})})};var y=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O.a,{xs:12,children:Object(f.jsx)(m,{imageSource:i(51).default,title:"Hi! I'm Julian.",description:"Final-Year M.Eng. Computing (Artificial Intelligence and Machine Learning) Student @ Imperial College London",darkened:!0})}),Object(f.jsx)(O.a,{xs:12,children:Object(f.jsx)(v,{imageSource:i(52).default,title:"Amphere Web App",company:"Amphere Ltd",position:"Full-Stack Web Developer",location:"London, England, UK",duration:"Mar 2022 - Jun 2022",description:"Led an engineering team of 3 creating an all-in-one professional social platform for musicians, as part of a project submission for the Venture Catalyst Challenge at the Imperial Enterprise Lab.",redirect:"https://github.com/Amphere-Ltd/Amphere-WebApp-React",redirectText:"See the repository"})}),Object(f.jsx)(O.a,{xs:12,children:Object(f.jsx)(v,{imageSource:i(53).default,title:"RaceWatch",company:"Catapult Sports",position:"Software Engineer Intern",location:"London, England, UK",duration:"Apr 2022 - Sep 2022",description:"Developed performance analysis software for elite motorsport teams across 10+ series and championships, enabling teams to visualise trends, make in-race strategic decisions and review driver performance.",redirect:"https://sbgsportssoftware.com/product/racewatch-for-teams",redirectText:"Learn more",darkened:!0})}),Object(f.jsx)(O.a,{xs:12,children:Object(f.jsx)(v,{imageSource:i(54).default,title:"Biiah for iOS",company:"Biiah",position:"iOS Developer",location:"London, England, UK",duration:"Jan 2021 - Aug 2021",description:"Developed the Biiah (formerly Tchzant) iOS app, enabling people of all backgrounds to learn singing in a gamified format.",redirect:"https://biiah.com",redirectText:"Learn more"})})]})};var k=function(e){return Object(f.jsx)("div",{className:"d-flex justify-content-center align-items-center bg-black card-expandable",style:{backgroundImage:"linear-gradient(to left, rgba(255, 255, 255, 0.0), rgba(0, 0, 0, 0.9)), url("+e.imageSource+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:Object(f.jsx)(o.a,{className:"p-3 text-start",children:Object(f.jsx)("h2",{children:e.title})})})};var S=function(){var e=new Map([["Chevrolet Corvette C6",i(55).default],["Honda NSX (NA1)",i(56).default],["Lotus Elise (Series 3)",i(57).default],["Porsche 911 Turbo (930)",i(58).default],["Aston Martin DB5",i(59).default],["Rolls-Royce Phantom VII",i(60).default],["Polestar 2",i(61).default],["Ferrari 458 Italia",i(62).default],["Ferrari 308 GTS",i(63).default],["Lexus ES (XV30)",i(64).default]]),t=Array.from(e.entries()).map((function(e){var t=Object(c.a)(e,2),i=t[0],a=t[1];return Object(f.jsx)(k,{imageSource:a,title:i},i)}));return Object(f.jsx)(O.a,{xs:12,children:t})},w=i(38),L=i(3);var N=function(){var e=Object(w.a)([{path:"/",element:Object(f.jsx)(y,{})},{path:"/top100cars",element:Object(f.jsx)(S,{})}]);return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(x.a,{className:"gx-0 gy-1",children:[Object(f.jsx)(O.a,{xs:12,children:Object(f.jsx)(g,{imageSource:i(65).default})}),Object(f.jsx)(L.b,{router:e}),Object(f.jsx)(O.a,{xs:12,children:Object(f.jsxs)("div",{className:"mt-5 mb-3",children:["jyjulianwong.github.io v","0.5.0",".",Object(f.jsx)("br",{}),"Authored by Julian Wong in 2023.",Object(f.jsx)("br",{}),Object(f.jsx)("a",{href:"https://www.flaticon.com/free-icons/landing-page",title:"landing page icons",children:"Landing page icons created by Freepik - Flaticon."})]})})]})})},A=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,74)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),r(e),c(e)}))};r.a.render(Object(f.jsx)(N,{}),document.getElementById("root")),A()}},[[66,1,2]]]);
//# sourceMappingURL=main.f66e57bf.chunk.js.map