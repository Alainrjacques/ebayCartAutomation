exports.config = {
    directConnect: true,
    baseUrl: 'https://www.ebay.com.au/',

    multiCapabilities: [{
        browserName: 'chrome',
        chromeOptions: {
            // 'excludeSwitches': ['enable-automation'],
            args: [
                // 'disable-infobars',
                // 'disable-notifications'
                //  'headless=true','disable-gpu=true',
            ],
        },
        shardTestFiles: true,
        loggingPrefs: { browser: 'SEVERE' } // OFF, SEVERE, WARNING, INFO, DEBUG, ALL
    },{
        browserName: 'firefox',
        shardTestFiles: true
    }],

    allScriptsTimeout: 120000,

    SELENIUM_PROMISE_MANAGER: false, // See https://github.com/SeleniumHQ/selenium/issues/2969

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: ['./features/**/*.feature'],

    beforeLaunch: async () => {

    },

    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        await browser
            .manage()
            .window()
            .setSize(1920, 1080);
    },

    afterLaunch: async () => {
    },

    params: {

    },

    cucumberOpts: {
        'format-options': '{"colorsEnabled": true}',
        'require-module': 'ts-node/register',
        // rerun: './@rerun.txt',
        // format: [`json:${jsonFile}`],
        require: ['./stepDefinitions/**/*.ts'],
        tags: '@test'
    }
};