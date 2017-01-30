
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName': 'chrome'
   // 'browserName': 'edge'
   // 'browserName': 'firefox'
   //    'browserName': 'opera'
  },

  framework: 'jasmine',

  specs: ['testcases.js','home.page.js'],


  jasmineNodeOpts: {
    // defaultTimeoutInterval: 300000
  }
};
