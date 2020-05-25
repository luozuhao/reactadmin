const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    modifyVars: { '@primary-color': '#f13f40' },
                    javascriptEnabled: true,
                },
            },
        },
    ],
};
