(function(){var e=$.inidb.exists("settings","raidMessage")?$.inidb.get("settings","raidMessage"):$.lang.get("raidsystem.message.nomessageset",$.ownerName);$.bind("command",function(s){var a=s.getSender().toLowerCase(),i=s.getCommand(),r=s.getArgs(),n=r[0]?r[0].toLowerCase():false,t;if(i.equalsIgnoreCase("raid")){if(!n){$.say($.whisperPrefix(a)+$.lang.get("raidsystem.raid.usage"));return}if($.bot.isModuleEnabled("./core/commandPause.js")){$.commandPause.pause(300)}$.inidb.incr("outgoingRaids",n,1);$.say($.lang.get("raidsystem.raid",$.username.resolve(n),e))}if(i.equalsIgnoreCase("raider")){if(!n){$.say($.whisperPrefix(a)+$.lang.get("raidsystem.raider.usage"));return}t=parseInt($.inidb.get("incommingRaids",n))+1;$.inidb.incr("incommingRaids",n,1);$.say($.lang.get("raidsystem.raided",$.username.resolve(n),$.getOrdinal(t)))}if(i.equalsIgnoreCase("setraidmsg")){if(!r||r.length==0){$.say($.whisperPrefix(a)+$.lang.get("raidsystem.message.usage"));return}e=r.join(" ");$.inidb.set("settings","raidMessage",e);$.say($.whisperPrefix(a)+$.lang.get("raidsystem.message.setsuccess",e))}});$.bind("initReady",function(){if($.bot.isModuleEnabled("./systems/raidSystem.js")){$.consoleLn($.lang.get("raidsystem.console.announceraidmsg",e));$.registerChatCommand("./systems/raidSystem.js","raid",2);$.registerChatCommand("./systems/raidSystem.js","raider",2);$.registerChatCommand("./systems/raidSystem.js","setradimsg",1)}})})();