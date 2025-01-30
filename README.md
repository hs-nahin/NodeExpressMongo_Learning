# NodeExpressMongo_Learning

This repository is dedicated to learning and practicing **Node.js**, **Express.js**, and **MongoDB**. The repo is organized into directories for each topic, with step-by-step examples, best practices, and mini-projects to solidify your understanding.

---

## Table of Contents

- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Guidelines for Each Section](#guidelines-for-each-section)
  - [Basics](#basics)
  - [Projects](#projects)
  - [AdvancedTopics](#advancedtopics)
  - [Resources](#resources)
- [Contributing](#contributing)

---

## Getting Started

To get started, clone this repository and install Node.js on your system.

### Prerequisites

- Install [Node.js](https://nodejs.org/) (LTS version recommended)
- Install [MongoDB](https://www.mongodb.com/try/download/community)
- Basic knowledge of JavaScript

### Clone the Repository

```bash
git clone https://github.com/hs-nahin/NodeExpressMongo_Learning.git
cd NodeExpressMongo_Learning
```

---

## File Structure

The repository is structured as follows:

```plaintext
NodeExpressMongo_Learning/
│
├── README.md              # Overview of the repo and guidelines
├── package.json           # Node.js project dependencies
├── .gitignore             # Files to ignore in Git
│
├── Basics/                # Fundamental concepts and exercises
│   ├── Node/
│   │   ├── index.js
│   │   ├── Modules.js
│   │   ├── FSModule.js
│   │   └── Events.js
│   │   └── http.js
│   ├── Express/
│   │   ├── BasicServer.js
│   │   ├── Middleware.js
│   │   └── Routing.js
│   └── MongoDB/
│       ├── Connect.js
│       ├── CRUD.js
│       └── Aggregations.js
│
├── Projects/              # Mini projects for practice
│   ├── ToDoApp/
│   │   ├── server.js
│   │   ├── models/
│   │   ├── routes/
│   │   └── public/
│   └── BlogApp/
│       ├── server.js
│       ├── models/
│       ├── routes/
│       └── views/
│
├── AdvancedTopics/        # Advanced Node, Express, and MongoDB concepts
│   ├── Authentication/
│   │   ├── JWT.js
│   │   └── OAuth.js
│   ├── Performance/
│   │   ├── Caching.js
│   │   └── Clustering.js
│   └── Security/
│       ├── RateLimiter.js
│       └── DataSanitization.js
│
└── Resources/             # References, notes, and external links
    ├── Books.md
    ├── Courses.md
    └── CheatSheets/
```

---

## Guidelines for Each Section

### Basics

Learn the core concepts of Node.js, Express.js, and MongoDB with hands-on examples:

#### [Node](./Basics/Node/)

- **[index.js](./Basics/Node/00_GettingStarted/index.js)**: Write your first Node.js program.
- **[Modules.js](./Basics/Node/00_GettingStarted/Modules.js)**: Learn about Node.js modules and how to use them.
- **[FSModule.js](./Basics/Node/00_GettingStarted/FSModule.js)**: Explore the File System module for reading and writing files.
- **[Events.js](./Basics/Node/00_GettingStarted/Events.js)**: Understand event-driven programming in Node.js.
- **[http.js](./Basics/Node/00_GettingStarted/http.js)**: Learn how to create an HTTP server using the `http` module.

#### [Express](./Basics/Express/)

- **[BasicServer.js](./Basics/Express/BasicServer.js)**: Set up a basic Express.js server.
- **[Middleware.js](./Basics/Express/Middleware.js)**: Dive into middleware functions and their role in request/response cycles.
- **[Routing.js](./Basics/Express/Routing.js)**: Implement routing in Express.js.

#### [MongoDB](./Basics/MongoDB/)

- **[Connect.js](./Basics/MongoDB/Connect.js)**: Connect your Node.js app to MongoDB.
- **[CRUD.js](./Basics/MongoDB/CRUD.js)**: Perform Create, Read, Update, and Delete operations.
- **[Aggregations.js](./Basics/MongoDB/Aggregations.js)**: Learn how to use the aggregation framework.

---

### Projects

Apply your knowledge with practical projects:

#### [ToDoApp](./Projects/ToDoApp/)

- Build a simple to-do list application.
- **Features**: Add, update, and delete tasks with MongoDB for persistence.

#### [BlogApp](./Projects/BlogApp/)

- Create a blog application with user authentication and a rich text editor.
- **Features**: CRUD operations for blog posts, MongoDB integration, and dynamic views with EJS.

---

### AdvancedTopics

Expand your skills with advanced concepts:

#### [Authentication](./AdvancedTopics/Authentication/)

- **[JWT.js](./AdvancedTopics/Authentication/JWT.js)**: Secure your application with JSON Web Tokens.
- **[OAuth.js](./AdvancedTopics/Authentication/OAuth.js)**: Implement OAuth for third-party login.

#### [Performance](./AdvancedTopics/Performance/)

- **[Caching.js](./AdvancedTopics/Performance/Caching.js)**: Speed up your app with Redis caching.
- **[Clustering.js](./AdvancedTopics/Performance/Clustering.js)**: Utilize Node.js clustering for scalability.

#### [Security](./AdvancedTopics/Security/)

- **[RateLimiter.js](./AdvancedTopics/Security/RateLimiter.js)**: Implement API rate limiting.
- **[DataSanitization.js](./AdvancedTopics/Security/DataSanitization.js)**: Prevent injection attacks.

---

### Resources

Helpful references and materials:

- **[Books](./Resources/Books.md)**: Recommended books for further reading.
- **[Courses](./Resources/Courses.md)**: Online tutorials and courses.
- **[CheatSheets](./Resources/CheatSheets/)**: Quick reference guides for Node, Express, and MongoDB.

---

## Contributing

Feel free to contribute to this repository by adding examples, projects, or improving documentation. Fork the repo, make your changes, and submit a pull request!
