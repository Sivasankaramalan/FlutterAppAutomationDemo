
/**
 * User: Sivasankaramalan Gunasekarasivam
 * Date: 22/08/2020
 * Time: 23:08
 */

const wdio = require('webdriverio');
const assert = require('assert');
const find = require('appium-flutter-finder');

const osSpecificOps = process.env.APPIUM_OS === 'android' ? {
  platformName: 'Android',
  deviceName: 'K7E4C19812003327',
  // @todo support non-unix style path
  app: __dirname +  '/../build/app/outputs/apk/debug/app-debug.apk',
}: 
process.env.APPIUM_OS === 'ios' ? {
  platformName: 'iOS',
  platformVersion: '13.0',
  deviceName: 'iPhone 11',
  noReset: true,
  app: __dirname +  '/../ios/Runner.zip',

} : 
{};

const opts = {
  port: 4723,
  capabilities: {
    ...osSpecificOps,
    automationName: 'Flutter',
    unicodeKeyboard:true,
  resetKeyboard:true,
  autoGrantPermissions:true
  }
};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

(async () => {
  console.log('############################## App Launch Settings ##############################')
  console.log("/n")

  const driver = await wdio.remote(opts);
   assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');
  await driver.execute('flutter:clearTimeline');
  await driver.execute('flutter:forceGC');

 /**
 * Verify Sign In page details
 */

  await driver.execute('flutter:waitFor', find.byText("Sign In"));

  assert.strictEqual(await driver.getElementText(find.byText('Sign In')), 'Sign In');
  sleep(2000);
  assert.strictEqual(await driver.getElementText(find.byText('Sign Up')), 'Sign Up');
  sleep(2000);
  await driver.elementClick(find.byText('Sign In'));
  sleep(2000);

  await driver.elementClick(find.byValueKey('emailTxt'));
  await driver.elementSendKeys(find.byValueKey('emailTxt'), 'test@gmail.com')
  await driver.elementClick(find.byValueKey('passwordTxt'));
  await driver.elementSendKeys(find.byValueKey('passwordTxt'), '123456')
  await driver.elementClick(find.byText('Login'));

  console.log("Verify Error Message for Sign In")
  sleep(2000);
  // let element = driver.getElementText(find.byText('Error:AMPLIFY_SIGNIN_FAILED'));
  // assert.strictEqual(await driver.getElementText(find.byText('Error:AMPLIFY_SIGNIN_FAILED')),'Error:AMPLIFY_SIGNIN_FAILED');
  
  console.log("Canceling the Login")
  await driver.elementClick(find.byValueKey('cancel'));
  sleep(2000);
  

 /**
  * Verify Signup page details
  */

  console.log("Verify Sign Up Page")
  sleep(2000);  

  await driver.elementClick(find.byText('Sign Up'));

  sleep(2000);
  await driver.elementClick(find.byValueKey('userNameSP'));
  sleep(2000);
  await driver.elementSendKeys(find.byValueKey('userNameSP'), 'Sivasankaramalan')
  sleep(2000);
  await driver.elementClick(find.byValueKey('passwordSignup'));
  sleep(2000);
  await driver.elementSendKeys(find.byValueKey('passwordSignup'), '123456')
  sleep(2000);
  await driver.elementClick(find.byValueKey('emailField'));
  sleep(2000);
  await driver.elementSendKeys(find.byValueKey('emailField'), 'test@gmail.com')
  sleep(2000);
  await driver.elementClick(find.byValueKey('phoneNumber'));
  sleep(2000);
  await driver.elementSendKeys(find.byValueKey('phoneNumber'), '+919003999957')
  sleep(2000);
  await driver.elementClick(find.byValueKey('signUp'));
  sleep(2000);

  console.log("Verify Error Message for Sign Up");

  await driver.elementClick(find.byValueKey('cancel'));

 /**
  * Close Application
  */
 console.log("Delete The App Session");
 driver.deleteSession();
 driver.closeApp

})();