/*
const generateID = () => {
  
  return Math.floor(Math.random() * 1000)
}
*/

export const myProjects = [
  {
    name: 'This Site (React)',
    image: 'IMG_outdoor1.jpg',
    url: '',
    github: 'https://github.com/Petrimus/my-portfolio',
    description: 'This site is constructed with React. Styling is done with styled components.'
    + ' React router and react router hash link are used for routing site.'
    + ' Disappearing header is done with rxjs-library and rxjs hooks.'
    + ' The bottom contact section images are from FontAwsome free pic library.'
    + ' It is served as a static site from Elisa home page service platform.',
    instructions: '',
      id: 1
  },
  {
    name: 'Korona-virus (React)',
    image: 'korona-virus.png',
    url: 'https://demoproject-218708.ey.r.appspot.com/',
    github: 'https://github.com/Petrimus/korona-visual',
    description: `App visualizes korona-virus impact in Finland. It uses Helsingin Sanomat Korona API
     to collect data and draw graphs about it`,
    instructions: '',
      id: 2
  },
  {
    name: 'CO₂ Emissions (React)',
    image: 'co2.jpg',
    url: ' https://fast-bayou-83193.herokuapp.com/',
    github: 'https://github.com/Petrimus/worldmustchange',
    description: `This app is a project work for Helsinki University course 
    "Full Stack Web Development Project 2019". 
    Test app with credentials username: "tester", password: "tester10". 
    With this application you easily view changes in worlds population and co² emissions.
    You can view the world as a whole or select a certain country or predefined group of countries. 
    You can also compare two selected countries.`,
    instructions: '',
    id: 3
  },
  {
    name: 'Insightful Blogs (React, redux)',
    image: 'pen.png',
    url: 'https://protected-beach-92285.herokuapp.com/',
    github: 'https://github.com/Petrimus/fullstack_blogs_back',
    description: 'A web server with Node Js. Frontend is done with React and is served as a static content by the server.'
    + ' Application uses MongoDb Atlas to store data.',
    instructions: 'You can see a list of blogs that users have inserted to the application. You can like and comment them.'
    + ' Adding or removing a blog requires user to be logged in. Credentials for test-user are username: tester, password: test.',
    id: 4
  },
  
  {
    name: 'Chuck Norris Jokes (React)',
    image: 'martial-art.png',
    url: 'https://legends-norris.herokuapp.com/',
    github: 'https://https://github.com/Petrimus/chuck-norris-jokes',
    description: `A application that randomly selects jokes about Chuck Norris. 
    It is also posssible to substitute arbitrary name to replace Chuck Norris. 
    Application is running on Heroku in Docker container.
    `,
    instructions: '',
    id: 5
  },
  {
    name: 'My Friendbook (Java)',
    image: 'book.jpg',
    url: ' https://fathomless-retreat-33469.herokuapp.com',
    github: 'https://github.com/Petrimus/MyFriendbook',
    description: 'An application, which mocks some features of Facebook. It is written with Java and Spring boot.',
    instructions: 'You could create your own user, but for testing purposes it is advised to use test account.'
    + 'Username for test account is tester and password test.',
    id: 6
  },
  {
    name: 'Javascript Calculator',
    image: 'calculator.png',
    url: 'https://codepen.io/Petrimus/pen/GzjPBO',
    github: '',
    description: 'A simple calculator app written with javascript.',
    instructions: '',
    id: 7
  },
  {
    name: 'Phone Book (React)',
    image: 'phone.png',
    url: 'https://https://mighty-gorge-50196.herokuapp.com/',
    github: 'https://github.com/Petrimus/MOOC-Fullstack_phonebook_back',
    description: 'A phone book written in react. It uses MongoDb Atlas to store numbers',
    instructions: '',
    id: 8
  },
  {
    name: 'Tic Tac Toe (React hooks)',
    image: 'tic-tac-toe.webp',
    url: ' https://petrimus.github.io/tic-tac-toe/',
    github: 'https://github.com/Petrimus/tic-tac-toe',
    description: `A simple version of an old game Tic Tac Toe. It is written with React and idea was to practise hooks.
     With hooks AI is added to the game. It is not super smart, but can you defeat it?`,
    instructions: '',
    id: 9
  },  
]


