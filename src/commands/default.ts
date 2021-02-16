import chalk from 'chalk';
import figlet from 'figlet';
import shell from 'shelljs';

import log from 'lib/log';

const handler = () => {
	log.text(figlet.textSync('Fox node cli', {}), chalk.keyword('orange').bold);
	log.text(`\nDocs: ${chalk.blueBright.bold('https://github.com/sergiogc9/fox-node-cli')}\n`);
	shell.exec('foxnode --help');
};

export default handler;
