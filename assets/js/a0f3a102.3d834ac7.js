"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[4133],{1567:(e,t,a)=>{a.d(t,{Z:()=>o});var i=a(7294),n=a(614);a(1905);class o extends i.Component{constructor(e){super(e),this.state={text:"Fetching latest config.."},this.props.url?fetch(this.props.url).then((e=>e.text())).then((e=>{this.setState({text:e})})).catch((e=>this.setState({text:"Error: "+e}))):this.state.text="Missing URL property"}render(){return i.createElement(n.Z,{language:"yaml"},this.state.text)}}},7670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var i=a(7462),n=(a(7294),a(3905)),o=(a(1567),a(4866)),r=a(5162);const l={id:"faq",title:"FAQ",sidebar_label:"FAQ"},s=void 0,p={unversionedId:"minigame/support/faq",id:"minigame/support/faq",title:"FAQ",description:"---",source:"@site/docs/minigame/support/faq.mdx",sourceDirName:"minigame/support",slug:"/minigame/support/faq",permalink:"/minigame/support/faq",draft:!1,editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/source/docs/minigame/support/faq.mdx",tags:[],version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1697485008,formattedLastUpdatedAt:"Oct 16, 2023",frontMatter:{id:"faq",title:"FAQ",sidebar_label:"FAQ"},sidebar:"minigames",previous:{title:"Plugin files explained",permalink:"/minigame/support/files"},next:{title:"Useful server admin tips",permalink:"/minigame/support/servertips"}},m={},u=[{value:"Supported server versions of our plugins",id:"version-support",level:3},{value:"<strong>Limitation of liability disclaimer</strong>",id:"limitation-of-liability-disclaimer",level:2},{value:"What do our plugins modify in the worlds being used?",id:"what-do-our-plugins-modify-in-the-worlds-being-used",level:3},{value:"Players can&#39;t join through signs",id:"players-cant-join-through-signs",level:2},{value:"How does randomjoin work?",id:"how-does-randomjoin-work",level:2},{value:"There are kinda like two cases:",id:"there-are-kinda-like-two-cases",level:3},{value:"How does maxplayers join work?",id:"how-does-maxplayers-join-work",level:2},{value:"How can I enable my old Scoreboard after leaving the game?",id:"how-can-i-enable-my-old-scoreboard-after-leaving-the-game",level:2}],d={toc:u},g="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Some basic questions and answers"),(0,n.kt)("h3",{id:"version-support"},"Supported server versions of our plugins"),(0,n.kt)("p",null,"Supported server versions are currently 1.8.8 - 1.20\nIf your plugin doesn't startup and you don't have this version you're receiving a message like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"  _   _           _                                                    _                _\n | \\ | |   ___   | |_     ___   _   _   _ __    _ __     ___    _ __  | |_    ___    __| |\n |  \\| |  / _ \\  | __|   / __| | | | | | '_ \\  | '_ \\   / _ \\  | '__| | __|  / _ \\  / _` |\n | |\\  | | (_) | | |_    \\__ \\ | |_| | | |_) | | |_) | | (_) | | |    | |_  |  __/ | (_| |\n |_| \\_|  \\___/   \\__|   |___/  \\__,_| | .__/  | .__/   \\___/  |_|     \\__|  \\___|  \\__,_|\n                                       |_|     |_|\nYour server version is not supported by us!\nSadly, we must shut off. Maybe you consider changing your server version?\n")),(0,n.kt)("h2",{id:"limitation-of-liability-disclaimer"},(0,n.kt)("strong",{parentName:"h2"},"Limitation of liability disclaimer")),(0,n.kt)("admonition",{title:"Critical security exploit caused by Log4j",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to be aware about a major security exploit found in 2021 on a common Java logging library. May your server is concerned by it.\n",(0,n.kt)("a",{parentName:"p",href:"https://www.minecraft.net/en-us/article/important-message--security-vulnerability-java-edition",title:"IMPORTANT MESSAGE: SECURITY VULNERABILITY IN JAVA EDITION"},"Check out minecraft.net article"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/threads/spigot-security-releases-%E2%80%94-1-8-8%E2%80%931-18.537204/",title:"IMPORTANT MESSAGE: UPDATE YOUR SERVER JAR!"},"Check out spigotmc.org article"))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Using our plugins you accept GPLv3 license and limitations of liability that our plugin can cause, please become acquainted with following warnings before using our plugin on a production server."))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Our minigame")," plugins ",(0,n.kt)("strong",{parentName:"p"},"SHOULD BE RUN")," on a separate world when using it on multi-mode servers like Factions, Survival, SkyBlock etc.")),(0,n.kt)("h3",{id:"what-do-our-plugins-modify-in-the-worlds-being-used"},"What do our plugins modify in the worlds being used?"),(0,n.kt)(o.Z,{groupId:"minigame",defaultValue:"villagedefense",queryString:!0,values:[{label:"VillageDefense",value:"villagedefense"},{label:"BuildBattle",value:"buildbattle"},{label:"MurderMystery",value:"murdermystery"},{label:"TheBridge",value:"thebridge"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"villagedefense",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Blocks creatures other than Village Defense ones"),(0,n.kt)("li",{parentName:"ul"},"Blocks mob spawning in a range of 150 in all directions from arena start location"),(0,n.kt)("li",{parentName:"ul"},"Does not block custom or command spawned creatures"),(0,n.kt)("li",{parentName:"ul"},"Cleans hoppers inventories"),(0,n.kt)("li",{parentName:"ul"},"Manipulates Villager entities"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Might not be compatible with other minigames ","(","zombies/villagers will be invisible",")")))),(0,n.kt)(r.Z,{value:"buildbattle",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modifies entities spawning"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Might not be compatible with other minigames ","(","game behavior may broke",")")))),(0,n.kt)(r.Z,{value:"murdermystery",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visibility of players in the world"),(0,n.kt)("li",{parentName:"ul"},"Modifies armorstands that are used for the arena"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Might not be compatible with other minigames ","(","game behavior may broke",")")))),(0,n.kt)(r.Z,{value:"thebridge",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Visibility of players in the world"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Might not be compatible with other minigames ","(","game behavior may broke",")"))))),(0,n.kt)("h2",{id:"players-cant-join-through-signs"},"Players can't join through signs"),(0,n.kt)("p",null,"This is a very common problem in every minigame plugin."),(0,n.kt)("p",null,"It's ",(0,n.kt)("strong",{parentName:"p"},"caused by spawn protection")," feature in vanilla Minecraft."),(0,n.kt)("p",null,"To disable this go to ",(0,n.kt)("strong",{parentName:"p"},"server.properties")," and change ",(0,n.kt)("strong",{parentName:"p"},"spawn-protection")," value ",(0,n.kt)("strong",{parentName:"p"},"to 0"),"."),(0,n.kt)("h2",{id:"how-does-randomjoin-work"},"How does randomjoin work?"),(0,n.kt)("h3",{id:"there-are-kinda-like-two-cases"},"There are kinda like two cases:"),(0,n.kt)("p",null,"All arenas on ",(0,n.kt)("inlineCode",{parentName:"p"},"waiting for players")," stage: It will send players to a random arena"),(0,n.kt)("p",null,"One (or more) arenas are on ",(0,n.kt)("inlineCode",{parentName:"p"},"starting")," stage: It will send players to one random arena that is on starting stage"),(0,n.kt)("h2",{id:"how-does-maxplayers-join-work"},"How does maxplayers join work?"),(0,n.kt)("p",null,"You will be redirect to the arena with most players on it which isn't started yet."),(0,n.kt)("h2",{id:"how-can-i-enable-my-old-scoreboard-after-leaving-the-game"},"How can I enable my old Scoreboard after leaving the game?"),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"You have to enable rewards in your config.yml ( ",(0,n.kt)("inlineCode",{parentName:"p"},"Rewards-Enabled: true")," )")),(0,n.kt)("p",null,"Please edit the following section in your rewards.yml file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#Helpful for servers that are using more than one scoreboard!\nscoreboard_remove:\n- commands to execute\n")),(0,n.kt)("p",null,"With the type ",(0,n.kt)("inlineCode",{parentName:"p"},"scoreboard_remove")," you execute commands after removing our scoreboard."),(0,n.kt)("p",null,"There you can add for example the following command:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"- p:sb on")," to execute the command /sb on from the player"),(0,n.kt)("li",{parentName:"ul"},"or ",(0,n.kt)("inlineCode",{parentName:"li"},"- sb on %PLAYER%")," to execute the command /sb on %PLAYER% from the console")),(0,n.kt)("p",null,"Be sure to use commands that your plugin supports!"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../support/files#rewardsyml"},"Learn more about the Rewards.yml here")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If your scoreboard plugin doesn't support a command to activate the scoreboard please contact the dev of the plugin to add this command!")))}c.isMDXComponent=!0}}]);