const Discord = require('discord.js');
const client = new Discord.Client();   
const moment = require('moment');
const ms = require("ms")
const bot = client
const fs = require("fs")
const Util = require('discord.js');
const queue = new Map();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.on('message', message => {
     if (message.content === "-help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **-rainbow**  ' ,' **لعمل رتبة الالوان** ')

.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});



var prefix = '-'; // your prefix
client.on('message', message => {//new msg event
                if(!message.channel.guild) return;
                  if(message.content.startsWith(prefix + 'rainbow')) {//to create the rainbow role
                      let role = message.guild.roles.find('name', 'Rainbow bot.')
                    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
                  //start of create role 
                  if(!role){
                    rainbow =  message.guild.createRole({
                   name: "Rainbow bot.",//the role will create name
                   color: "#000000",//the default color
                   permissions:[]//the permissions
                 //end of create role
                })

                }
                message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
                }})

                client.on('ready', () => {//new ready event
                  setInterval(function(){
                      client.guilds.forEach(g => {
                                  var role = g.roles.find('name', 'Rainbow bot.');//rainbow role name
                                  if (role) {
                                      role.edit({color : "RANDOM"});
                                  };
                      });
                  }, 6000);//the rainbow time
                })



client.login('NTkzMTcyMTcxOTQyMDAyNjk4.XRPuVA.1tFhNs0Ps-xYJXCFbSaYxFkyT8w');
