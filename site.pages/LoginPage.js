import dataOb from '../TestData/CreateAccountData';
import * as fs from 'fs';

//Getting raw data from JSON file and parsing it
let rawData = fs.readFileSync('TestData/CreateAccountData.json');
var parsedData = JSON.parse(rawData);
 
//Data Initialization
var email = parsedData["email"];
var password = parsedData["password"];
var confirmPassword = parsedData["confirmPassword"];
var civility = parsedData["civility"];
var lastName = parsedData["lastName"];
var firstName = parsedData["firstName"];
var day = parsedData["day"];
var month = parsedData["month"];
var year = parsedData["year"];
var address = parsedData["address"];
var zipCode = parsedData["zipCode"];

class LoginPage{

//Selector getters
get email() {return $('input#email')}
get password() {return $('input#password')}
get confirmPassword() {return $('input#password2')}

get emailCreate() {return $('//input[@id="email_create"]')}
get createAccountButton() {return $('//button[@id="SubmitCreate"]') }
get verifyLoginPage() {return $('div:nth-child(4) > h2')}

get civilityRadioButton() {return $('//label[@class="LabelRadiobox"][contains(text(),"'+civility+'")]/preceding-sibling::label')}

get lastName() {return $('//input[@id="nom"]')}
get firstName() {return $("//input[@id='prenom']")}

get day() {return $('//input[@id="dateJour"]')}
get month() {return $('//input[@id="dateMois"]')}
get year() {return $('//input[@id="dateAnnee"]')}

get address() {return $('//input[@id="adresse"]')}
get zipCode() {return $('//input[@id="codePostal"]')}

get city() {return $('//input[@id="ville"]')}

//Method to verify if a validation tool tip is displayed 
verifyValidationToolTipInEmailTextBox()
{
    var input='test';
    var ExpectedValidationMessage ="Please include an '@' in the email address. "+"'"+input+"'"+" is missing an '@'."
   
    this.email.setValue(input);
    browser.keys('Enter');
    browser.pause(5000);
    expect(this.email).toHaveAttribute('validationMessage', ExpectedValidationMessage)

    var ActualvalidationMessage= this.email.getAttribute('validationMessage');
    console.log('ToolTip Text is' + ActualvalidationMessage);

    }


//Method to verify if the city name autopopulates with pincode
verifyIfCityNameAutoPopulates()
{
this.emailCreate.setValue(email);
this.createAccountButton.click();
this.email.setValue(email);
this.password.setValue(password);
this.confirmPassword.setValue(confirmPassword);
this.civilityRadioButton.click();
this.lastName.setValue(lastName);
this.firstName.setValue(firstName);
this.day.setValue(day);
this.month.setValue(month);
this.year.setValue(year);
this.address.setValue(address);
this.zipCode.setValue(zipCode);

expect(this.city).toBeEnabled();

}

}

export default new LoginPage();