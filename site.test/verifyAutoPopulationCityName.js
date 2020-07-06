import Baseob from '../site.pages/BasePage';
import Loginob from '../site.pages/LoginPage';
import allureReporter from '@wdio/allure-reporter'


before(() => 
{
 Baseob.launchBrowser();
})

describe('Verify if the city name is auto populating on entering a pin code', () => {
if('Verify Page URL',() => {
  expect(browser.getUrl().equals('/'))
})

it('Sign in button should be clicked and login page should be launched', () => {
        Baseob.clickLoginButton();
   })
  
   it('City name should auto populate from pin code', () => {
      Loginob.verifyIfCityNameAutoPopulates();
   
    
 })
})


