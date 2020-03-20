const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    specs: ['Tests/Login_spec.js'],
    SELENIUM_PROMISE_MANAGER: false,

    multiCapabilities: [{
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                '--window-size=1850,1100'
            ]
        },
        'shardTestFiles': true,
        'maxInstances': 2,
    }],

    onPrepare: function () {
        const AllureReporter = require('jasmine-allure-reporter');
        browser.waitForAngularEnabled(false)
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 40000,
        includeStackTrace: true,
        showColors: true
    },
};