DROP DATABASE IF EXISTS employeeManagement_db;

CREATE DATABASE employeeManagement_db;

USE employeeManagement_db;

CREATE TABLE department(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);


CREATE TABLE role(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL NULL,
    department_id INT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE employee(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);


-- 3 table join

SELECT employee.id ,employee.first_name, employee.last_name,role.title, department.name,role.salary, employee.manager_id
FROM employee 
INNER JOIN department on employee.id = department.id
INNER JOIN role on department.id = role.id

-- view Employee by Department(Department and Employee Inner Join)

SELECT department.id ,department.name,employee.first_name, employee.last_name
FROM department 
INNER JOIN employee on department.id = employee.id