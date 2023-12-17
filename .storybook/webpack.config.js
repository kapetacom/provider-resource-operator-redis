
module.exports = ({config}) => {

    config.module.rules = config.module.rules.concat([
        {
            test: /\.(ts|tsx)$/,
            loader: 'babel-loader',
            options: {
                sourceMaps: true,
                presets: [
                    "@babel/env",
                    "@babel/typescript",
                    "@babel/react"
                ]
            }
        },
        {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"]
        },
        {
            test: /\.ya?ml$/,
            use: ['json-loader', 'yaml-loader']
        },

    ]);

    return config;
};