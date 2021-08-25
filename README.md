# Project-blog-backend
This is the back-end portion of project blog. This repo is inspired by the project from my work at OpenAtom Foundation.<br><br>
The back-end is written in NodeJs, with dependencies such as bcrypt & json web token for security and state management.<br>
This project is also using sqlite for local storage, thus, sequelize & sqlite3 are used. 
# Installation
```javascript
npm install // to install all necessary dependencies
```
# Usage
```javascript
npm run start // to start the server on local port 8081
```
# API Reference
```javascript
/register // register a user
/login // login a user
/user/:userid // show a user's profile

/ // show all blogs
/blog/:blogid // show a blog
/blog/new // write a new blog
/blog // show blogs that belong to a user (POST userId)
/category/:category // show blogs that belong to a category
```
# License
[MIT](https://choosealicense.com/licenses/mit/)