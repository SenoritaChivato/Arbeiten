'use strict';

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(
    webdriver.Capabilities.firefox()
).build();

var By = webdriver.By;
var until = webdriver.until;
var expect = require('chai').expect;


describe('asynchrony.com', function() {

  describe('Check homepage', function() {
    beforeEach(function() {
      driver.get('http://www.asynchrony.com');
    });

    it('should see the correct title', function() {
      return driver.getTitle().then(function(title) {
        return expect(title).to.have.string('Asynchrony Labs');
      });
    });

    it('should see the correct menu links', function() {
      return driver.findElements(webdriver.By.css('ul#primary-menu > li')).then(function(elements) {
        console.log('Found', elements.length, 'links on the primary menu.' )
      });
    });
  });

  after(function() {
    driver.quit();
  });
});
