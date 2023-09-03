"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[922],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||n;return a?r.createElement(k,o(o({ref:t},u),{},{components:a})):r.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2141:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={sidebar_position:3},o="Introduzione a curtosi, asimmetria e correlazione",l={unversionedId:"eda/curtosi-asimmetria-correlazione",id:"eda/curtosi-asimmetria-correlazione",title:"Introduzione a curtosi, asimmetria e correlazione",description:"Argomenti: Curtosi, Asimmetria (Skewness), Coefficiente di correlazione di Pearson.",source:"@site/docs/eda/curtosi-asimmetria-correlazione.mdx",sourceDirName:"eda",slug:"/eda/curtosi-asimmetria-correlazione",permalink:"/python-starter-kit/docs/eda/curtosi-asimmetria-correlazione",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Statistiche descrittive semplici",permalink:"/python-starter-kit/docs/eda/statistiche-descrittive"},next:{title:"Manipolazione dei dati",permalink:"/python-starter-kit/docs/category/manipolazione-dei-dati"}},s={},c=[{value:"Intro",id:"intro",level:2},{value:"Curtosi",id:"curtosi",level:2},{value:"Asimmetria (Skewness)",id:"asimmetria-skewness",level:2},{value:"Correlazione",id:"correlazione",level:2},{value:"Esercizi",id:"esercizi",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduzione-a-curtosi-asimmetria-e-correlazione"},"Introduzione a curtosi, asimmetria e correlazione"),(0,i.kt)("p",null,"Argomenti: Curtosi, Asimmetria (Skewness), Coefficiente di correlazione di Pearson."),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Nell'analisi esplorativa dei dati, oltre alle statistiche descrittive fondamentali, \xe8 essenziale comprendere altre metriche che danno informazioni sulla forma della distribuzione dei dati e le relazioni tra variabili. In questo contesto, curtosi, asimmetria e correlazione svolgono un ruolo cruciale."),(0,i.kt)("h2",{id:"curtosi"},"Curtosi"),(0,i.kt)("p",null,"La ",(0,i.kt)("strong",{parentName:"p"},"curtosi"),' misura la "coda" della distribuzione. Indica se i dati sono pesantemente concentrati attorno alla media (leptocurtica) o se sono pi\xf9 distribuiti (platicurtica).'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Leptocurtica"),": Curtosi > 0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mesocurtica")," (simile alla normale): Curtosi = 0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Platicurtica"),": Curtosi < 0")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"curtosi = data['colonna'].kurt()\n")),(0,i.kt)("h2",{id:"asimmetria-skewness"},"Asimmetria (Skewness)"),(0,i.kt)("p",null,"L'",(0,i.kt)("strong",{parentName:"p"},"asimmetria")," misura la simmetria (o mancanza di essa) della distribuzione dei dati attorno alla media. Indica la direzione e la quantit\xe0 di asimmetria."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Asimmetria positiva"),": Coda a destra"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Asimmetria negativa"),": Coda a sinistra")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"asimmetria = data['colonna'].skew()\n")),(0,i.kt)("h2",{id:"correlazione"},"Correlazione"),(0,i.kt)("p",null,"La ",(0,i.kt)("strong",{parentName:"p"},"correlazione")," misura la relazione lineare tra due variabili. Il coefficiente di correlazione di Pearson varia tra -1 e 1."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Correlazione positiva"),": quando una variabile aumenta, l'altra tende ad aumentare."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Correlazione negativa"),": quando una variabile aumenta, l'altra tende a diminuire."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nessuna correlazione"),": nessuna relazione lineare evidente.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"correlazione = data['colonna1'].corr(data['colonna2'])\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Il metodo ",(0,i.kt)("inlineCode",{parentName:"p"},"corr()")," di Pandas pu\xf2 essere utilizzato su un intero DataFrame per ottenere una matrice di correlazione tra tutte le variabili\n:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"matrice_correlazione = data.corr()\n"))),(0,i.kt)("h2",{id:"esercizi"},"Esercizi"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Calcola l'asimmetria e la curtosi per una delle tue variabili e rifletti su come i dati sono distribuiti."),(0,i.kt)("li",{parentName:"ol"},"Analizza la correlazione tra due variabili nel tuo set di dati."),(0,i.kt)("li",{parentName:"ol"},"Utilizza il metodo ",(0,i.kt)("inlineCode",{parentName:"li"},"corr()")," per visualizzare una matrice di correlazione e individua le variabili fortemente correlate.")),(0,i.kt)("p",null,"Congratulazioni! \ud83c\udf89"),(0,i.kt)("p",null,"Hai approfondito la tua comprensione di metriche avanzate nell'Analisi Esplorativa dei Dati."))}p.isMDXComponent=!0}}]);