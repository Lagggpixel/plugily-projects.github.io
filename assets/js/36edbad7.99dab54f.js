"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[7371],{1567:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(614);a(1905);class i extends l.Component{constructor(e){super(e),this.state={text:"Fetching latest config.."},this.props.url?fetch(this.props.url).then((e=>e.text())).then((e=>{this.setState({text:e})})).catch((e=>this.setState({text:"Error: "+e}))):this.state.text="Missing URL property"}render(){return l.createElement(n.Z,{language:"yaml"},this.state.text)}}},5256:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var l=a(7462),n=(a(7294),a(3905)),i=(a(1567),a(4866)),r=a(5162);const o={id:"simple-setup",title:"Simple Setup",sidebar_label:"Simple Setup",toc_min_heading_level:2,toc_max_heading_level:2},s=void 0,u={unversionedId:"minigame/setup/simple-setup",id:"minigame/setup/simple-setup",title:"Simple Setup",description:"---",source:"@site/docs/minigame/setup/simple-setup.mdx",sourceDirName:"minigame/setup",slug:"/minigame/setup/simple-setup",permalink:"/minigame/setup/simple-setup",draft:!1,editUrl:"https://github.com/Plugily-Projects/plugily-projects.github.io/blob/source/docs/minigame/setup/simple-setup.mdx",tags:[],version:"current",lastUpdatedBy:"Tigerpanzer_02",lastUpdatedAt:1691098483,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{id:"simple-setup",title:"Simple Setup",sidebar_label:"Simple Setup",toc_min_heading_level:2,toc_max_heading_level:2},sidebar:"minigames",previous:{title:"Placeholders",permalink:"/minigame/placeholders"},next:{title:"Commands and permissions",permalink:"/minigame/setup/cmdsandperms"}},p={},m=[{value:"Prepare",id:"prepare",level:2},{value:"Create instance",id:"create-instance",level:2},{value:"1. Start with the creation of your arena instance with the following command:",id:"create-instance-step-1",level:4},{value:"2. After creating the instance you can start editing it with the next command:",id:"create-instance-step-2",level:4},{value:"3. Now we are at a very simple stage were you just need to follow the instructions on menu. After you finished an instruction you may proceed to the next one by typing the command again (and repeat until finished):",id:"create-instance-step-3",level:4},{value:"4. After you have set all up you enter the command the last time and click on the rocket to validate your instance. It will finish the instance and you are ready to go!",id:"create-instance-step-4",level:4},{value:"Additional Setup Information",id:"additional-setup-information",level:2},{value:"How can I set up secret well?",id:"how-can-i-set-up-secret-well",level:3},{value:"<strong>How it should be created:</strong>",id:"how-it-should-be-created",level:4},{value:"<strong>Number of needed rotten flesh is based on a simple algorithm:</strong>",id:"number-of-needed-rotten-flesh-is-based-on-a-simple-algorithm",level:4},{value:"How can I set up the shop?",id:"how-can-i-set-up-the-shop",level:3},{value:"How power-ups work?",id:"how-power-ups-work",level:3},{value:"<strong>There are few types of them right now:</strong>",id:"there-are-few-types-of-them-right-now",level:4},{value:"Special shop items",id:"special-shop-items",level:3},{value:"How to setup plots?",id:"how-to-setup-plots",level:3},{value:"How to setup per player murderer/detective?",id:"how-to-setup-per-player-murdererdetective",level:3},{value:"How to setup cages?",id:"how-to-setup-cages",level:3},{value:"Where should I set the arena locations (cuboid)?",id:"where-should-i-set-the-arena-locations-cuboid",level:3},{value:"Bungeecord Mode",id:"bungeecord-mode",level:2}],d={toc:m},h="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Fast way to set up your arena"),(0,n.kt)("h2",{id:"prepare"},"Prepare"),(0,n.kt)("admonition",{title:"Recommended",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to create an ",(0,n.kt)("strong",{parentName:"p"},"extra world")," for the maps you want to use for this plugin as it determines compatibility issues with other plugins.")),(0,n.kt)("p",null,"Check if you got all of these points for a complete arena setup"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Map for game and lobby ","(","can be on the same world",")"),(0,n.kt)("li",{parentName:"ul"},"[","Multiworld","]"," If you want you can set up signs, therefore just place sign","(","s",")"," on the location you want")),(0,n.kt)(i.Z,{groupId:"minigame",defaultValue:"villagedefense",queryString:!0,values:[{label:"VillageDefense",value:"villagedefense"},{label:"BuildBattle",value:"buildbattle"},{label:"MurderMystery",value:"murdermystery"},{label:"TheBridge",value:"thebridge"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"villagedefense",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The game can contain an secret well",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"simple-setup#how-can-i-set-up-secret-well"},"How can I set up secret well?")))),(0,n.kt)("li",{parentName:"ul"},"The villagers can have a shop",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"simple-setup#how-can-i-set-up-the-shop"},"How can I set up the shop?")))))),(0,n.kt)(r.Z,{value:"buildbattle",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The game contains different modes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SOLO",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Make sure to have some plots where is enough place to build for ",(0,n.kt)("strong",{parentName:"li"},"one")," person"))),(0,n.kt)("li",{parentName:"ul"},"TEAM",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Make sure to have some plots where is enough place to build for ",(0,n.kt)("strong",{parentName:"li"},"two")," persons"))),(0,n.kt)("li",{parentName:"ul"},"GUESS THE BUILD",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"You need as many plots as the maximum amount of players")),(0,n.kt)("li",{parentName:"ul"},"Make sure that these plots have enough free place where players can ",(0,n.kt)("strong",{parentName:"li"},"view")," the builder when he builds"))))))),(0,n.kt)(r.Z,{value:"murdermystery",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The game can contain special blocks",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can set the following blocks on your map",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Cauldron"),(0,n.kt)("li",{parentName:"ul"},"Enchanting table"))))))),(0,n.kt)(r.Z,{value:"thebridge",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The game contains different modes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"POINTS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This mode means that the goal of the game is to reach x amount of points by jumping into the opponent base portal"))),(0,n.kt)("li",{parentName:"ul"},"HEARTS",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This mode means that the goal of the game is to be the last team living. After x amount of points the base will be out and players die."))))),(0,n.kt)("li",{parentName:"ul"},"[","Base Count","]"," You can have up to 16 bases without problems and player limitation")))),(0,n.kt)("h2",{id:"create-instance"},"Create instance"),(0,n.kt)("h4",{id:"create-instance-step-1"},"1. Start with the creation of your arena instance with the following command:"),(0,n.kt)(i.Z,{groupId:"minigame",defaultValue:"villagedefense",queryString:!0,values:[{label:"VillageDefense",value:"villagedefense"},{label:"BuildBattle",value:"buildbattle"},{label:"MurderMystery",value:"murdermystery"},{label:"TheBridge",value:"thebridge"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"villagedefense",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/villagedefenseadmin setup create <arenaname>\n"))),(0,n.kt)(r.Z,{value:"buildbattle",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/buildbattleadmin setup create <arenaname>\n"))),(0,n.kt)(r.Z,{value:"murdermystery",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/murdermysteryadmin setup create <arenaname>\n"))),(0,n.kt)(r.Z,{value:"thebridge",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/thebridgeadmin setup create <arenaname>\n")))),(0,n.kt)("h4",{id:"create-instance-step-2"},"2. After creating the instance you can start editing it with the next command:"),(0,n.kt)(i.Z,{groupId:"minigame",defaultValue:"villagedefense",queryString:!0,values:[{label:"VillageDefense",value:"villagedefense"},{label:"BuildBattle",value:"buildbattle"},{label:"MurderMystery",value:"murdermystery"},{label:"TheBridge",value:"thebridge"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"villagedefense",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/villagedefenseadmin setup edit <arenaname>\n"))),(0,n.kt)(r.Z,{value:"buildbattle",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/buildbattleadmin setup edit <arenaname>\n"))),(0,n.kt)(r.Z,{value:"murdermystery",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/murdermysteryadmin setup edit <arenaname>\n"))),(0,n.kt)(r.Z,{value:"thebridge",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/thebridgeadmin setup edit <arenaname>\n")))),(0,n.kt)("h4",{id:"create-instance-step-3"},"3. Now we are at a very simple stage were you just need to follow the instructions on menu. After you finished an instruction you may proceed to the next one by typing the command again ","(","and repeat until finished",")",":"),(0,n.kt)(i.Z,{groupId:"minigame",defaultValue:"villagedefense",queryString:!0,values:[{label:"VillageDefense",value:"villagedefense"},{label:"BuildBattle",value:"buildbattle"},{label:"MurderMystery",value:"murdermystery"},{label:"TheBridge",value:"thebridge"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"villagedefense",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/villagedefenseadmin setup edit <arenaname>\n"))),(0,n.kt)(r.Z,{value:"buildbattle",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/buildbattleadmin setup edit <arenaname>\n"))),(0,n.kt)(r.Z,{value:"murdermystery",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/murdermysteryadmin setup edit <arenaname>\n"))),(0,n.kt)(r.Z,{value:"thebridge",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/thebridgeadmin setup edit <arenaname>\n")))),(0,n.kt)("h4",{id:"create-instance-step-4"},"4. After you have set all up you enter the command the last time and click on the rocket to validate your instance. It will finish the instance and you are ready to go!"),(0,n.kt)("h2",{id:"additional-setup-information"},"Additional Setup Information"),(0,n.kt)(i.Z,{groupId:"minigame",defaultValue:"villagedefense",queryString:!0,values:[{label:"VillageDefense",value:"villagedefense"},{label:"BuildBattle",value:"buildbattle"},{label:"MurderMystery",value:"murdermystery"},{label:"TheBridge",value:"thebridge"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"villagedefense",mdxType:"TabItem"},(0,n.kt)("h3",{id:"how-can-i-set-up-secret-well"},"How can I set up secret well?"),(0,n.kt)("p",null,"You need to build a secret well to throw out rotten flesh there. If players throw there enough rotten flesh they will get an extra heart."),(0,n.kt)("h4",{id:"how-it-should-be-created"},(0,n.kt)("strong",{parentName:"h4"},"How it should be created:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/SAoUarT.png",alt:null})),(0,n.kt)("p",null,"(","2x2 hoppers and water above them",")"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can also create bigger secret well's")),(0,n.kt)("h4",{id:"number-of-needed-rotten-flesh-is-based-on-a-simple-algorithm"},(0,n.kt)("strong",{parentName:"h4"},"Number of needed rotten flesh is based on a simple algorithm:")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"First heart:")," 50 rotten flesh needed"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Next hearts:")," bonus hearts ","*"," in-game players size + 10"),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"how-can-i-set-up-the-shop"},"How can I set up the shop?"),(0,n.kt)("p",null,"It is nothing easier than just placing a chest ","(","double chest also working",")"," and adding the items you want to that chest."),(0,n.kt)("p",null,"Make sure to give the item a price called orbs with the following command before you add it to the chest:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/vda setprice <orbs>\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you want empty spaces on your chest it is required to add ",(0,n.kt)("strong",{parentName:"p"},"REDSTONE","_","BLOCK")," to the chest")),(0,n.kt)("p",null,"Do not forget to register your chest after editing it. Therefore you type in"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"/vd <arenaname> edit\n")),(0,n.kt)("p",null,"and choose the item to add an chest shop while looking at your shop. After that you can go on with your setup or validate it at the end if you are done with the setup."),(0,n.kt)("h3",{id:"how-power-ups-work"},"How power-ups work?"),(0,n.kt)("h4",{id:"there-are-few-types-of-them-right-now"},(0,n.kt)("strong",{parentName:"h4"},"There are few types of them right now:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Map clean power-up ","(","Cleans map from all zombies that are spawned, not every zombie from the pool",")"),(0,n.kt)("li",{parentName:"ul"},"Double damage power-up ","(","Every player gets Strength I potion for 15 seconds by default",")"),(0,n.kt)("li",{parentName:"ul"},"Healing power-up ","(","Every player gets Regeneration I for 10 seconds by default",")"),(0,n.kt)("li",{parentName:"ul"},"Golem raid power-up ","(","3 golems are spawned in the village by default",")"),(0,n.kt)("li",{parentName:"ul"},"One shot one kill power-up ","(","Every zombie can be killed for one hit ","(","Strength 255",")"," for 15 seconds by default",")")),(0,n.kt)("p",null,"Every option and messages from these power-ups are configurable. Drop chance, time of power-up, disabling/enabling specific power-ups are configurable via ",(0,n.kt)("strong",{parentName:"p"},"config.yml"),". Messages are configurable via ",(0,n.kt)("strong",{parentName:"p"},"language.yml"),"."),(0,n.kt)("h3",{id:"special-shop-items"},"Special shop items"),(0,n.kt)("p",null,"There are few special shop items that you can put into the shop to enhance gameplay a bit."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Entity items")),(0,n.kt)("li",{parentName:"ul"},"Spawn Wolf item Item for spawning wolves in game. It should be named 'Spawn Wolf' or like you've translated it in language.yml under ",(0,n.kt)("inlineCode",{parentName:"li"},"In-Game.Messages.Shop-Messages.Wolf-Item-Name"),". It can be any item, ",(0,n.kt)("strong",{parentName:"li"},"only display name of item will be checked while buying it!")),(0,n.kt)("li",{parentName:"ul"},"Spawn Golem item Item for spawning golems in game. It should be named 'Spawn Golem' or like you've translated it in language.yml under ",(0,n.kt)("inlineCode",{parentName:"li"},"In-Game.Messages.Shop-Messages.Golem-Item-Name"),". It can be any item, ",(0,n.kt)("strong",{parentName:"li"},"only display name of item will be checked while buying it!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Special kit items")),(0,n.kt)("li",{parentName:"ul"},"Soon"))),(0,n.kt)(r.Z,{value:"buildbattle",mdxType:"TabItem"},(0,n.kt)("h3",{id:"how-to-setup-plots"},"How to setup plots?"),(0,n.kt)("p",null,"Make sure to only select the floor space including the first block on one of the bottom corners and go diagonal to the upper corner of the build plot.\nAll space inside this cuboid will the builder be able to build and interact!")),(0,n.kt)(r.Z,{value:"murdermystery",mdxType:"TabItem"},(0,n.kt)("h3",{id:"how-to-setup-per-player-murdererdetective"},"How to setup per player murderer/detective?"),(0,n.kt)("p",null,"The value determines how much murderer/detectives will be in the arena. If you set it to ",(0,n.kt)("inlineCode",{parentName:"p"},"5")," it will mean you get per ",(0,n.kt)("inlineCode",{parentName:"p"},"5")," players ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"one"))," murderer/detective."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"E.g. Means on a game with 20 players you will have 4 murderer/detectives."))),(0,n.kt)(r.Z,{value:"thebridge",mdxType:"TabItem"},(0,n.kt)("h3",{id:"how-to-setup-cages"},"How to setup cages?"),(0,n.kt)("p",null,"Make sure to only select the floor of the cage that is filled with material"),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"where-should-i-set-the-arena-locations-cuboid"},"Where should I set the arena locations ","(","cuboid",")","?"),(0,n.kt)("p",null,"Make sure that the arena locations include the whole game map, where players should be able to play the game. So it should include the bases, the line and some space so players can build on the line."))),(0,n.kt)("h2",{id:"bungeecord-mode"},"Bungeecord Mode"),(0,n.kt)("p",null,"Follow the setup above. After you are done with all arenas you can simply enable Bungeemode on the ",(0,n.kt)("a",{parentName:"p",href:"../support/files#configyml"},"config.yml"),". If it does not already exists it will create a file called ",(0,n.kt)("a",{parentName:"p",href:"../support/files#bungeeyml"},"bungee.yml")," after restart. On that file you can edit some values that are explained ",(0,n.kt)("a",{parentName:"p",href:"../support/files#bungeeyml"},"here"),"."))}c.isMDXComponent=!0}}]);