/**
 * Created by USER on 25.01.2017.
 */

//HomePage object

var HomePage = function() {

    var that = this;
    this.buttonLearn = element(by.xpath('/html/body/header/nav/div/div/ul/li[1]/a'));
    this.buttonDevelop = element(by.xpath('/html/body/header/nav/div/div/ul/li[2]/a'));
    this.buttonDiscuss = element(by.xpath('/html/body/header/nav/div/div/ul/li[3]/a'));
    this.yourName = element(by.model('yourName'));
    this.bindingYourName = element(by.binding('yourName'));


    that.clickLearn = function(){
        that.buttonLearn.click();
        return that;
    };
    that.clickDevelop = function(){
        that.buttonDevelop.click();
        return that;
    };
    that.clickDiscuss = function(){
        that.buttonDiscuss.click();
        return that;
    };


    that.open = function () {
        browser.get('http://www.angularjs.org');
    };

    that.close = function () {
        browser.close();

    }

};

module.exports = HomePage;

