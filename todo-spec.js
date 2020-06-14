const calc = require('./cal');
const { datadriven } = require('./data-driven');
const using = require('jasmine-data-provider');
describe('Protractor demo app', () => {


  const addNumbers = (num1, num2) => {
    calc.first.sendKeys(num1);
    calc.second.sendKeys(num2);
    calc.gobutton.click();
  }

  beforeEach(() => {
    calc.url();
  });
  it('should have a title', () => {
    expect(browser.getTitle()).toBe('Super Calculator');
  });

  using(datadriven, function (data, description) {

    it(`should be ${data.result} after adding ${data.first} and ${data.second}`, () => {
      calc.first.sendKeys(data.first);
      calc.second.sendKeys(data.second);
      calc.gobutton.click();
      expect(calc.latest.getText()).toBe(data.result);
    });
  });

  it('should show in the input box', () => {
    calc.first.sendKeys(1);
    expect(calc.first.getAttribute('value')).toBe('1');
  });

  it('should multiply 3 with 2', () => {
    calc.first.sendKeys(3);
    calc.second.sendKeys(2);
    calc.operation('MULTIPLICATION').click();
    calc.gobutton.click();
    expect(calc.repeater.$('td:last-child').getText()).toBe('6');
  });


  it('Get all results in the row', (done) => {
    addNumbers(1, 2);
    addNumbers(3, 4);
    addNumbers(5, 6);
    calc.allRepeaters.each((result) => {
      result.$('td:last-child').getText().then((text) => {
      });
    });
    done();
  });
});