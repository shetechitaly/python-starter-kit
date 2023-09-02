"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[148],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>f});var i=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),d=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=d(e.components);return i.createElement(s.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?i.createElement(f,o(o({ref:a},c),{},{components:t})):i.createElement(f,o({ref:a},c))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4967:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(7462),n=(t(7294),t(3905));const r={sidebar_position:2},o="Pandas: Lettura dei dati da CSV",l={unversionedId:"pandas/lettura-dati-csv",id:"pandas/lettura-dati-csv",title:"Pandas: Lettura dei dati da CSV",description:"Argomenti: read_csv()",source:"@site/docs/pandas/lettura-dati-csv.mdx",sourceDirName:"pandas",slug:"/pandas/lettura-dati-csv",permalink:"/python-starter-kit/docs/pandas/lettura-dati-csv",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pandas: DataFrame e Series",permalink:"/python-starter-kit/docs/pandas/dataframe-e-series"},next:{title:"Pandas: Esplorazione dei dati",permalink:"/python-starter-kit/docs/pandas/esplorazione-dei-dati"}},s={},d=[{value:"Intro",id:"intro",level:2},{value:"read_csv()",id:"read_csv",level:2},{value:"Opzioni Comuni",id:"opzioni-comuni",level:2},{value:"Esercizi",id:"esercizi",level:2},{value:"Esercizio 1",id:"esercizio-1",level:3},{value:"Esercizio 2",id:"esercizio-2",level:3}],c={toc:d},p="wrapper";function u(e){let{components:a,...t}=e;return(0,n.kt)(p,(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pandas-lettura-dei-dati-da-csv"},"Pandas: Lettura dei dati da CSV"),(0,n.kt)("p",null,"Argomenti: read_csv()"),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"Lavorare con i dati \xe8 una delle funzioni primarie di Pandas, e uno dei formati di dati pi\xf9 comuni con cui gli analisti lavorano \xe8 il ",(0,n.kt)("a",{parentName:"p",href:"https://it.wikipedia.org/wiki/Comma-separated_values"},"CSV")," (Comma-Separated Values). Pandas offre funzionalit\xe0 potenti e flessibili per la lettura dei file CSV e la conversione di questi dati in un DataFrame."),(0,n.kt)("h2",{id:"read_csv"},"read_csv()"),(0,n.kt)("p",null,"La funzione read_csv() di Pandas \xe8 una delle funzioni pi\xf9 utilizzate per caricare dati da file CSV. Ha molte opzioni che possono essere personalizzate per gestire casi particolari, ma l'uso base \xe8 abbastanza semplice."),(0,n.kt)("p",null,"Ecco un esempio di come leggere un file CSV:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\n# Leggi il file CSV e memorizzalo in un DataFrame\ndf = pd.read_csv('nome_del_file.csv')\n\n# Stampa le prime 5 righe del DataFrame\nprint(df.head())\n")),(0,n.kt)("p",null,"Nell'esempio sopra, stiamo leggendo un file CSV chiamato 'nome_del_file.csv' e stampando le prime 5 righe del DataFrame risultante."),(0,n.kt)("h2",{id:"opzioni-comuni"},"Opzioni Comuni"),(0,n.kt)("p",null,"La funzione read_csv() ha molte opzioni che possono essere utili. Ecco alcune delle pi\xf9 comuni:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"delimiter"),": Specifica il delimitatore utilizzato nel file. Il default \xe8 la virgola (,). Ad esempio, per un file TSV (Tab-Separated Values), puoi usare delimiter='\\t'."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"header"),": Specifica quale riga del file da utilizzare come intestazione delle colonne. Di default \xe8 impostato su header=0, che utilizza la prima riga."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"index_col"),": Permette di specificare una colonna del CSV da utilizzare come indice per il DataFrame."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"usecols"),": Consente di selezionare un sottoinsieme di colonne da leggere nel DataFrame."),(0,n.kt)("p",null,"Ecco come potresti utilizzare alcune di queste opzioni:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.read_csv('nome_del_file.csv', delimiter=';', header=None, usecols=[0, 2, 4])\n")),(0,n.kt)("h2",{id:"esercizi"},"Esercizi"),(0,n.kt)("h3",{id:"esercizio-1"},"Esercizio 1"),(0,n.kt)("p",null,"Scarica un qualsiasi file CSV di esempio dalla rete (o crea uno tu stesso). Prova a leggere il file in un DataFrame usando Pandas e stampa le prime 10 righe."),(0,n.kt)("h3",{id:"esercizio-2"},"Esercizio 2"),(0,n.kt)("p",null,"Leggi lo stesso file CSV ma questa volta seleziona solo un paio di colonne e usa una colonna diversa come indice."),(0,n.kt)("p",null,"Congratulazioni! \ud83c\udf89"),(0,n.kt)("p",null,"Con la capacit\xe0 di leggere dati da file CSV, hai ora accesso a una vasta gamma di dataset disponibili online."))}u.isMDXComponent=!0}}]);