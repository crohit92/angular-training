# Course content

## Programme Introduction

This course is a beginer to advanced MEAN stack programme. In this course we will create a full fledged application which can be used to sell video courses online. All the code for this course will be available on github, which can be referenced at any time. In this course the candidate will learn the following technologies.

* Typescript / Javascript
* Angular
* Express JS (Node JS)
* MongoDB
* Basics of Git

Throughout the course candidates will have to solve various assignments.

## Course Content

### Introduction

* Demo of the project we will build in the programme.
* Setup of local dev environment
  * Node and NPM
  * Typescript compiler
  * Git
  * NX CLI
  * Angular CLI
* Basics of Version control
  * Introduction to version control systems
  * Industry recommended version control (**GIT**)
  * Basic git commands
    * git clone
    * git checkout
      * Switch to a branch
      * Undo changes
      * Create a new branch
    * git add and git commit
    * git push, git pull and git fetch
* Understanding how Node based applications work
  * Write a "Hello World" node application (without creating a node project).
  * Initiate a node based project
  * What is package.json
  * Adding [external node modules](https://www.npmjs.com/package/is-number) to the project
  * Different types of dependencies
  * Adding scripts to package.json
  * What is package-lock.json and why is it used?

### Introduction to Javascript basics

* Variable declaration using `var`

* Arithmatic operators `+, -, /, *`

* Conditional statements `if, if else, if else if, conditional statement`

* Looping statement `while, do while, for, for of, for in `

* What is an `Object`

  * Important methods of an `Object`

* What is an `Array`

  * Important methods of an `Array`

* Functions

  * Calling functions with no arguments
  * Passing values to functions
  * Returning values from functions
  * Functions with both arguments and return values
  * **Hoisting** of declarations
  * **Garbage collection** by javascript runtime
  * Understanding **closures** in javascript

* **Difference between Value types and Reference Types in Javascript**

* Variable declaration revisited (`let` and `const`)

* Scope resolutions in functions (dynamism of `this`)

  * Demo how `this` is not known until runtime.

* **Arrow function** and lexical scope

  

### Introduction to Typescript

* What is typescript and why to use it? 
* Setup your [local dev environment](https://www.typescriptlang.org/#installation) for typescript.
* Create first program in Typescript and run it using node runtime.
* [Data types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
* Adding type information to variables
* [Revisiting functions with types](https://www.typescriptlang.org/docs/handbook/functions.html)
* Optional and default arguments
* Rest parameters / Variable number of arguments `...`
* Advanced Operators 
  * Nullish coalsecing operator `??`
  * Spread Operator `...`
  * Optional Chaining Operator `?.`
* Introduction to [**Class**](https://www.typescriptlang.org/docs/handbook/classes.html)es in typescript
  * Methods and properties in a class
  * Writing a Constructor 
  * Constructor parameters
  * Access specifiers `public`, `private`, `protected`
  * Adding access specifiers to constructor parameters
  * Accessors `get` and `set`
  * Understanding `static` properties
  * Class inheritance
* Introduction to [interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
  * Optional properties
  * Implement Interface on a class (**Multiple inheritance**)
* Writing [Enumaration](https://www.typescriptlang.org/docs/handbook/enums.html)
  * Numeric enums
  * String enums

* [Generic](https://www.typescriptlang.org/docs/handbook/generics.html) Classes, Methods and Interfaces



### Introduction to Angular

* Create a "Hello world" angular application.
* Understanding the file structure
* Making changes to the [application](https://angular.io/tutorial/toh-pt0)
* [Create components and introduce two way data binding](https://angular.io/tutorial/toh-pt1)
* [Understanding template looping and handle user events](https://angular.io/tutorial/toh-pt2)
* [Components interacting with each other](https://angular.io/tutorial/toh-pt3)
* [Seperation of concerns - Introduction to services](https://angular.io/tutorial/toh-pt4)
* [Introduction to InApp Navigation](https://angular.io/tutorial/toh-pt5)
* [Communicating with an API Server](https://angular.io/tutorial/toh-pt6)
* [Deep dive into Angular Router](https://angular.io/guide/router-tutorial-toh#router-tutorial-tour-of-heroes)
  * Route Redirects
  * Wildcard Routes
  * [Introduction to Routing modules](https://angular.io/guide/router-tutorial-toh#refactor-the-routing-configuration-into-a-routing-module)
  * [Seperation of concerns - Segregate functionalities into feature modules](https://angular.io/guide/router-tutorial-toh#milestone-3-heroes-feature)
  * [ActivatedRoute and Router Service](https://angular.io/guide/router-tutorial-toh#route-parameters)
  * [Working with mutiple feature modules](https://angular.io/guide/router-tutorial-toh#milestone-4-crisis-center-feature)
  * [Route Guards](https://angular.io/guide/router-tutorial-toh#milestone-5-route-guards)
* **FInal project initialization**
  * Introduction to CMS
  * Users Module
    * Implement Login
    * Implement Signup
    * Implement Forgot password
  * Dashboard module
    * Workshops list
    * Workshop overview
    * **Payment gateway integration**
  * My Workshops module
    * Listing purchased workshops
    * Adding Auth guard to prevent unauthorised access

### Introduction to API programming

* [Introduction to REST Conventions](https://restfulapi.net/resource-naming/)
* Introduction to NX Workspace
* Writing "Hello World" Express app in NX.
* Sharing Code using NX Libraries
* [Routing](https://expressjs.com/en/starter/basic-routing.html) in an Express application
* [Middlewares pipeline in Express](https://expressjs.com/en/guide/writing-middleware.html)
* Seperation of Concerns - Using Router to divide application into Modules



### Introduction to MongoDB

* Installation on MongoDB
* Create first connection to mongoDB using **Mongoose**
* Creating a Schema in Mongoose
* CRUD operations using Mongoose
* Integration API with the DB