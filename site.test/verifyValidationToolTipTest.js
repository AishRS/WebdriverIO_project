import Baseob from '../site.pages/BasePage';
import Loginob from '../site.pages/LoginPage';

before(() => 
{
 Baseob.launchBrowser();
})

describe('Verify Validation tooltip on entering a random string instead of email ID', () => {

  if('Verify Page URL',() => {
    expect(browser.getUrl().equals('/'))
  })

  it('Sign in button should be clicked and login page should be launched', () => {
      Baseob.clickLoginButton();
    
 })
  it('A validation tooltip should be prompted', () => {
      Loginob.verifyValidationToolTipInEmailTextBox();
 })
})


