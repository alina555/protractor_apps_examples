var HomePage = require('./home.page.js');
describe('AngularHomePage test suite', function() {
    /**
     * @type HomePage
     */
    var HomePageAngular;
    beforeAll(function () {
        HomePageAngular = new HomePage();
    });

    beforeEach(function () {
        HomePageAngular.open();
    });

    afterAll(function () {
        HomePageAngular.close();
    });


    it('button learn click', function() {
        HomePageAngular.clickLearn();
        expect(browser.isElementPresent(by.xpath('/html/body/header/nav/div/div/ul/li[1]/ul'))).toBe(true)
    });

    it('button develop click', function() {
        HomePageAngular.clickDevelop();
        expect(browser.isElementPresent(by.xpath('/html/body/header/nav/div/div/ul/li[2]/ul'))).toBe(true)
    });
    it('button discuss click', function() {
        HomePageAngular.clickDiscuss();
        expect(browser.isElementPresent(by.xpath('/html/body/header/nav/div/div/ul/li[3]/ul'))).toBe(true)
    });

    it('should greet the named Alina', function() {
        HomePageAngular.yourName.sendKeys('Alina');
        expect(HomePageAngular.bindingYourName.getText()).toEqual('Hello Alina!');
    });



});








