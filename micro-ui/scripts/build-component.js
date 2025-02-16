const fs = require('fs-extra');
const concat = require('concat');

build = async () => {
  const files = [
    './dist/micro-ui/runtime.3aac2e317a76dd6c.js',
    './dist/micro-ui/polyfills.9e5786db518eff63.js',
    './dist/micro-ui/main.6497931b1deee1db.js',
  ];

  await fs.ensureDir('dist');
  await concat(files, 'dist/idoc-forms.js');
};
build();
