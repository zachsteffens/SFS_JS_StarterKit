/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

//thie is important to declare for any babel configs. you can create different configs for different node environments.
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
    if (err) { //so a fatal error occurred. Stop here.
        console.log(chalk.red(err));
        return 1;
    }

    //this code is not required, it's just extra information
    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        console.log(chalk.yellow('Webpack generated the following warnings: '));
        jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${stats}`);

    //if we get thie far, the build succeeded.
    console.log(chalk.green('Success: Writen to /dist'));

    return 0; //success
});
