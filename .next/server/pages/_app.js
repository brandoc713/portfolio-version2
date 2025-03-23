"use strict";(()=>{var e={};e.id=636,e.ids=[636],e.modules={2521:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var s=t(8732),o=t(2770);let n={fonts:{title:"Space Grotesk, sans-serif",main:"Space Grotesk, sans-serif"},colors:{primary1:"hsl(204,23.8%,95.9%)",background1:"#0F1624",accent1:"hsl(34.9,98.6%,72.9%)",button:"hsl(205.1,100%,36.1%)",background2:"hsl(232.7,27.3%,23.7%)"},breakpoints:{sm:"screen and (max-width: 640px)",md:"screen and (max-width: 768px)",lg:"screen and (max-width: 1024px)",xl:"screen and (max-width: 1280px)"}},a=require("styled-normalize"),i=(0,o.createGlobalStyle)`
  ${a.normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${e=>e.theme.fonts.main};
    font-size: 1.6rem;
    background: ${e=>e.theme.colors.background1};
    color: ${e=>e.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${e=>e.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`,l=({children:e})=>(0,s.jsxs)(o.ThemeProvider,{theme:n,children:[(0,s.jsx)(i,{}),e]});function d({Component:e,pageProps:r}){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l,{children:(0,s.jsx)(e,{...r})})})}},2770:e=>{e.exports=require("styled-components")},8732:e=>{e.exports=require("react/jsx-runtime")}};var r=require("../webpack-runtime.js");r.C(e);var t=r(r.s=2521);module.exports=t})();