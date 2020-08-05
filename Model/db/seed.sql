
use employees;

INSERT INTO department(name)
VALUES ('Engineering');

INSERT INTO role(title, salary, department_id)
VALUES('Elctronics Engineer', 40000, 1),('computer Engineer', 30000, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES('Pradeep', 'Marasini', 1, NULL),("Tim","cook",1,1),("Apekchya","Bans",2,1);