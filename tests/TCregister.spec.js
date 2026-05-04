import {test,expect} from '@playwright/test'

import {HomePage} from '../pageobjects/HomePage'
import{PoManager} from '../pageobjects/POManager'
import{RegistrationPage} from '../pageobjects/RegistrationPage'
 
//import testdata from '../utils/parabank.json' assert ()

//import{customer as test,expect} from '..fixtures/testfixture'
test('registration',async({page})=>
{
const homepage=new HomePage(page)
  homepage.goTo()
  homepage.clickOnRegisterLink()
  const registerpage=new RegistrationPage(page)
//const registerpage=new PoManager.getRegistrationpage()
   await registerpage.registerUser('sneha','Dudhanale','pune','kothrud','pune','411041','1234','23456','snehah','asdf')
registerpage.clickOnRegisterbutton()
 await page.waitForTimeout(2000)

}    
)

// //other 
// import {test,expect} from '@playwright/test'

// //import {HomePage} from '../pageobjects/HomePage'
// import{PoManager} from '../pageobjects/POManager'
// //import{RegistrationPage} from '../pageobjects/RegistrationPage'

 
// //import testdata from '../utils/parabank.json' assert ()

// //import{customer as test,expect} from '..fixtures/testfixture'
// test('registration',async({page})=>
// {
// const homepage=new HomePage(page)
//   homepage.goTo()
//   homepage.clickOnRegisterLink()
//   const registerpage=new RegistrationPage(page)
// //const registerpage=new PoManager.getRegistrationpage()
//    await registerpage.registerUser('sneha','Dudhanale','pune','kothrud','pune','411041','1234','23456','snehah','asdf')
// registerpage.clickOnRegisterbutton()
//  await page.waitForTimeout(2000)

// }    
// )

 //for (const data of testdata)
 //{
// test(`registration ${data.username}`,async({page})=>
// {
// //const homepage=new HomePage(page)
//  // homepage.goTo()
//  // homepage.clickOnRegisterLink()

//  const PoManager=new PoManager(page)

//  const homepage=PoManager.getHomepage()
//  await homepage.goto()
//   const registerpage=new RegistrationPage(page)
// //const registerpage=new PoManager.getRegistrationpage()
//    await registerpage.registerUser(data.firstname,data.lastname,data.address,data.)
// registerpage.clickOnRegisterbutton()
//  await page.waitForTimeout(2000)

// }    
// )
// // }


// test('registration',async({page,testdataForregistration})=>

//   {

//   const registerpage =PoManager.getRegistrationPage()
// const homepage =new HomePage(page)
//   homepage.goTo()
//   homepage.clickOnRegisterLink()
//   const registerpage=new RegistrationPage(page)
// //const registerpage=new PoManager.getRegistrationpage()
//    await registerpage.registerUser('sneha','Dudhanale','pune','kothrud','pune','411041','1234','23456','snehah','asdf')
// registerpage.clickOnRegisterbutton()
//  await page.waitForTimeout(2000)

// }    
// )