
use employees;

INSERT INTO department(name)
VALUES ('Science And Technology'),('Humanities'),('Human Resource');

INSERT INTO role(title, salary, department_id)
VALUES('Elctronics Engineer', 40000, 1),('computer Engineer', 35000, 1),
('Social Activist', 30000, 2),('Journalist', 25000, 2),
('Accountant', 2000, 3),('Receiptionist', 15000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('Pradeep', 'Marasini', 1, 1),("Tim","cook",1,NULL),
("Admand","Hilary",2,2),("Mike","Tyson",2,NULL),
("Michale","Jackson",3,3),("Jeniffer","Lopez",3,NULL);