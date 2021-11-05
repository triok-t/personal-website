import imgObjOne from '../../images/svg-1.svg'
import imgObjTwo from '../../images/svg-2.svg'
import imgObjThree from '../../images/svg-3.svg'
import imgObjFour from '../../images/svg-4.svg'
import imgObjFive from '../../images/svg-5.svg'
import cert from '../../images/azure-data-fundamentals.png'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Working Experiences',
  headLine: 'IT Support',
  headLine2: 'Mobile Application Development',
  headLine3: 'Full Stack Development',
  description: 'Schimmer Metal Standard Co., Ltd. ( August - October 2017 )',
  description2: 'A-HOST Co., Ltd. ( August - December 2018 )',
  description3: 'ZyGen Co., Ltd. ( October 2019 - Present )',
  buttonLabel: 'Certificated',
  imgStart: false,
  img: imgObjOne,
  alt: 'Work',
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Certificated',
  headLine: 'Microsoft Certified: Azure Data Fundamentals',
  urlLink:
    'https://www.credly.com/badges/556721f8-766b-4a1b-9db1-6580e71c4d76?source=linked_in_profile',
  // description:
  //   'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you are ready to go.',
  buttonLabel: 'Skills',
  imgStart: true,
  img: imgObjFour,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true,
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Contact',
  headLine: 'Email:',
  description: 'kittipong.kkt@gmail.com',
  headLine2: 'Phone:',
  description2: '(+66) 97 107 3737',
  headLine3: 'Social Media:',
  description3: 'Available at the bottom of this page.',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: imgObjFive,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true,
}
