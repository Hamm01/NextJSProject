Project setup for NextJs 13

```bash
  npx create-next-app@latest
```

[Next js Official Documentation](https://nextjs.org/docs/getting-started/installation)

Tech stack using in this
Axios, bcrypt, jsonwebtoken, nodemailer , React hot toast , Mongoose

```bash
  npx create-next-app@latest
```

Setting used when command runs

![Settings for project after running command](https://i.imgur.com/nUOeSWw.png)

```bash
  npm i axios bcryptjs jsonwebtoken nodemailer react-hot-toast mongoose
```

How folder structure is used in nextjs explaing in terms of Nextjs13
we have src folder in which we have app folder . app folder is used for
both frontend and backend\

1.  In start we have one folder App in src folder\
2.  we are creating 2 folders > models, helpers . these folders are in src folder
    not in app folder, so they are siblings of App folder\
3.  At the root of directory . not src folder, our root directory we will create .env file to store secrets\
4.  How app router works in nextjs 13\
5.  For frontend we are creating directory in app folder, that directory name will
    used as route in our application like eg. signup and login page : localhost:3000/signup or localhost:3000/login \
6.  Creating direcory Like Signup and in this folder we will create page.tsx\
7.  Creating direcory Like Login and in this folder we will create page.tsx \
    The file naming convention must be page.tsx . no other name is allowed for that specific route\
8.  For Backend we are using the app folder for backend api folder need to be created\
9.  In APi folder we are creating seprated folders like home and users
    this will lead as routes : localhost:3000/api/users , localhost:3000/api/home\
10. In these folders api/users/ we will must create route.ts or route.js "No other naming convention could be used"\
11. in users we are creating signup and login folders and that specific will have route.ts files inside them\
12. In .env file we are sving the secrets for dbconnection string , token secrets
    which will use in local developement and also on AWS\
13. created the dbConfig folder which is located in src folder , As NextJs is edge based connection used, the connection with db will made on a time when their is a need\
14. Handling frontEnd routes\
     like we have localhost:3000/profile/1\
     So in our app folder we have like signup, login directory similarly we have
    profile directory, in this directory we have page.tsx and for route handling like
    profile/1 . we will create diretory named [id] and in this folder we will create page.tsx and that id "id here is route parameter which is coming in url after profile"
