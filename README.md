# >>> TechSchmooze
A dynamic marketplace where MIT students can effortlessly sell, inquire, borrow, share, and give away a diverse array of equipment. Features a centralized hub for real-time updates on events, gatherings, and parties, fostering student engagement. Includes a chatroom, empowering students to initiate discussions, share insights, and seek advice.

# >>> Back-end files
# >>> ./server

>>> ./server/api.js
This file defines the routes of the server. Such include socket initialization, authentication, Google account login and logout, as well as retriving and adding data into the database.

>>> ./server/auth.js
This file handles Google login/logout authentication. It checks whether the provided email address has an associated account in the database. If so, it creates a temporary token for it. Otherwise, it creates a new account.

>>> ./server/server-socket.js
This file manages all sockets by assigning users to their corresponding socket objects. It disconnects unactive tabs, monitors the messaging page, displays the active chatroom, adds/removes users in the chatroom, and updates the current chat in real time.

>>> ./server/server.js
>>> This file defines how the server starts. It connects to the database, sets up server middleware, forward front-end routes, set up error handling requests, and starts the webserver.

>>> ./server/validator.js
This file correctly sets up the repository, checks if node modules exist, makes sure npx webpack was called if required, and warns if visiting port 3000 while running hot reloader.

# >>>./server/models
All the files in that folder look similar. They create new mongoose schemas, define their variables along with their datatypes, and exports their models.

##### Front-end files
# >>> ./client/src
>>> ./client/src/index.js
This file renders React component "Root" into the DOM element with ID "root" and allows live updates.

>>> ./client/src/utilities.js
This file make API requests, which can be used widely by importing this file. It provides the get and post functions and returns promises, from which we can use ".then" on them.

>>> ./client/src/utilities.css
This file defines the common styles like colors, size, fonts, flex display, margins, and padding.

# >>> ./client/src/components
>>> ./client/src/components/App.js
This file imports and defines the main route paths along with their elements. It initializes the user IDs and handles both log in and log out features.

# >>> ./client/src/components/pages
This folder contains different files (JS and CSS) representing their corresponding pages that have almost similar format.

In some JS files, we abstracted some of the tasks within the corresponding smaller files found in ./client/src/componenets/modules. Sometimes, we used "useNavigate" from react-router-dom whenever we need to access some information passed through the link. In other cases, we used JS features to create a dynamic filter satisfying the user's preferences. Other important information were passed in as props, most importantly the user ID to identify their login status.

On the other hand, CSS files were used to implement the design from scratch. This web app was made responsive to phone/tablet/laptop size by the using media quesries.

# >>> ./client/src/components/modules
The files in ./client/src/components/modules are much similar to the files defined above in ./client/src/components/pages. The only difference is that, these helper files were created for the sake of abstracting our platform. Instead of implementing all feature in one file, they were disperesed into different files for better readability, collaboration, and debugging.

That being said, this platform was designed for easier internal communication among MIT students. Such include chats, discussions, and trading services. Instead of sending email dormspams to everyone, we want to make sure that your message reach out to the targeted recipient. In such scenario, services would be fast as students would be able to reach out to fellow students they really need. Tech stack used was Node.js, React.js, MongoDB, HTML, and CSS.
