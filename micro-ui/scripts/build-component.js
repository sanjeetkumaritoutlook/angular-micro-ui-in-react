const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
  const files = [
    './dist/micro-ui/runtime.js',
    './dist/micro-ui/polyfills.js',
    './dist/micro-ui/main.js',
  ];

  await fs.ensureDir('dist');
  await concat(files, 'dist/idoc-forms.js');
};
build();
