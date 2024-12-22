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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_30_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY2LFxuICAgICAgICA2MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDk4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgNixcbiAgICAgICAgMjQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICA3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6dWdXZG5HbnVWU2dYa2tEZzBtbk0xN2hEVWFKYk5xSlJlTTg1ZWh6VVRBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzU5NzQ2ODI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENDU4NUEyNkJGRjkyMDBCMUM1QTU3MkQ1QjQyNERGNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ4NjMzOThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc1OTc0NjgyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOURDREQwM0VGNTlDM0E3NjhEMURCMzMyMEVENUI2NDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0ODYzMzk5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImxyUURnbXktUS0tUzBZanhLajRETUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzYzMWIwZTQtZDUyNi00Y2JkLTg5NWEtYWVmNThhZWEzMTRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDE4LFxuICAgICAgMTI2LFxuICAgICAgMTY2LFxuICAgICAgMTgyLFxuICAgICAgMjAzLFxuICAgICAgMTgzLFxuICAgICAgMTY1LFxuICAgICAgMjQxLFxuICAgICAgMyxcbiAgICAgIDI1MixcbiAgICAgIDk2LFxuICAgICAgMTcsXG4gICAgICAxNzAsXG4gICAgICAyNDYsXG4gICAgICAxNjgsXG4gICAgICAwLFxuICAgICAgMjAzLFxuICAgICAgMTczLFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDUsXG4gICAgICA4MyxcbiAgICAgIDYyLFxuICAgICAgMTQ3LFxuICAgICAgNjcsXG4gICAgICAyMzgsXG4gICAgICAxODksXG4gICAgICA1MCxcbiAgICAgIDEyMCxcbiAgICAgIDU1LFxuICAgICAgMTk3LFxuICAgICAgMjEyLFxuICAgICAgMTY5LFxuICAgICAgNzYsXG4gICAgICAxNTIsXG4gICAgICA3LFxuICAgICAgODYsXG4gICAgICAyMjMsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJURVpHVjFWVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTk3NDY4Mjg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFzaGVuIFJhbmRpa2FcIixcbiAgICBcImxpZFwiOiBcIjIyMDgzNDk3MTA1MDIyMToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09XbDY2TUVFSi9VbjdzR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTEl0ZkJ0YzJSVXE4cnNlOFdUM0dFMkRDWnBHUDF6SWhzdGlHT3NzKzl3RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGNXl0SHd4U0NzNWptc3YrUGtiK2R4UDFnQUZHeUo0YVFJMFFqaG5xODVYS3FYajdhWUttSTZhV2F6MTg5MHRaSnlnaWU5cklDYWYyMmJzanRQUjVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsVndiWVVESkF5bG5kOUErZ0ZLaFpxQzRJL0xtdWwxd1ExS0pOeFNESWJCS3J2TnhIM3cyWGkraDVjeEF5aFZvNWRyeitOa3kzRXBkOTU4SEI0SnNCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc1OTc0NjgyODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDg2MzM5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUM0c1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzRzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWU01cHdYU21LMGZkSXVyTndwcGwzSHZKQStkSEZHYmg4RHZZdUk4YnpaTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTQ4OTAwMDY5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ4NTU4MTIwNTJcIn0iCn0="  // PUT your SESSION_ID 


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
