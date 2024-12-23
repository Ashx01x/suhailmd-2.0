const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_12_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI3LFxuICAgICAgICA5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDYxLFxuICAgICAgICAyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDczLFxuICAgICAgICA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NixcbiAgICAgICAgMTY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDY4LFxuICAgICAgICA3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDU5LFxuICAgICAgICA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDYxLFxuICAgICAgICA3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwianZ2cjl2TUQ1YjQrMlJWcTY4dEErYXRXenFOcGZubFkxTGRZNDBXZmJiMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc1OTc0NjgyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTczQ0E1QkY0MTk0NTZFMDRBNEU1Qjg2RkZBREM3QkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0OTQ1MTE1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NTk3NDY4MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI2Nzk2NEJDN0Q5MDIzOEZDNkU4QTc2QzNFRDRCMUM5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDk0NTExNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4UklmTkJUX1NtT3k3ZWM4QjNacGdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdhNjQ2MWU5LTJiZjctNGQyOS05NWFhLWJkYjM4NmYzOTcyOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDc0LFxuICAgICAgMjQ3LFxuICAgICAgMzIsXG4gICAgICAxMDQsXG4gICAgICAxMzcsXG4gICAgICA3MyxcbiAgICAgIDIwMSxcbiAgICAgIDEwLFxuICAgICAgMTA5LFxuICAgICAgNTAsXG4gICAgICAyMzcsXG4gICAgICAxMjgsXG4gICAgICAxNTQsXG4gICAgICA0NixcbiAgICAgIDE0NyxcbiAgICAgIDIyOCxcbiAgICAgIDc4LFxuICAgICAgMjQxLFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDIyMixcbiAgICAgIDIxNSxcbiAgICAgIDIwNixcbiAgICAgIDIyMSxcbiAgICAgIDIsXG4gICAgICAzMCxcbiAgICAgIDIyNSxcbiAgICAgIDAsXG4gICAgICAxNTAsXG4gICAgICAxOTMsXG4gICAgICAxMTEsXG4gICAgICA3NixcbiAgICAgIDU1LFxuICAgICAgMjAxLFxuICAgICAgMjIxLFxuICAgICAgMTcsXG4gICAgICAyNDQsXG4gICAgICA5OSxcbiAgICAgIDg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhURTdIR1hYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1OTc0NjgyODo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQXNoZW4gUmFuZGlrYVwiLFxuICAgIFwibGlkXCI6IFwiMjIwODM0OTcxMDUwMjIxOjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3VsNjZNRUVOYlNwTHNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMSXRmQnRjMlJVcThyc2U4V1QzR0UyRENacEdQMXpJaHN0aUdPc3MrOXdFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1GUlB6M3JhOTYwSFp3ZmNLNVB5a3NKUWtBb09lMm91T21HU1ZhbTAwMFJxN2FJNVZOSnJyN2lMZTBRaGNKYWJtT0YzejN3djFzZVZ6T0t0bHZhUURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVtN2paT3ZpYmJJUW5LN2x2Zmx3Q1FpbUV6bHhLYldESDdjZVhKd3luZ0ZhelMxK2J4V3ZSRzUyWU9CQWtWRGVxSnpYem5jeDM0UWZkaDJ3a3JGSWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU5NzQ2ODI4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0OTQ1MTEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGdrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEZ2suanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSY1N6NmNoa1hYanBGdVVHL2l1WkVObEtYeHd4MG1PbW5SSzIzMzdsOXVZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNDg5MDAwNzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDk0NTExNDk5NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
