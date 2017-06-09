const Discord = require('discord.js');
const bot = new Discord.Client();

const wait = require('wait.for');

bot.on('message', msg => {



    function sleepFor( sleepDuration ){
        var now = new Date().getTime();
        while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
    }

    function blinker(msg, time) {
        if(time == 5) {
            sleepFor(10000);
            time = 0;
        }

        msg.member.addRole('322850873573244939').then(() => {
            sleepFor(500);
            msg.member.removeRole('322850873573244939').then(() => {
                    sleepFor(500);
                    blinker(msg, ++time)
                }
            )
        });
    }

    if(msg.content === '!blinker') {
        msg.reply('on allume les clignotant');

        blinker(msg, 0);
    }


})

bot.login("token");