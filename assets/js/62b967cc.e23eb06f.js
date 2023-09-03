"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[101],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>v});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),u=n,v=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return i?a.createElement(v,o(o({ref:t},c),{},{components:i})):a.createElement(v,o({ref:t},c))}));function v(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},9089:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=i(7462),n=(i(7294),i(3905));const r={sidebar_position:2},o="Statistiche descrittive semplici",l={unversionedId:"eda/statistiche-descrittive",id:"eda/statistiche-descrittive",title:"Statistiche descrittive semplici",description:"Argomenti: media, mediana, deviazione standard, quartili, valori minimi e massimi.",source:"@site/docs/eda/statistiche-descrittive.mdx",sourceDirName:"eda",slug:"/eda/statistiche-descrittive",permalink:"/python-starter-kit/docs/eda/statistiche-descrittive",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Comprendere distribuzione e natura dei dati",permalink:"/python-starter-kit/docs/eda/distribuzione-natura-dati"},next:{title:"Extras",permalink:"/python-starter-kit/docs/category/extras"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"Statistiche chiave",id:"statistiche-chiave",level:2},{value:"Media e Mediana",id:"media-e-mediana",level:3},{value:"Deviazione Standard",id:"deviazione-standard",level:3},{value:"Quartili, Minimi e Massimi",id:"quartili-minimi-e-massimi",level:3},{value:"Esercizi",id:"esercizi",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"statistiche-descrittive-semplici"},"Statistiche descrittive semplici"),(0,n.kt)("p",null,"Argomenti: media, mediana, deviazione standard, quartili, valori minimi e massimi."),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"Una parte essenziale dell'EDA \xe8 comprendere le statistiche descrittive di base dei dati. Queste statistiche forniscono un riassunto numerico delle caratteristiche di un set di dati, permettendo di ottenere rapidamente una visione d'insieme delle tendenze centrali, della dispersione e della forma dei dati."),(0,n.kt)("h2",{id:"statistiche-chiave"},"Statistiche chiave"),(0,n.kt)("h3",{id:"media-e-mediana"},"Media e Mediana"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Media"),' \xe8 la somma di tutti i valori divisa per il numero di valori. Riflette il valore "centrale" del set di dati.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"media = data['colonna'].mean()\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Mediana")," \xe8 il valore centrale di un set di dati quando \xe8 ordinato. \xc8 meno sensibile agli outlier rispetto alla media."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"mediana = data['colonna'].median()\n")),(0,n.kt)("h3",{id:"deviazione-standard"},"Deviazione Standard"),(0,n.kt)("p",null,"La ",(0,n.kt)("strong",{parentName:"p"},"deviazione standard")," rappresenta la dispersione dei dati attorno alla loro media. Un valore elevato indica una maggiore variabilit\xe0."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"dev_std = data['colonna'].std()\n")),(0,n.kt)("h3",{id:"quartili-minimi-e-massimi"},"Quartili, Minimi e Massimi"),(0,n.kt)("p",null,"I ",(0,n.kt)("strong",{parentName:"p"},"quartili")," dividono i dati in quattro parti uguali. Il primo quartile (Q1) \xe8 il valore al 25\xb0 percentile, mentre il terzo quartile (Q3) \xe8 al 75\xb0 percentile."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"Q1 = data['colonna'].quantile(0.25)\nQ3 = data['colonna'].quantile(0.75)\n")),(0,n.kt)("p",null,"I ",(0,n.kt)("strong",{parentName:"p"},"valori minimi e massimi")," rappresentano i valori estremi del set di dati."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"minimo = data['colonna'].min()\nmassimo = data['colonna'].max()\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Il metodo ",(0,n.kt)("inlineCode",{parentName:"p"},"describe()")," di Pandas fornisce un sommario di tutte queste statistiche descrittive in una sola chiamata:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"data['colonna'].describe()\n"))),(0,n.kt)("h2",{id:"esercizi"},"Esercizi"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Calcola la media, la mediana e la deviazione standard di una delle tue variabili."),(0,n.kt)("li",{parentName:"ol"},"Identifica i quartili per una variabile e rifletti su come i dati sono distribuiti."),(0,n.kt)("li",{parentName:"ol"},"Confronta le statistiche descrittive di due diverse colonne nel tuo set di dati."),(0,n.kt)("li",{parentName:"ol"},"Utilizza il metodo ",(0,n.kt)("inlineCode",{parentName:"li"},"describe()")," per ottenere un sommario delle statistiche chiave e rifletti su eventuali insight che potrebbero emergere.")),(0,n.kt)("p",null,"Congratulazioni! \ud83c\udf89"),(0,n.kt)("p",null,"Hai acquisito una solida comprensione delle statistiche descrittive di base nell'ambito dell'Analisi Esplorativa dei Dati."))}m.isMDXComponent=!0}}]);