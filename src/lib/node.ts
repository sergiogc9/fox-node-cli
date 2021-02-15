import shell from 'shelljs';

const checkNodeInstallation = () => {
	const { code } = shell.exec('node --version', { silent: true });
	if (code) throw { code, message: 'Node is not installed' };
};

export { checkNodeInstallation };
