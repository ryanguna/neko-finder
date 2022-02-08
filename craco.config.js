const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@screens': path.resolve(__dirname, 'src/screens'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@lib': path.resolve(__dirname, 'src/lib'),
        },
    },
};