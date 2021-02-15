import yargs from 'yargs';

import defaultHandler from 'commands/default';
import pkgManager from 'commands/pkg-manager';
import pkg from '../package.json';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(process.argv.slice(2))
	.version(pkg.version)
	.command(
		'$0',
		'',
		y =>
			y
				.usage('Usage: foxnode <command> [options]')
				.usage('Usage: foxn <command> [options]')
				.usage('Usage: fnode <command> [options]')
				.usage('Usage: fn <command> [options]'),
		defaultHandler
	)
	.command(pkgManager.name, pkgManager.description, pkgManager.config, pkgManager.handler).argv;
