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
This endpoint redirects the user to the navigation page. Users can navigate different items posted by other login users at this page.

### /Login
This endpoint is used by the "Login" button on the navigation page (`http://localhost:3000/App`). It will brings users to the login page. Users must login to their account through Google Authentication to create new posts.

### /createpost

