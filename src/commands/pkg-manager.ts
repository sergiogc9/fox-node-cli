import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import shell from 'shelljs';
import { Argv, check } from 'yargs';

import { catchError } from 'lib/error';
import { checkNodeInstallation } from 'lib/node';

const name = 'pkg-manager';
const description = 'Returns the package manager used in current workspace';

const config = (yargs: Argv) => {
	// prettier-ignore
	return yargs
		.usage('gitfox pkg-manager')
		.help('h');
};

const checkDirectory = (dir: string, isWin: boolean) => {
	// TODO REMOVE console.log
	console.log(dir);
	if (fs.existsSync(`${dir}/yarn.lock`)) return console.log('yarn');
	if (fs.existsSync(`${dir}/package-lock.json`)) return console.log('npm');
	if ((isWin && dir === process.cwd().split(path.sep)[0]) || (!isWin && dir === '/')) {
		return console.log('unknown');
	}
	checkDirectory(path.resolve(dir, '..'), isWin);
};

const handler = async () => {
	catchError(() => {
		checkNodeInstallation();
		checkDirectory(process.cwd(), process.platform === 'win32');
	});
};

export default { config, description, handler, name };
