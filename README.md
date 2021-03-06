# Project-blog-backend
This is the back-end portion of project blog. This repo is inspired by the project from my work at OpenAtom Foundation.<br><br>
The back-end project is written in NodeJs, Express, with dependencies such as bcrypt & json web token for security and state management.<br>
This project is also using sqlite,sequelize & sqlite3 for local storage and data manipulation. Also, I have utilized bcrypt, jsonwebtoken and joi for user authenication and various validation tasks.
# Installation
```javascript
npm install // to install all necessary dependencies
```
# Usage
```javascript
npm start // to start the server on local port 8081
```
# API Reference
## Register user
Return JSON data of a registered user
* **URL**

  /register  
* **Method**

  `POST`
* **URL Params**

  None
* **Data Params**

  ```javascript
  username = [string]
  email = [string]
  password = [string]
  ```
* **Success**

  Code: 200
  ```javascript
  {
    user: {
      id: 3,
      username: "abc123",
      email: "abc@email.com",
      password: "$2b$10$j1WMXa7.bIeFs5nZN8tGA.",
      updatedAt: "2021-09-01T04:49:36.718Z",
      createdAt: "2021-09-01T04:49:36.718Z"
      },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ"
  }
  ```
* **Error**

  Code: 400
  ```javascript
  {
    "error": "Username or mail account is already in use."
  }
  ```
  OR
  ```javascript
  {
    "error": "Username must be alphanum, min 3, max 10 please."
  }
  ```
  OR
  ```javascript
  {
    "error": "Please provide an email."
  }
  ```
  OR
  ```javascript
  {
    "error": "Password must be a-z A-Z 0-9 min3 max30."
  }
  ```
## Login user
Return JSON data of a logged in user
* **URL**

  /login  
* **Method**

  `POST`
* **URL Params**

  None
* **Data Params**

  ```javascript
  username = [string]
  password = [string]
  ```
* **Success**

  Code: 200
  ```javascript
  {
    user: {
      id: 9,
      username: "aaccbde324",
      email: "aaccbde324@email.com",
      password: "T9KddykM85J790bOM3dK6",
      updatedAt: "2021-09-01T02:52:36.718Z",
      createdAt: "2021-09-01T02:52:36.718Z"
      },
    token: "cm5hbWUiOiJyYXkiLCJlbWFpbCI6InR"
  }
  ```
* **Error**

  Code: 400
  ```javascript
  {
    "error": "Incorrect username or password"
  }
  ```

## Api docs In progress

```
/user/:userid // show a user's profile

/ // show all blogs

/blog/:blogid // show a blog

/blog/new // write a new blog

/blog // show blogs that belong to a user (POST userId)

/category/:category // show blogs that belong to a category
```
# License
[MIT](https://choosealicense.com/licenses/mit/)