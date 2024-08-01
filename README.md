# Note
The backend has been delopyed on [render.com](https://render.com/) it takes almost `30s to restart` the server,please do request 2 -3 times if you faced an error of `Something went wrong`
## Information
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).and
an [Express.js](https://expressjs.com/) project 



Live Link: [https://todos-credential.onrender.com/](https://todos-credential.onrender.com/)
## Getting Started
Clone the Repos,
First,  run the development backend-server:
## Create a .env file in the backend folder using sample.env 
```bash
cd backend
npm i # For installing all the dependency used in backend
npm run dev

```
npm start
```

Second,  run the development frontend-server:
## Create a .env file in the frontend folder using sample.env 
```bash
cd frontend
npm i # For installing all the dependency used in backend
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start signup,initial the server redirect you  to [http://localhost:3000/signup](http://localhost:3000/signup) ,because you have'nt login,after successfully login,then it will redirect you to `/` page where you can add task and task can be `drag and drop` easily


## Deploy on Vercel

The easiest way to deploy your Next.js app on vercel:-Frontend deloy on `vercel`,whereas backend deloy on `render.com`
live link: [https://todos-credential.vercel.app/](https://todos-credential.vercel.app/)


# Disclaimer
This is a simple example of how to create a todo list app with authentication using Next.js and Express
