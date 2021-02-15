import chalk from 'chalk';
import figlet from 'figlet';
import shell from 'shelljs';

const handler = () => {
	console.log(chalk.keyword('orange').bold(figlet.textSync('Fox node cli', {})));
	console.log(`\nDocs: ${chalk.blueBright.bold('https://github.com/sergiogc9/fox-node-cli')}\n`);
	shell.exec('foxnode --help');
};

export default handler;
