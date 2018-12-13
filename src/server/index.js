
var state = {
    levels: [
        [
            {
                player: 'Serral',
                score: null,
                race: 'protoss'
            },
            {
                player: 'PuPu',
                score: null,
                race: 'zerg'
            },
            {
                player: 'ZhuGeLiang',
                score: null,
                race: 'zerg'
            },
            {
                player: 'Jagelius',
                score: null,
                race: 'terran'
            },
            {
                player: 'TBD',
                score: null,
                race: 'terran'
            },
            {
                player: 'Protosser',
                score: null,
                race: 'zerg'
            },
            {
                player: 'TBD',
                score: null,
                race: 'zerg'
            },
            {
                player: 'Alluton',
                score: null,
                race: 'protoss'
            }
        ],
        [
            {
                player: 'Serral',
                score: null,
                race: 'protoss'
            },
            {
                player: '',
                score: null,
                race: 'zerg'
            },
            {
                player: '',
                score: null,
                race: 'zerg'
            },
            {
                player: '',
                score: null,
                race: 'terran'
            }
        ],
        [
            {
                player: '',
                score: null,
                race: 'protoss'
            },
            {
                player: '',
                score: null,
                race: 'zerg'
            },
            {
                player: '',
                score: null,
                race: 'protoss'
            },
            {
                player: '',
                score: null,
                race: 'zerg'
            }
        ]
    ]
};

const io = require('socket.io')(9011);

io.on('connection', socket => {
    socket.emit('state', state);

    socket.on('player', update => {
        state.levels[update.level][update.status].player = update.player;
        socket.broadcast.emit('state', state);
    });

    socket.on('score', update => {
        state.levels[update.level][update.status].score = update.score;
        socket.broadcast.emit('state', state);
    });
});

