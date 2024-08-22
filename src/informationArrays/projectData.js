export const projectData = [
  {
    id: 1,
    projectName: "Recreate Nike Page",
    coverImg: "/nike/cover.png",
    tech: "HTML, CSS",
    prerequisits: ["recreate a profesional website in CSS and HTML", "responsive page", "good use of CSS variables", "use Grid or Flex", "good semantics and readability", "use structures that favour SEO", "use links to real products"],
    solution: "To demonstrate my skills in modern web development, I chose to replicate the Nike Spain (nike.es) page. This project allowed me to create a fully responsive site using CSS Grid and Flexbox, ensuring seamless performance across devices. I implemented CSS variables for maintainability, adhered to semantic HTML for better accessibility and SEO, and used real product links for authenticity. The challenge of recreating Nike’s detailed, minimalist design required precise control over layout and spacing, while maintaining high performance through image optimization and clean code. This project not only enhanced my understanding of responsive design and CSS best practices but also equipped me with the experience needed to build professional, user-centric websites.",
    examples: [
      {
        heading: "Page layout examples",
        imgDescriptions: [
          {
            img: "/nike/header.png",
            description: "The header layout without functionality",
          },
          {
            img: "/nike/products.png",
            description: "The products with links to real products",
          },
          {
            img: "/nike/footer.png",
            description: "Footer",
          },

        ],
      }
    ]
  },
  {
    id: 2,
    projectName: "Tour agency online web",
    coverImg: "/andalusiaTours/cover.png",
    tech: "JavaScript, CSS",
    prerequisits: ["create a project with JavaScript and DOM", "add at least two filters for the products", "show the products according to what the user searches for", "use clean and clear code as well as good practices"
    ],
    solution: "For my first JavaScript project I decided to create a web page for a tour agency as I was working part time for Discovering Spain and had experience with the topic. I implemented two filters: one for sorting tours by province, price or both, and another for sorting by company. Despite my initial lack of experience, this project challenged me to deeply understand JavaScript and DOM manipulation. After significant effort, I successfully created functional filters that enhanced the user experience. To add realism, I used real tour data, and clicking on a tour redirects the user to the provider’s website. This project was a valuable learning experience that sharpened my skills in JavaScript and clean code practices.",
    examples: [
      {
        heading: "Filter funtions",
        imgDescriptions: [
          {
            img: "/andalusiaTours/provincePriceFilter.png",
            description: "The tours have been filtered by both price and province here",
          },
          {
            img: "/andalusiaTours/providerFilter.png",
            description: "You can choose one provider",
          },
          {
            img: "/andalusiaTours/providerMultipleFilter.png",
            description: "Or you can choose multiple",
          },

        ],
      }
    ]
  },
  {
    id: 3,
    projectName: "Pintrest Async",
    coverImg: "/pinterest/cover.png",
    tech: "JavaScript, Vite, API, CSS",
    prerequisits: ["create a replica of pinterest", "create a project with vite", "allow users to search for images", "use the Unsplash API for the images", "good use of HTML and CSS", "it must be fully responsive", "devide the code up into components", "allow user to return to the origional state"],
    solution: "Creating this project was a significant challenge, as I had to thoroughly understand API documentation and how to effectively fetch and display dynamic data. Designing a layout that adapted to varying image content while maintaining responsiveness was also demanding. Additionally, I had to implement features allowing users to search for images and return to the original state to ensure a user friendly experience. As it was the first time I was using component-based architecture I had to initially take some extra time to fully understand it while remembering to use clean code practices.",
    examples: [
      {
        heading: "Function and Reactive design",
        imgDescriptions: [
          {
            img: "/pinterest/search.png",
            description: "Search for dog images",
          },
          {
            img: "/pinterest/responsive.png",
            description: "Responsive design",
          }
        ],
      }
    ]
  },
  {
    id: 4,
    projectName: "Games Hub",
    coverImg: "/gamesHub/cover.png",
    tech: "JavaScript, Vite, API, CSS",
    prerequisits: ["create a games hub with 3 games", "one of the games has to be tic-tac-toe", "responsive web design", "good design and layout", "no bugs in any of the games", "code must be in components"],
    solution: "For this project, I created a games hub featuring tic-tac-toe, hangman, and a memory game that leveraged the Pokémon API to add complexity. The process of making these games function smoothly, from managing turn-taking to accumulating points, significantly challenged my programming skills. The memory game was particularly demanding, as it not only used Pokémon cards but also included a unique feature where each player's Pokémon evolved with every turn won. This project helped me improve my JavaScript abilities, especially in handling APIs and creating interactive, responsive games with a clean design and bug-free performance.",
    examples: [
      {
        heading: "Memory game",
        imgDescriptions: [
          {
            img: "/gamesHub/memory/poke1.png",
            description: "Here the player chooses the type of pokemon cards",
          },
          {
            img: "/gamesHub/memory/poke2.png",
            description: "Fire was chosen",
          },
          {
            img: "/gamesHub/memory/poke3.png",
            description: "Player 1 won the first round and thier pokemon evolved",
          },
          {
            img: "/gamesHub/memory/poke4.png",
            description: "The winner is shown",
          },
        ],
      },
      {
        heading: "Hang man",
        imgDescriptions: [
          {
            img: "/gamesHub/hangman/hang1.png",
            description: "Letters are checked and added if correct, the man is drawn if incorrect",
          },
          {
            img: "/gamesHub/hangman/hang2.png",
            description: "When a player wins or looses they are notified",
          },
        ],
      },
      {
        heading: "Tic-tac-toe",
        imgDescriptions: [
          {
            img: "/gamesHub/ticTac/ticTac1.png",
            description: "Players choose if X or O goes first",
          },
          {
            img: "/gamesHub/ticTac/ticTac2.png",
            description: "They choose by clicking on the boxes",
          },
          {
            img: "/gamesHub/ticTac/ticTac3.png",
            description: "The winner is shown",
          },
        ],
      },
    ]
  },
  {
    id: 5,
    projectName: "API REST",
    coverImg: "",
    tech: "Node.js, MongoDb, Express,",
    prerequisits: ["server with express", "connect to a Mongo Atlas database via mongoose", "create models", "a seed that uploads data to one of the collections", "create a complete CRUD", "avoid duplicating arrays"],
    solution: "In this project, I gained hands-on experience with Express, Mongoose, and environment variables (.env) while building a server connected to a MongoDB Atlas database. I learned to create and manage schemas effectively to ensure proper data organization, set up a seed to upload initial data, and developed a complete CRUD application. This project was a good experience in working with databases, it allowed me to learn about and practice using best practices in backend development and data management.",
    examples: []
  },
  {
    id: 6,
    projectName: "API REST AUTH",
    coverImg: "",
    tech: "Node.js, MongoDb, Express, JWT",
    prerequisits: ["2 different roles for users with different permissions", "users can only be created with the role 'user'", "create an admin, do this in the database", "admin can change the role of a user", "admin can delete users", "use middleware to check the validity of the token and allow them to continue or show an error message", "server with express", "connect to a Mongo Atlas database via mongoose", "create 3 models, one of which is 'users'", "relation between data in the different collections", "full CRUD for all collections"],
    solution: "For this project, I developed a server using Express connected to a MongoDB Atlas database, modeled around the South African Educational Accreditation System. This allowed me to effectively structure data into projects, skills, and users, facilitating clear relationships between collections. I implemented user authentication and authorization using JWT tokens, enforcing role-based permissions where users are created with a default role and an admin can manage roles and delete users. This project enhanced my skills in creating robust CRUD operations, managing user roles, and securing routes with middleware for token validation, providing a comprehensive understanding of backend development and data security.",
    examples: []
  },
  {
    id: 7,
    projectName: "API REST FILES",
    coverImg: "",
    tech: "Node.js, MongoDb, Express, JWT, Cloudinary",
    prerequisits: ["upload files to 2 collections using cloudinary", "elimination of files in Cloudinary when they are deleted in the database", "server with express", "connect to a Mongo Atlas database via mongoose", "create 2 models both with a field that allows you to save a file", "relation between data in the different collections", "full CRUD for all collections"],
    solution: "For this project, I focused on managing research groups and their collaborators at the University of Granada. I structured the database to track collaborators and their associated projects, with models designed to store both project images and collaborator profile pictures via Cloudinary. The key challenge was integrating file upload and deletion, ensuring that images were correctly handled in both MongoDB and Cloudinary. This project deepened my understanding of file management, including how to efficiently upload and delete images, and strengthened my skills in establishing relationships between collections and implementing a full CRUD system.",
    examples: []
  },
  {
    id: 8,
    projectName: "Web Scrapping",
    coverImg: "",
    tech: "Node.js, Express, Puppeteer",
    prerequisits: ["use puppeteer to do web scrapping on a page with data pagination", "the scrapper should select all the items on each page", "it must continue with the next page until it has gone through all pages, it must collect all the data on all the pages", "save different data points from each item", "once all the data from all the pages has been collected, a json file must be generated where the collected data is stored", "create a script in package.json which allows us to easily execute the scrapper",],
    solution: "For this project, I developed a web scraper using Puppeteer to collect data from the Star Wars Databank. The scraper was designed to navigate through all pages, collecting the card titles and images from each one. After gathering the data from every page, it was compiled into a JSON file named SWCards.json. I also created a script in package.json for easy execution of the scraper with a single command. This project honed my skills in handling data pagination, automating browser tasks, and efficiently storing scraped data in a structured format.",
    examples: []
  },
  {
    id: 9,
    projectName: "Event and Attendee Management Platform",
    coverImg: "/eventManager/cover.png",
    tech: "JavaScript, Node.js, Express, MongoDb, Cloudinary, JWT",
    prerequisits: ["README", "Backend (Express, JWT, Bcrypt, Mongoose, CORS, Nodemon)", "create a user model which has information such as name, email and password (hashed)", "create an event model with information such as title, date, location and description as well as an array of attendees which should be the ids of the users", "implement middleware to verify the presence and validity of tokens in the protected routes", "protect the routes which can only be used by users", "upload files (for example: avatars or event posters", "controllers that order information according to specific criteria", "controllers that insert an element from one collection into another", "implement a login form for users to be able to acccess the platform.", "if the user doesn't exist then it should allow them to register and then login", "show a list of available events. Authentified users should be able to see confirm attendence to an event", "have an option for users to create events", "allow users to explore detials of each event and see the list of attendees", "implement an error management system for both the frontend and backend", "all forms for the frontend should alert users of error and what the error is", "all asynchronous processes must show loading in some way, so that the user has an inmediate response as to the action being done", "pay attention to using components correctly, avoid repeating code"],
    solution: "This project marked a significant milestone as it was the first time I built both the frontend and backend of a web application. I began by developing the backend using Express, setting up the user and event models with Mongoose, where I implemented JWT and Bcrypt for secure authentication. Testing the models and controllers with Insomnia helped ensure the CRUD operations and middleware functions worked as expected. I focused on securing the application by protecting routes that required authentication, and I implemented middleware to verify the validity of tokens. Integrating file uploads via Cloudinary added another layer of complexity, particularly when ensuring that deletions were correctly handled across collections and Cloudinary. Moving to the frontend, I faced challenges with managing asynchronous functions while connecting the user, event, and attendee collections. This required careful attention to data flow and the relationships between components. I dedicated time to implementing a responsive UI that provided immediate feedback through loading indicators during asynchronous operations and detailed error management for a seamless user experience. Building this project helped me master the integration of frontend and backend components, optimize code reusability, and ensure data consistency across the entire platform, making it a comprehensive and rewarding learning experience.",
    examples: [
      {
        heading: "Users",
        imgDescriptions: [
          {
            img: "/eventManager/allUsers.png",
            description: "The admin can see all users and their detials",
          },
          {
            img: "/eventManager/seeUser.png",
            description: "You can also see the events a user is goin to attend by clicking on See more",
          },
        ],
      },
      {
        heading: "Create an event form",
        imgDescriptions: [
          {
            img: "/eventManager/createEvent.png",
            description: "All users can create events, you can add an image to your event",
          },
          {
            img: "/eventManager/eventCreated.png",
            description: "You will see confirmation of your event once created",
          },
        ],
      },
      {
        heading: "Events",
        imgDescriptions: [
          {
            img: "/eventManager/eventsImAttending.png",
            description: "You can see all the events you have confirmed that you will attend",
          },
          {
            img: "/eventManager/eventDetails.png",
            description: "You can also see more details about each event",
          },
          {
            img: "/eventManager/eventAttendees.png",
            description: "You can see who is attending the event",
          },
        ],
      },
      {
        heading: "Login/Register",
        imgDescriptions: [
          {
            img: "/eventManager/login.png",
            description: "Login form",
          },
          {
            img: "/eventManager/register.png",
            description: "Register form",
          },
        ],
      },
    ]
  },
  {
    id: 10,
    projectName: "Game of Thrones Characters",
    coverImg: "",
    tech: "React, API",
    prerequisits: ["use at least 3 states, make sure they are necessary", "use at least one useEfect", "use at least one petition to an API to fetch data", "use React Router, declaration of routes and access to them via links", "at least one route must recieve a parameter which is then used in the component rendered from this route", "README"],
    solution: "For my first project in React, I focused on mastering the fundamentals of component structure, state management, and routing. Using the Game of Thrones API, I built a simple yet functional application that displayed characters based on selected fields or specific character details. I effectively utilized multiple states to manage user interactions and data rendering, while useEffect handled the data fetching process. React Router was implemented to navigate between routes, including one that received a character ID as a parameter to display detailed information about that character. This project allowed me to solidify my understanding of React-specific logic, such as useState, useEffect, and createContext, laying a strong foundation for more complex applications.",
    examples: [
      {
        heading: "Game of Thrones Cards",
        imgDescriptions: [
          {
            img: "/reactBasics/allCharacters.png",
            description: "All character cards fetched from the API without sorting them",
          },
          {
            img: "/reactBasics/lords.png",
            description: "Here the characters are sorted according to their title",
          },
          {
            img: "/reactBasics/character.png",
            description: "Click on a card to see more details about the character",
          }
        ],
      }
    ]
  },
  {
    id: 11,
    projectName: "Crop Harvest and Sales Manager",
    coverImg: "",
    tech: "React, Api",
    prerequisits: ["choose any topic as long as it requires the use of different advanced React hooks", "a good use of html and css", "use react-router-dom", "create and use at least one custom hook", "use at least one useReducer", "there must be no unnecessary re-renders", "correct use of components", "README"],
    solution: "In this project, I got to focus more on advanced React hooks, as well as on efficient state management and avoiding unnecessary re-renders. The project was inspired by a family-owned business that needed centralized data collection and analysis. I implemented React Router for seamless navigation and created several custom hooks to manage complex logic across components. I also utilized useReducer to handle some state transitions, ensuring data was stored correctly and efficiently. To add value, I integrated a React library for displaying graphs, enabling the business to visualize trends and make informed decisions. Additionally, I made use of a weather API to fetch the highest daily temperature for the region where the business operates. This feature is crucial because, if the project were set up with a backend, it could register and store daily temperatures, allowing the business to contrast this data with other metrics. This project had a steep learning curve and helped me to more fully understand the advanced React techniques needed to build an optimized application.",
    examples: [
      {
        heading: "Daily Harvest",
        imgDescriptions: [
          {
            img: "/cropSalesManager/dailyHarvest.png",
            description: "This page allows the recording and management of the daily crop harvest data",
          },
          {
            img: "/cropSalesManager/harvestRecords.png",
            description: "A list of each day's harvest, it can be edited if necessary",
          },
          {
            img: "/cropSalesManager/harvestRecordsDate.png",
            description: "Select the harvest by date, the graph shows the latest trends",
          },
        ],
      },
      {
        heading: "Market Deliveries",
        imgDescriptions: [
          {
            img: "/cropSalesManager/marketDeliveries.png",
            description: "This page allows the recording and management of deliveries data",
          },
          {
            img: "/cropSalesManager/marketRecords.png",
            description: "Agents and other market related info is recorded",
          },
          {
            img: "/cropSalesManager/marketDeliveriesDate.png",
            description: "For this data a more complex form was needed",
          },
        ],
      },
      {
        heading: "Sales",
        imgDescriptions: [
          {
            img: "/cropSalesManager/sales.png",
            description: "To record sales we rely on previously recorded information from deliveries",
          },
          {
            img: "/cropSalesManager/salesSpecific.png",
            description: "This form allow you to record the sales of specific deliveries",
          },
          {
            img: "/cropSalesManager/salesGraphs.png",
            description: "The graphs show a side by side comparison of deliveries vs sales",
          },
        ],
      },
      {
        heading: "Home",
        imgDescriptions: [
          {
            img: "/cropSalesManager/homeSidebar.png",
            description: "Choose a data point from the sidebar to see it on the home page",
          },
          {
            img: "/cropSalesManager/homeNoSidebar.png",
            description: "",
          }
        ],
      }
    ]
  },
  {
    id: 12,
    projectName: "Online Language Learning Platform with OpenAI",
    coverImg: "/languagePlatform/initialPage.png",
    tech: "React, API, Node.js, MongoDB, Express",
    prerequisits: ["Node for the backend and React for the frontEnd", "any necessary libraries", "to start the Data base create an excel and download it as a csv with at least 100 data points in a minimum of 2 to 3 collections which are connected to each other", "use Node.js file reading/writing (fs) to extract the data from the csv and create one or several seeds to upload this data to the database", "remember to create the models of the collections before the seed can be used", "backend; there must be a collection for users, different routes should be available according to the role of the user or whether they are logged in or not", "frontend: the code structure should be optimal so that everyone can understand everything at first glance, even without prior knowledge of the project. ", "the web page must make logical sense and it must be tailored to a specific audience.", "deploy both the BACKEND and the FRONTEND. We should be able to access the deployment links simply by having the GitHub repository link.", "good React architecture", "good UX/UI", "best practices in terms of componentization and reuse", "use advanced React hooks for specific and necessary functionalities", "README"],
    solution: "For this project, I created a platform tailored for language teachers, drawing on my decade of experience in teaching English and my own language-learning journey. The platform leverages the OpenAI API to assist teachers in generating teaching materials and providing instant feedback on students’ speaking practice, even without a teacher present. Teachers can create and assign speaking, listening, and grammar tasks, organize their materials, and manage students effectively. I structured the backend using Node.js, with data uploaded via seeds generated from CSV files. The frontend, built with React, follows best practices in componentization, advanced hooks, and a clean architecture for easy collaboration. The project is fully deployed, with accessible links provided in the comprehensive README which also details all features. This project not only fulfills a genuine need in language education but also showcases my ability to integrate advanced technologies and design an intuitive, user-friendly interface.",
    examples: [
      {
        heading: "A Student's view of the platform",
        imgDescriptions: [
          {
            img: "/languagePlatform/studentPage/videoTask.png",
            description: "Students practice listening to real videos and filling missing words they hear into the text",
          },
          {
            img: "/languagePlatform/studentPage/gapFill.png",
            description: "This focuses on grammar and vocabulary practice, when check is clicked the anwers and explanations are shown",
          },
          {
            img: "/languagePlatform/studentPage/questions.png",
            description: "Students answer these questions orally, then their answer is corrected by AI",
          },
          {
            img: "/languagePlatform/studentPage/questionsAnswered.png",
            description: "The corrections done by the AI are shown with explanations",
          },
          {
            img: "/languagePlatform/studentPage/speakingCorrections.png",
            description: "The last 10 speaking corrections can be seen here for revision purposes",
          },
          {
            img: "/languagePlatform/studentPage/joinClass.png",
            description: "Students can join a class group via a code they recieve from their teacher",
          },
        ],
      },
      {
        heading: "Create Exercise (for teachers/admin)",
        imgDescriptions: [
          {
            img: "/languagePlatform/createExercise/cover.png",
            description: "For teachers: Here they can choose to create gapfill activities manually or using AI, and YouTube activities",
          },
          {
            img: "/languagePlatform/createExercise/AiCreate.png",
            description: "Add a word and click create, AI does the rest",
          },
          {
            img: "/languagePlatform/createExercise/aiCreatedTask.png",
            description: "This is the task created by AI, it is automatically saved to the teachers profile",
          },
          {
            img: "/languagePlatform/createExercise/createText.png",
            description: "Gap Fill: This is where you add the text and title manually.",
          },
          {
            img: "/languagePlatform/createExercise/answersAndRules.png",
            description: "Once created, the answers must be added with a rule explaining why this is the correct answer",
          },
          {
            img: "/languagePlatform/createExercise/youtubeActivity.png",
            description: "Video tasks are created by adding a YouTube link and setting a start and end time",
          },
          {
            img: "/languagePlatform/createExercise/textExerciseCreated.png",
            description: "When the task has been created a preview is shown",
          },

        ],
      },
      {
        heading: "My Activities (for teachers/admin)",
        imgDescriptions: [
          {
            img: "/languagePlatform/myActivities/cover.png",
            description: "The exercises created by teachers can be grouped together into activities here",
          },
          {
            img: "/languagePlatform/myActivities/activityCreated.png",
            description: "The chosen exercises are shown on the page, and up to 3 questions can be added too",
          },
          {
            img: "/languagePlatform/myActivities/seeActivity.png",
            description: "The activities can be seen by clicking on See Activity",
          },
          {
            img: "/languagePlatform/myActivities/finalActivity.png",
            description: "Once saved the activity that has been created will be shown",
          },
        ],
      },
      {
        heading: "Class Manager (for teachers/admin)",
        imgDescriptions: [
          {
            img: "/languagePlatform/classManager/cover.png",
            description: "Here classes can be created and deleted, and activites can be assigned to them by date",
          },
          {
            img: "/languagePlatform/classManager/classGroups.png",
            description: "By clicking on different dates you can see what activity has been assigned to each class by date",
          },
          {
            img: "/languagePlatform/classManager/myActivities.png",
            description: "This is a list of the activities created by the user",
          },
        ],
      },
      {
        heading: "Manage Users (for teachers/admin)",
        imgDescriptions: [
          {
            img: "/languagePlatform/manageUsers/adminCover.png",
            description: "Admin can change the role of all other users, they can also delete users",
          },
          {
            img: "/languagePlatform/manageUsers/teacherCover.png",
            description: "Teachers can see which students are assigned to each task. They can also delete students.",
          },

        ],
      },
    ]
  }
]

// {
//   id: 1,
//   projectName: "",
//   coverImg: "",
//   tech: "",
//   prerequisits: [],
//   solution: "",
//   examples: [
//     {
//       heading: "",
//       imgDescriptions: [
//        {
//         img: "",
//         description: "",
//       },
//        {
//         img: "",
//         description: "",
//       },
//       ],
//     }
//   ]
// }



