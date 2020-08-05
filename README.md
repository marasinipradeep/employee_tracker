![License badge](https://img.shields.io/badge/license-MIT-green)

# Employee Tracker

Node CLI that make easy to create,read,update and delete with information stored in databases. This is a architect and solution for a company's employees management system and is build by using node, inquirer, and MySQL.

## User Stories

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```



## Table of Content
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#Licence)
4. [Contribution](#Contribution)
5. [Tests](#Tests)
6. [Questions](#Questions)
7. [StartBy](#StartBy)
8. [VideoLink](#VideoLink)


## Installation
The dependencies are [jest](https://jestjs.io/) for unit testing.
[inquirer](https://www.npmjs.com/package/inquirer) for interacting with users in node CLI.
[MySQL](https://www.npmjs.com/package/mysql) for database.
[console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.
 Install the packages/dependencies by hitting following command on your terminal console:-
```
npm install

```

## Usage


This application is used for employee management for any organisation so that the business owner can insert, update, delete and view data when required.Users are allowed to do following activities:-

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department


## License

```
This is MIT license

```

## Contribution

```
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owner of this repository before making a change.
```

## Tests
Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.It is recommended that you follow this workflow:

1. Run tests
2. Create or update classes to pass a single test case
3. RepeatJest is used for unit testing.

Run following command to run the test.

```
npm run test
```

## Questions
 <a href="https://github.com/marasinipradeep">Github Url : https://github.com/marasinipradeep</a>

 <a href="marasinipradeep@gmail.com">Email : marasinipradeep@gmail.com</a>



## StartBy Instructions

Has following database schema containing three tables:

![Database Schema](Assets/schema.png)

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  


## VideoLink
<a href= "">Click here for demo video link</a>

```
Note :- To view this readme.md file in neat and cleaner view.On the top of header of README.md right click and click on open preview.
