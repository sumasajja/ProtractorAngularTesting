function Calculator() {
    this.first = $$('.input-small').first();
    this.second = element(by.model('second'));
    this.gobutton = element(by.id('gobutton'));
    this.latest = element(by.binding('latest'));
    this.repeater = element(by.repeater('result in memory'));
    this.operation = (operator) => {
        return element(by.model('operator'))
          .$(`option[value=${operator}]`);
      }
    this.allRepeaters =  element.all(by.repeater('result in memory'));
    this.url = function() {
        return browser.get('http://juliemr.github.io/protractor-demo/');
    }
}

module.exports = new Calculator();