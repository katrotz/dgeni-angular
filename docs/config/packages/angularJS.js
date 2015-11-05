'use strict';
/*global module, require, __dirname*/

var Package = require('dgeni').Package;
var basePkg = require('dgeni-packages/base');
var nunjucksPkg = require('dgeni-packages/nunjucks');
var ngdocPkg = require('dgeni-packages/ngdoc');
var path = require('canonical-path');
var basePath = path.resolve(__dirname, '../../..');

var angularPkg = new Package('angularJS', [ngdocPkg]);

//myPackage.processor(require('./processors/processor1'));

//myPackage.factory(require('./services/service1'));

angularPkg.config(function(readFilesProcessor, writeFilesProcessor) {
  readFilesProcessor.basePath = basePath;

  readFilesProcessor.sourceFiles = [{
    include: 'src/**/*.js',
    exclude: 'src/do-not-read.js',
    basePath: 'src'
  }];

  writeFilesProcessor.outputFolder  = 'dist/docs';
});

module.exports = angularPkg;