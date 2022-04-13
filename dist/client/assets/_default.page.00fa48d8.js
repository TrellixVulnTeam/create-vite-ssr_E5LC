import{r as h,a as f,F as y,j as p,R as b}from"./chunk-cd4da2a8.js";import{r as d}from"./chunk-eb00f8b0.js";function m(t,o){return m=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},m(t,o)}function w(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,m(t,o)}var E=function(o,i){return o===void 0&&(o=[]),i===void 0&&(i=[]),o.length!==i.length||o.some(function(e,r){return!Object.is(e,i[r])})},g={error:null},x=function(t){w(o,t);function o(){for(var e,r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s))||this,e.state=g,e.resetErrorBoundary=function(){for(var n,l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];e.props.onReset==null||(n=e.props).onReset.apply(n,c),e.reset()},e}o.getDerivedStateFromError=function(r){return{error:r}};var i=o.prototype;return i.reset=function(){this.setState(g)},i.componentDidCatch=function(r,s){var a,n;(a=(n=this.props).onError)==null||a.call(n,r,s)},i.componentDidUpdate=function(r,s){var a=this.state.error,n=this.props.resetKeys;if(a!==null&&s.error!==null&&E(r.resetKeys,n)){var l,c;(l=(c=this.props).onResetKeysChange)==null||l.call(c,r.resetKeys,n),this.reset()}},i.render=function(){var r=this.state.error,s=this.props,a=s.fallbackRender,n=s.FallbackComponent,l=s.fallback;if(r!==null){var c={error:r,resetErrorBoundary:this.resetErrorBoundary};if(h.exports.isValidElement(l))return l;if(typeof a=="function")return a(c);if(n)return h.exports.createElement(n,c);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},o}(h.exports.Component);const A=({children:t,routeTransitioning:o})=>f(y,{children:[p(S,{transitioning:o}),f("div",{className:"flex max-w-900px m-auto",children:[f("div",{className:"p-5 flex-shrink-0 flex flex-col items-end leading-7",children:[p("h1",{className:"my-4 text-2xl",children:"Vite SSR Relay"}),Object.entries({"/":"Home","/repo/moogieon/create-vite-ssr/issues":"Issues","/repo/moogieon/create-vite-ssr/issues/create":"Create Issue"}).map(([e,r])=>p("a",{href:e,className:"text-base hover:text-1.05rem transition-all duration-300",children:r},e))]}),p("div",{className:"p-5 pb-12 border-l-2 border-#eee min-h-screen",children:p(x,{FallbackComponent:R,children:p(b.Suspense,{fallback:"Loading...",children:t})})})]})]}),S=({transitioning:t})=>p("div",{className:"absolute left-0 right-0 top-0 h-2 bg-green-200 transition-opacity duration-300",style:{opacity:t?100:0}}),R=({error:t})=>f(y,{children:["Error: ",t.message]}),v=function(){if(typeof globalThis!="undefined")return globalThis;if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("unable to locate global object")}(),j=v.fetch||(()=>Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!")));v.Headers;const F=(t,o)=>{const i=d.Network.create(async({text:s},a)=>{const n=await j("https://api.github.com/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer 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"},body:JSON.stringify({query:s,variables:a})});if(n.status!==200)throw console.error(await n.text()),new Error("Relay Network Error: Invalid response from server");return await n.json()}),e=new d.RecordSource(o),r=new d.Store(e,{gcReleaseBufferSize:10});return new d.Environment({configName:t?"server":"client",network:i,store:r})},O={title:"Vite SSR app",meta:{description:"App using Vite + vite-plugin-ssr"}};export{A as PageLayout,O as head,F as initRelayEnvironment};
