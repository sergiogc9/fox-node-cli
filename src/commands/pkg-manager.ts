import { Argv } from 'yargs';

import { catchError } from 'lib/error';
import { checkNodeInstallation, getNodePackageManager } from 'lib/node';
import log from 'lib/log';

const name = 'pkg-manager';
const description = 'Returns the package manager used in current workspace';

const config = (yargs: Argv) => {
	// prettier-ignore
	return yargs
		.usage('gitfox pkg-manager')
		.help('help')
		.option('help', {  alias: 'h'});
};

const handler = async () => {
	catchError(() => {
		checkNodeInstallation();
		log.text(getNodePackageManager());
	});
};

export default { config, description, handler, name };
