"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[814],{3905:(e,i,t)=>{t.d(i,{Zo:()=>s,kt:()=>f});var n=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),p=function(e){var i=n.useContext(d),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},s=function(e){var i=p(e.components);return n.createElement(d.Provider,{value:i},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},u=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return t?n.createElement(f,o(o({ref:i},s),{},{components:t})):n.createElement(f,o({ref:i},s))}));function f(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var d in i)hasOwnProperty.call(i,d)&&(l[d]=i[d]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5577:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const r={sidebar_position:3},o="Esplorazione dei dati",l={unversionedId:"pandas/esplorazione-dei-dati",id:"pandas/esplorazione-dei-dati",title:"Esplorazione dei dati",description:"Argomenti: head(), describe(), info()",source:"@site/docs/pandas/esplorazione-dei-dati.mdx",sourceDirName:"pandas",slug:"/pandas/esplorazione-dei-dati",permalink:"/python-starter-kit/docs/pandas/esplorazione-dei-dati",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Lettura dei dati da CSV",permalink:"/python-starter-kit/docs/pandas/lettura-dati-csv"},next:{title:"Filtraggio e selezione di dati",permalink:"/python-starter-kit/docs/pandas/filtraggio-e-selezione-dati"}},d={},p=[{value:"Intro",id:"intro",level:2},{value:"<code>head()</code>",id:"head",level:2},{value:"<code>describe()</code>",id:"describe",level:2},{value:"<code>info()</code>",id:"info",level:2},{value:"Esercizi",id:"esercizi",level:2},{value:"Esercizio 1",id:"esercizio-1",level:3}],s={toc:p},c="wrapper";function m(e){let{components:i,...t}=e;return(0,a.kt)(c,(0,n.Z)({},s,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"esplorazione-dei-dati"},"Esplorazione dei dati"),(0,a.kt)("p",null,"Argomenti: ",(0,a.kt)("inlineCode",{parentName:"p"},"head()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"describe()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"info()")),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Una volta caricati i dati in un ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFrame")," con Pandas, spesso il primo passo \xe8 esplorare questi dati per avere una prima comprensione di cosa contengano. Pandas offre diversi metodi utili per dare un'occhiata iniziale ai dati e raccogliere statistiche sommarie."),(0,a.kt)("h2",{id:"head"},(0,a.kt)("inlineCode",{parentName:"h2"},"head()")),(0,a.kt)("p",null,"Il metodo ",(0,a.kt)("inlineCode",{parentName:"p"},"head()")," permette di visualizzare le prime righe di un ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFrame"),". Di default, mostra le prime 5 righe, ma \xe8 possibile specificare un numero diverso come argomento:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n# Supponiamo di avere un DataFrame chiamato df\ndf.head()  # mostra le prime 5 righe\ndf.head(10)  # mostra le prime 10 righe`\n")),(0,a.kt)("h2",{id:"describe"},(0,a.kt)("inlineCode",{parentName:"h2"},"describe()")),(0,a.kt)("p",null,"Il metodo ",(0,a.kt)("inlineCode",{parentName:"p"},"describe()")," fornisce statistiche descrittive del ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFrame"),". Questo include conteggi, medie, deviazioni standard, valori minimi e massimi, e i quartili. \xc8 particolarmente utile per avere una visione d'insieme delle distribuzioni numeriche nel tuo set di dati:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"df.describe()\n")),(0,a.kt)("p",null,"Da notare che ",(0,a.kt)("inlineCode",{parentName:"p"},"describe()")," di default considera solo le colonne numeriche. Se vuoi includere anche le colonne non numeriche, puoi utilizzare l'opzione ",(0,a.kt)("inlineCode",{parentName:"p"},"include='all'"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"df.describe(include='all')`\n")),(0,a.kt)("h2",{id:"info"},(0,a.kt)("inlineCode",{parentName:"h2"},"info()")),(0,a.kt)("p",null,"Il metodo ",(0,a.kt)("inlineCode",{parentName:"p"},"info()")," fornisce un sommario conciso del ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFrame"),", mostrando il tipo di dati di ciascuna colonna, il numero di valori non nulli e l'uso della memoria:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"df.info()\n")),(0,a.kt)("p",null,"Questo metodo \xe8 estremamente utile quando si lavora con grandi set di dati, in quanto fornisce informazioni sul tipo di dati e su eventuali valori mancanti."),(0,a.kt)("h2",{id:"esercizi"},"Esercizi"),(0,a.kt)("h3",{id:"esercizio-1"},"Esercizio 1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Crea un ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFrame")," a partire da un file CSV o da un dizionario. Usa il metodo ",(0,a.kt)("inlineCode",{parentName:"p"},"head()")," per visualizzare le prime righe del ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFrame"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Utilizza ",(0,a.kt)("inlineCode",{parentName:"p"},"describe()")," per ottenere statistiche descrittive del tuo ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFrame"),". Prova anche l'opzione ",(0,a.kt)("inlineCode",{parentName:"p"},"include='all'")," e osserva le differenze.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Chiama il metodo ",(0,a.kt)("inlineCode",{parentName:"p"},"info()")," sul tuo ",(0,a.kt)("inlineCode",{parentName:"p"},"DataFrame")," e analizza l'output. Ci sono colonne con valori mancanti? Quali colonne occupano pi\xf9 memoria?"))),(0,a.kt)("p",null,"Congratulazioni! \ud83c\udf89"),(0,a.kt)("p",null,"Hai acquisito strumenti fondamentali per esplorare e comprendere rapidamente i tuoi set di dati con Pandas."))}m.isMDXComponent=!0}}]);