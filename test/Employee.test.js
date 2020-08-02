const Employee = require("../Model/Employee")

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set first_name via constructor arguments", () => {
    const first_name = "Pradeep";
    const e = new Employee(first_name);
    expect(e.first_name).toBe(first_name);
  });

  test("Can set last_name via constructor arguments", () => {
    const last_name = "Marasini";
    const e = new Employee("Pradeep",last_name);
    expect(e.last_name).toBe(last_name);
  });
  
  test("Can set role_id via constructor argument", () => {
    const role_id = 100;
    const e = new Employee("Pradeep","Marasini", role_id);
    expect(e.role_id).toBe(role_id);
  });

  test("Can set manager_id via constructor argument", () => {
    const manager_id = 5;
    const e = new Employee("Pradeep","Marasini", 10,manager_id);
    expect(e.manager_id).toBe(manager_id);
  });
  
  
  
  test("Can get first_name via getfirst_name()", () => {
    const testValue = "Pradeep";
    const e = new Employee(testValue);
    expect(e.getfirst_name()).toBe(testValue);
  });
  
  test("Can get last_name via getlast_name()", () => {
    const testValue = "Marasini";
    const e = new Employee("Pradeep", testValue);
    expect(e.getlast_name()).toBe(testValue);
  });

  test("Can get role_id via getrole_id()", () => {
    const testValue = 5;
    const e = new Employee("Pradeep","Marasini", testValue);
    expect(e.getrole_id()).toBe(testValue);
  });

  test("Can get manager_id via getmanager_id()", () => {
    const testValue = 8;
    const e = new Employee("Pradeep","Marasini",5, testValue);
    expect(e.getmanager_id()).toBe(testValue);
  });
  
  