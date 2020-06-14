var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,
    specs: ['todo-spec.js'],
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    },
    jasmineNodeOpts: {
        showColors: true
    }
};