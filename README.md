# fox-node-cli

![](https://badgen.net/npm/v/fox-node-cli?icon=npm&label)
![](https://github.com/sergiogc9/fox-node-cli/workflows/Github%20Pipeline/badge.svg?branch=master)

A cli tool to work better with node, npm and yarn.

⚠️ _DEPRECATED:_ this cli tool has been merged with other cli tools in [fox-awesome-cli](https://www.npmjs.com/package/fox-awesome-cli). Use that one instead.

- [fox-node-cli](#fox-node-cli)
  - [About the cli](#about-the-cli)
  - [Installation](#installation)
  - [Usage](#usage)
    - [help](#help)
    - [`pkg-manager`](#pkg-manager)
    - [`publish`](#publish)

## About the cli

I created this cli tool to make my life easier when working with node, npm and / or yarn. Its goal is to provide helpful commands to be used when developing or in automated processes, e.g. pipelines.

This cli is part of a set of personal cli tools named as [fox-awesome-cli](https://github.com/sergiogc9/fox-awesome-cli) also developed by myself.

## Installation

**Prerequisites**: NodeJS (>=14.x tested only) installed.

You can install it globally:

`yarn global add fox-node-cli` or `npm install -g fox-node-cli`

Or install locally:

`yarn add fox-node-cli` or `npm install fox-node-cli`

## Usage

This cli tool can be used with some aliases: `foxnode`, `foxn`, `fnode` and `fn`. You can choose the one you prefer.

The usage is:

`foxnode <command> [options]`

#### help

You can see some information and the available commands using the help option or not using any command:

`foxnode` or `foxnode -h`

#### `pkg-manager`

Checks the node package manager used in the current directory (and in its parents). Only works with `npm` and `yarn`.

Possible return values: `yarn`, `npm` or `unknown`

#### `publish`

Publishes the package in current project **only if current version is not already published** in the registry.

Command arguments:

- `-h, --help`: See help section.
- `-u, --update`: Updates the package version before publishing. See help the options available.
- `-p, --push`: Pushes the changes to remote. It should be done if an update is done to keep consistency.
