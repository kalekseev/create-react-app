// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
// @remove-on-eject-end
'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const fs = require('fs');
const webpack = require('webpack');
const { createCompiler } = require('react-dev-utils/WebpackDevServerUtils');
const paths = require('../config/paths');
const config = require('../config/webpack.config.dev');

const useYarn = fs.existsSync(paths.yarnLockFile);

const appName = require(paths.appPackageJson).name;
// Create a webpack compiler that is configured with custom messages.
const compiler = createCompiler(webpack, config, appName, {}, useYarn);
compiler.watch({}, () => {})
