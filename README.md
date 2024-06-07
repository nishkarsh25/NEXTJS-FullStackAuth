# NEXTJS-FullStackAuth

Welcome to the NEXTJS project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This is a web application built using Next.js, a React framework for building server-rendered applications. The project focuses on providing a seamless user experience through client-side routing using the Next.js app router. It aims to create a modern and responsive web application with a robust authentication system and user-friendly interface.

## Features

- **Client-Side Routing**: Utilizes the Next.js app router for client-side navigation, ensuring fast and smooth transitions between pages.
- **Middleware Functionality**: Implements middleware to control access to specific routes based on user authentication status.
- **User Authentication**: Supports user authentication with features such as signup, login, email verification, and logout.
- **Protected Routes**: Restricts access to certain routes for authenticated and unauthenticated users, ensuring security and privacy.
- **Profile Management**: Allows users to view and update their profiles, including details such as username and email.

## Live Demo

You can try out the live demo of the app [here](https://mern-redux-socket-socialmediaapp-2.onrender.com/).

## Folder Structure

```
├── components
│   ├── ...
├── app
│   ├── api
│   │   ├── users
│   │   │   ├── login(route.js)
│   │   │   ├── signup(route.js)
│   │   │   ├── verifyemail(route.js)
│   │   │   ├── logout(route.js)
│   │   │   ├── middleware(route.js)
│   ├── profile
│   │   ├── [id](page.js)
│   │   ├── page.js
│   ├── login(page.js)
│   ├── signup(page.js)
│   ├── verifyemail(page.js)
├── public
│   ├── ...
├── styles
│   ├── ...
└── README.md

```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/NEXTJS-FullStackAuth/blob/master/Screenshots/ss1.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-FullStackAuth/blob/master/Screenshots/ss2.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-FullStackAuth/blob/master/Screenshots/ss3.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-FullStackAuth/blob/master/Screenshots/ss4.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-FullStackAuth/blob/master/Screenshots/ss5.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/NEXTJS-FullStackAuth/blob/master/Screenshots/ss6.png" alt="Screenshot 1" width="1000"> 

## GIF's

<img src="https://github.com/nishkarsh25/NEXTJS-FullStackAuth/blob/master/Screenshots/ss7.gif" alt="Screenshot 1" width="1000"> 

## Technologies Used

- **Next.js**: A React framework for building server-rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the UI components.
- **Axios**: A promise-based HTTP client for making API requests.
- **jsonwebtoken**: A library for generating JSON Web Tokens (JWT) for user authentication.
- **nodemailer**: A module for sending emails from Node.js applications.


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/MERN-REDUX-SOCKET-SocialMediaApp.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to Use

### Features

1. **Signing Up**:
   - Navigate to the signup page by clicking on the "Signup" link in the navigation menu.
   - Enter your desired username, email, and password.
   - Click the "Signup" button to create your account.
   - After signing up, you will receive a verification email to activate your account.

2. **Logging In**:
   - Access the login page by clicking on the "Login" link in the navigation menu.
   - Enter your email and password associated with your account.
   - Click the "Login" button to authenticate yourself and access your profile.

3. **Verifying Email**:
   - Upon signing up, you will receive a verification email with a unique token.
   - Click on the verification link provided in the email to verify your email address.
   - Once verified, you can log in and access your profile.

4. **Profile Management**:
   - Navigate to the profile page by clicking on the "Profile" link in the navigation menu.
   - View and update your profile information, including username and email.
   - Save your changes to update your profile details.

5. **Logout**:
   - Click on the "Logout" button in the profile page to log out from your account.
   - You will be redirected to the login page after logging out.

## API Endpoints:
1. **Signup Endpoint**:
   - **Method**: POST
   - **URL**: `/api/users/signup`
   - **Description**: Used for user registration/signup.
   - **Request Body**: 
     ```json
     {
       "username": "example",
       "email": "example@example.com",
       "password": "examplepassword"
     }
     ```
   - **Response**: 
     - Success: 
       ```json
       {
         "message": "User created successfully",
         "success": true,
         "savedUser": { /* User object */ }
       }
       ```
     - Error:
       ```json
       {
         "error": "Error message",
         "status": 400
       }
       ```

2. **Login Endpoint**:
   - **Method**: POST
   - **URL**: `/api/users/login`
   - **Description**: Used for user authentication/login.
   - **Request Body**: 
     ```json
     {
       "email": "example@example.com",
       "password": "examplepassword"
     }
     ```
   - **Response**: 
     - Success: 
       ```json
       {
         "message": "Login successful",
         "success": true
       }
       ```
     - Error:
       ```json
       {
         "error": "Error message",
         "status": 400
       }
       ```

3. **Verify Email Endpoint**:
   - **Method**: POST
   - **URL**: `/api/users/verifyemail`
   - **Description**: Used for verifying user email addresses.
   - **Request Body**: 
     ```json
     {
       "token": "verificationtoken"
     }
     ```
   - **Response**: 
     - Success: 
       ```json
       {
         "message": "Email verified successfully",
         "success": true
       }
       ```
     - Error:
       ```json
       {
         "error": "Error message",
         "status": 400
       }
       ```

4. **Logout Endpoint**:
   - **Method**: GET
   - **URL**: `/api/users/logout`
   - **Description**: Used for user logout.

5. **User Profile Endpoint**:
   - **Method**: GET
   - **URL**: `/api/users/me`
   - **Description**: Retrieves user profile details.

6. **Middleware Endpoint**:
   - **Description**: Middleware function to control access to specific routes based on user authentication status.

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.


## Credits

This project wouldn't be possible without the contributions of the following:

- **Next.js**: Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications. Visit [Next.js](https://nextjs.org/) for more information.

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **React Router**: React Router is a library for routing in React applications, allowing for navigation between different components. Visit [React Router](https://reactrouter.com/) for more information.

- **Axios**: Axios is a promise-based HTTP client for making asynchronous requests in JavaScript applications. Visit [Axios](https://axios-http.com/) for more information.

- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution for modeling application data. Visit [Mongoose](https://mongoosejs.com/) for more information.

- **Node Mailer**: Nodemailer is a module for Node.js applications that allows sending emails. It is a powerful and easy-to-use module for sending email using Node.js. Visit [Nodemailer](https://nodemailer.com/about/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

- **Render**: Render offers a modern cloud platform for deploying and running web applications, databases, and other services. Visit [Render](https://render.com/) for more information.

- **MongoDB Atlas**: MongoDB Atlas is a fully managed cloud database service for modern applications. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for more information


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com



