import{u as c,b as l,w as i}from"./index.esm-Cj8eDKJ_.js";import{r as o,l as e}from"./chunk-IR6S3I6Y-DqGSzMNL.js";const m=({className:t})=>{const{theme:n}=c(),[r,a]=o.useState(!1);if(o.useEffect(()=>{a(!0)},[]),!r)return null;var s="app/assets/zero2react-dark.svg";return n==="light"&&(s="app/assets/zero2react-light.svg"),e.jsx("main",{className:t+" logo-container",children:e.jsx("img",{className:"logo",src:s,alt:"Zero2React Logo"})})},u=()=>e.jsxs("main",{className:"d-flex mt-5 flex-column justify-content-center align-items-center",children:[e.jsx(m,{className:"w-25 h-25 items-center justify-center"}),e.jsx("h1",{className:"text-7xl mt-4 font-bold text-center tagline",children:"Invest. Grow. Succeed."}),e.jsx(l,{onSuccess:t=>{console.log(t)},onError:()=>{console.log("Login Failed")},useOneTap:!0})]});function p({}){return[{title:"Zero2React"},{name:"description",content:"Investments Platform"}]}const g=()=>e.jsx(u,{}),h=i(g);export{h as default,p as meta};
