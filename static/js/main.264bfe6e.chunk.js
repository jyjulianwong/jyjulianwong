(this.webpackJsonpjyjulianwong=this.webpackJsonpjyjulianwong||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/julian.fd90f2a3.png"},28:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/amphere.97f7b9ca.png"},29:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/catapultsports.4e30d04f.png"},30:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/biiah.e9c4f2ab.png"},31:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n(6),a=n.n(r),c=(n(22),n(23),n(24),n(16)),s=n(37),o=n(34),l=n(10),d=n.n(l),h=n(11),j=n(12),u=n(13),p=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:65536;Object(j.a)(this,e),this.action=t,this.interval=n,this.stopOnNextIter=i,this.iter=r,this.iterOverflow=a,this.init()}return Object(u.a)(e,[{key:"init",value:function(){var t=Object(h.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.stopOnNextIter){t.next=8;break}return t.next=3,e.delay(this.interval);case 3:this.action(),this.iter=(this.iter+1)%this.iterOverflow,console.log("RepeatingTimer: Tick: "+this.iter),t.next=0;break;case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"stop",value:function(){this.stopOnNextIter=!0}}],[{key:"delay",value:function(e){return new Promise((function(t){setTimeout(t,e)}))}}]),e}(),b=n(1);var x=function(){var e="jyjulianwong",t=Object(i.useState)(0),n=Object(c.a)(t,2),r=n[0],a=n[1];return Object(i.useEffect)((function(){var t=new p((function(){a((function(t){return(t+1)%(e.length+1)}))}),750);return function(){t.stop()}}),[]),Object(b.jsx)(s.a,{className:"bg-white",expand:"lg",children:Object(b.jsx)(o.a,{children:Object(b.jsx)(s.a.Brand,{href:"#",children:"> "+e+(r%2==0?"_":"")})})})};var m=function(e){var t=e.imageSource?"bg-image":e.darkened?"bg-black":"bg-white";return Object(b.jsx)("div",{className:"d-flex justify-content-center align-items-center "+t,style:{height:360,backgroundImage:"url("+e.imageSource+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},children:Object(b.jsxs)(o.a,{className:"p-3 text-start",children:[Object(b.jsx)("h1",{children:Object(b.jsx)("mark",{children:e.title})}),Object(b.jsx)("h6",{children:Object(b.jsx)("mark",{children:e.description})})]})})},g=n(35),f=n(36);var O=function(e){var t=e.darkened?"bg-black":"bg-white";return Object(b.jsx)("div",{className:"px-3 py-5 "+t,children:Object(b.jsxs)(g.a,{className:"gx-1 gy-3",children:[Object(b.jsx)(f.a,{xs:12,children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)("h1",{children:e.title}),Object(b.jsx)("h6",{children:e.description}),e.redirect&&e.redirectText&&Object(b.jsx)("h5",{children:Object(b.jsxs)("a",{href:e.redirect,style:{textDecoration:"none"},children:[e.redirectText," >"]})})]})}),Object(b.jsx)(f.a,{xs:12,children:e.imageSource&&Object(b.jsx)("img",{src:e.imageSource,alt:"",style:{maxWidth:"100%"}})}),Object(b.jsx)(f.a,{xs:6,md:3,children:Object(b.jsxs)(o.a,{children:["Company",Object(b.jsx)("h6",{children:e.company})]})}),Object(b.jsx)(f.a,{xs:6,md:3,children:Object(b.jsxs)(o.a,{children:["Position",Object(b.jsx)("h6",{children:e.position})]})}),Object(b.jsx)(f.a,{xs:6,md:3,children:Object(b.jsxs)(o.a,{children:["Location",Object(b.jsx)("h6",{children:e.location})]})}),Object(b.jsx)(f.a,{xs:6,md:3,children:Object(b.jsxs)(o.a,{children:["Duration",Object(b.jsx)("h6",{children:e.duration})]})})]})})};var v=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(x,{}),Object(b.jsxs)(g.a,{className:"g-1",children:[Object(b.jsx)(f.a,{xs:12,children:Object(b.jsx)(m,{imageSource:n(27).default,title:"Hi! I'm Julian.",description:"Final-Year M.Eng. Computing (Artificial Intelligence and Machine Learning) Student @ Imperial College London",darkened:!0})}),Object(b.jsx)(f.a,{xs:12,children:Object(b.jsx)(O,{imageSource:n(28).default,title:"Amphere Web App",company:"Amphere Ltd",position:"Full-Stack Web Developer",location:"London, England, UK",duration:"Mar 2022 - Jun 2022",description:"Led an engineering team of 3 creating an all-in-one professional social platform for musicians, as part of a project submission for the Venture Catalyst Challenge at the Imperial Enterprise Lab.",redirect:"https://github.com/Amphere-Ltd/Amphere-WebApp-React",redirectText:"See the repository"})}),Object(b.jsx)(f.a,{xs:12,children:Object(b.jsx)(O,{imageSource:n(29).default,title:"RaceWatch",company:"Catapult Sports",position:"Software Engineer Intern",location:"London, England, UK",duration:"Apr 2022 - Sep 2022",description:"Developed performance analysis software for elite motorsport teams across 10+ series and championships, enabling teams to visualise trends, make in-race strategic decisions and review driver performance.",redirect:"https://sbgsportssoftware.com/product/racewatch-for-teams",redirectText:"Learn more",darkened:!0})}),Object(b.jsx)(f.a,{xs:12,children:Object(b.jsx)(O,{imageSource:n(30).default,title:"Biiah for iOS",company:"Biiah",position:"iOS Developer",location:"London, England, UK",duration:"Jan 2021 - Aug 2021",description:"Developed the Biiah (formerly Tchzant) iOS app, enabling people of all backgrounds to learn singing in a gamified format.",redirect:"https://biiah.com",redirectText:"Learn more"})})]}),Object(b.jsx)(g.a,{className:"mt-5 mb-3 px-3",children:Object(b.jsxs)(f.a,{xs:12,children:["jyjulianwong.github.io v","0.4.2",".",Object(b.jsx)("br",{}),"Authored by Julian Wong in 2022."]})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),a(e),c(e)}))};a.a.render(Object(b.jsx)(v,{}),document.getElementById("root")),y()}},[[31,1,2]]]);
//# sourceMappingURL=main.264bfe6e.chunk.js.map