# API Documentations
## Dependencies
To begin, download the repository and run ```npm install``` in the command-line. This will install each dependency needed for running the application.
```
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "firebase": "^9.13.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.4.3",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
```


## Command Line Arguments
To begin, executing `npm start` will run the server in the default port 3000 and open up the web application automatically. Anytime you want to go the fefalult page, go to `http://localhost:3000/App` in your browser will present the default page for the app.


## Endpoints
### /App
This is the root page or main page of our website. This endpoint redirects the user to the navigation page. Users can navigate different items posted by other login users at this page.

### /App/Login
This endpoint is used by the "Login" button on the navigation page (`http://localhost:3000/App`). It will brings users to the login page. Users must login to their account through Google Authentication to create new posts. Every login user will have its own unique `ID` store in `Firebase`.

### /App/createpost
This endpoint is used by the "Sell my item" button on the navigation page (`http://localhost:3000/App`). **Note: This button only visible to the login users.** It will brings users to the create post page. Users must login to their account through Google Authentication to create new posts. All posts will be stored in `Firebase` powered by Google.


# Backend implementation
We store all our data in `Firebase` and built the login function using `Google Authentication` api.


# Front end implementation
We build our front end using `React JS Environment`, `JavaSceipt`, `HTML` and `CSS`. There are three different views in our web application, including the `navigation` page, the `login` page, and the `createpost` page.

