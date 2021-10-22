module.exports = {
    app: {
        px: '!',
        token: 'ODk2MjU3NTAwNjMyOTg5NzE3.YWEe1w.RgvBqle6xxvXuE2F6lof9WhEGb4',
        playing: 'by Sn0w'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
