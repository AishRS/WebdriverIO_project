class BasePage  {

get LoginBtn() {return $('//a[@class="login"]')}

launchBrowser() { browser.url('/'); }

clickLoginButton()
{
    browser.waitUntil(
        () => this.LoginBtn.isDisplayed(),
        {
            timeout: 50000,
            timeoutMsg: 'Login Button is not loaded / Login page is not loaded - Timeout'
        }
    );
this.LoginBtn.click();
}
}

export default new BasePage();