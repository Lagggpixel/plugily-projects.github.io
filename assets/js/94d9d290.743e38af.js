"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3161],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=m(a),u=r,g=k["".concat(o,".").concat(u)]||k[u]||p[u]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6541:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=["components"],s={id:"cmdsandperms",title:"Commands and permissions",sidebar_label:"Commands and permissions"},o=void 0,m={unversionedId:"villagedefense/setup/cmdsandperms",id:"villagedefense/setup/cmdsandperms",title:"Commands and permissions",description:"---",source:"@site/docs/villagedefense/setup/cmd-perms.md",sourceDirName:"villagedefense/setup",slug:"/villagedefense/setup/cmdsandperms",permalink:"/villagedefense/setup/cmdsandperms",editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/documentation/docs/villagedefense/setup/cmd-perms.md",tags:[],version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1627818585,formattedLastUpdatedAt:"8/1/2021",frontMatter:{id:"cmdsandperms",title:"Commands and permissions",sidebar_label:"Commands and permissions"},sidebar:"villagedefense",previous:{title:"Simple Setup",permalink:"/villagedefense/setup/simple"},next:{title:"Free maps",permalink:"/villagedefense/setup/maps"}},d={},p=[{value:"Player",id:"player",level:2},{value:"Admin",id:"admin",level:2},{value:"Basic permissions",id:"basic-permissions",level:2},{value:"Custom permissions",id:"custom-permissions",level:2},{value:"Kits permissions",id:"kits-permissions",level:2},{value:"Additional permissions",id:"additional-permissions",level:2}],k={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Overview about all commands and permissions"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"[","required argument","]"," ","(","optional argument",")"))),(0,i.kt)("h2",{id:"player"},"Player"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Permission"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vd join ","[arena/maxplayers]"),(0,i.kt)("td",{parentName:"tr",align:null},"villagedefense.join.%arena% villagedefense.join.* (all arenas)"),(0,i.kt)("td",{parentName:"tr",align:null},"Joins specified arena - ",(0,i.kt)("inlineCode",{parentName:"td"},"maxplayers")," join arena with most players")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vd randomjoin"),(0,i.kt)("td",{parentName:"tr",align:null},"Requires permission villagedefense.join.* to access all arenas"),(0,i.kt)("td",{parentName:"tr",align:null},"Joins random not started arena")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vd arenas"),(0,i.kt)("td",{parentName:"tr",align:null},"villagedefense.arenas"),(0,i.kt)("td",{parentName:"tr",align:null},"Overview over all arenas in one GUI. Select one to join")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vd stats (online player)"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Shows your stats")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vd leave"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Quits current game. You can disable game quit in config.yml")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vd top ","[statistic]"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Shows top 10 users from requested statistic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vd selectkit"),(0,i.kt)("td",{parentName:"tr",align:null},"villagedefense.command.selectkit"),(0,i.kt)("td",{parentName:"tr",align:null},"Change kit while being in game")))),(0,i.kt)("h2",{id:"admin"},"Admin"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"villagedefense.admin.*")," permission to give all admin commands permission"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Command"),(0,i.kt)("th",{parentName:"tr",align:null},"Permission"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Valid excecutors"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.updatenotify")),(0,i.kt)("td",{parentName:"tr",align:null},"Notifies about plugin update on join"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.command.override")),(0,i.kt)("td",{parentName:"tr",align:null},"Allows to use every command while being in-game"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.sign.create")," ",(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.sign.break")),(0,i.kt)("td",{parentName:"tr",align:null},"You can create or break signs with those permissions"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vd create ","[","arena","]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.create")),(0,i.kt)("td",{parentName:"tr",align:null},"Creates new arena with specified name"),(0,i.kt)("td",{parentName:"tr",align:null},"Player")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vd ","[","arena","]"," edit"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.create")),(0,i.kt)("td",{parentName:"tr",align:null},"Edits existing arena"),(0,i.kt)("td",{parentName:"tr",align:null},"Player")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda list"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.list")),(0,i.kt)("td",{parentName:"tr",align:null},"Prints list of available arenas"),(0,i.kt)("td",{parentName:"tr",align:null},"Player/Console")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda stop"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.stopgame")),(0,i.kt)("td",{parentName:"tr",align:null},"Stops game you're playing"),(0,i.kt)("td",{parentName:"tr",align:null},"Player")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda forcestart"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.forcestart")),(0,i.kt)("td",{parentName:"tr",align:null},"Force starts game you're in"),(0,i.kt)("td",{parentName:"tr",align:null},"Player")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda respawn ","(","player",")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.respawn villagedefense.admin.respawn.others")),(0,i.kt)("td",{parentName:"tr",align:null},"Respawn you/specified player in your arena"),(0,i.kt)("td",{parentName:"tr",align:null},"Player")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda spychat"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.spychat")),(0,i.kt)("td",{parentName:"tr",align:null},"Toggles all arenas chat visibility ","(","multi-arena feature only",")"),(0,i.kt)("td",{parentName:"tr",align:null},"Player")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda reload"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.reload")),(0,i.kt)("td",{parentName:"tr",align:null},"Reloads all game instances ",(0,i.kt)("strong",{parentName:"td"},"they will be stopped.  Usage highly discouraged!")),(0,i.kt)("td",{parentName:"tr",align:null},"Player/Console")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda delete ","[","arena","]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.delete")),(0,i.kt)("td",{parentName:"tr",align:null},"Deletes specified arena"),(0,i.kt)("td",{parentName:"tr",align:null},"Player")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda tp ","[","arena","]"," ","[","location type","]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.teleport")),(0,i.kt)("td",{parentName:"tr",align:null},"Teleports to specified arena location ",(0,i.kt)("strong",{parentName:"td"},"Location types:")," START, END, LOBBY"),(0,i.kt)("td",{parentName:"tr",align:null},"Player")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda clear ","[","mobtype","]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.clear")),(0,i.kt)("td",{parentName:"tr",align:null},"Clears specified mobs in your game"),(0,i.kt)("td",{parentName:"tr",align:null},"Player")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda addorbs ","[","amount","]"," ","(","player",")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.addorbs villagedefense.admin.addorbs.others")),(0,i.kt)("td",{parentName:"tr",align:null},"Adds orbs ","(","game currency",")"," to you/specified player"),(0,i.kt)("td",{parentName:"tr",align:null},"Player/Console when player argument is specified")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda addlevel ","[","number","]"," ","(","player",")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.addlevel")),(0,i.kt)("td",{parentName:"tr",align:null},"Add levels to player"),(0,i.kt)("td",{parentName:"tr",align:null},"Player/Console")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda setlevel ","[","number","]"," ","(","player",")"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.setlevel")),(0,i.kt)("td",{parentName:"tr",align:null},"Set levels of player"),(0,i.kt)("td",{parentName:"tr",align:null},"Player/Console")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda setwave ","[","number","]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.setwave")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets wave of game"),(0,i.kt)("td",{parentName:"tr",align:null},"Player")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"/vda setprice ","[","amount","]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"villagedefense.admin.setprice")),(0,i.kt)("td",{parentName:"tr",align:null},"Sets price of holding item ","(","use this for shop otherwise item won't work",")"),(0,i.kt)("td",{parentName:"tr",align:null},"Player")))),(0,i.kt)("h2",{id:"basic-permissions"},"Basic permissions"),(0,i.kt)("p",null,"Basic permissions are default permissions for games. Default permissions can be found in ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"config.yml"),".")," You can edit them to your likings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'Basic-Permissions:\n  Full-Games-Permission: "villagedefense.fullgames"\n  Vip-Permission: "villagedefense.vip"\n  Mvp-Permission: "villagedefense.mvp"\n  Elite-Permission: "villagedefense.elite"\n  Arena-Edit-Permission: "villagedefense.edit"\n  Join-Permission: "villagedefense.join.<arena>"\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Full-Games-Permission")," - Permission to join full arenas"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Vip-Permission")," - Gives permission to ",(0,i.kt)("strong",{parentName:"p"},"donator kits"),", joining ",(0,i.kt)("strong",{parentName:"p"},"full games")," and getting ",(0,i.kt)("strong",{parentName:"p"},"50% more orbs")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Mvp-Permission")," - Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"Vip-Permission")," but gives ",(0,i.kt)("strong",{parentName:"p"},"100% more orbs")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Elite-Permission")," - Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"Vip-Permission")," but gives ",(0,i.kt)("strong",{parentName:"p"},"150% more orbs")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Arena-Edit-Permission")," - Permission for creating arenas, overrides disabled commands option via config.yml"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Join-Permission")," - Permission to join arenas")),(0,i.kt)("h2",{id:"custom-permissions"},"Custom permissions"),(0,i.kt)("p",null,"Custom permissions are used for giving your players more orbs in game. Nothing more, nothing less."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using dots ",(0,i.kt)("inlineCode",{parentName:"p"},".")," in custom permissions will not work and will break permission, don't use them!"))),(0,i.kt)("p",null,"Custom permissions can be set up in ",(0,i.kt)("strong",{parentName:"p"},"config.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"CustomPermissions:\n  player-booster: 10\n  vip-booster: 100\n  staff-booster: 1000\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"player-booster")," - Gives player with this permission 10% more orbs on pickup"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"vip-booster")," - Gives player 100% more orbs"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"staff-booster")," - 1000% more orbs")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Avoid low percent values!")," Remember that 10% more orbs are actually nothing because it's 5~8 orbs + ",(0,i.kt)("strong",{parentName:"p"},"only 10% of this value more")," so you won't see any significant increase, use higher values too see the difference"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Permissions can be combined!")," Giving player permission ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"player.booster"))," and ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"vip.booster"))," will receive 110% more orbs on the pickup!"))),(0,i.kt)("h2",{id:"kits-permissions"},"Kits permissions"),(0,i.kt)("p",null,"Every kit has its own permission node to access it. Even if it's level kit, you can still unlock it getting its permission."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Archer kit permission - ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"villagedefense.kit.archer"))),(0,i.kt)("li",{parentName:"ul"},"Tornado kit permission - ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"villagedefense.kit.tornado"))),(0,i.kt)("li",{parentName:"ul"},"Heavy Tank kit permission - ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"villagedefense.kit.heavytank")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Info!")," ",(0,i.kt)("strong",{parentName:"p"},"Premium kits")," also unlocks with Vip/Mvp or Elite permissions and ",(0,i.kt)("strong",{parentName:"p"},"leveled kits")," are unlocked too when certain level is reached."))),(0,i.kt)("h2",{id:"additional-permissions"},"Additional permissions"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"villagedefense.command.bypass")," - Be able to bypass in-game command restriction"))}u.isMDXComponent=!0}}]);