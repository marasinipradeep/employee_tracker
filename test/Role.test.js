const Role = require("../Model/Role")

test("Can instantiate Role instance", () => {
    const e = new Role();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set title via constructor arguments", () => {
    const title = "Engineer";
    const e = new Role(title);
    expect(e.title).toBe(title);
  });

  test("Can set salary via constructor arguments", () => {
    const salary = 5000;
    const e = new Role("Engineer",salary);
    expect(e.salary).toBe(salary);
  });

  test("Can set department id via constructor arguments", () => {
    const department_id = 5;
    const e = new Role("Engineer",5000, department_id);
    expect(e.department_id).toBe(department_id);
  });
  
  
  
  test("Can get get title via gettitle()", () => {
    const testValue = "Engineer";
    const e = new Role(testValue);
    expect(e.gettitle()).toBe(testValue);
  });
  
  test("Can get salary via getsalary()", () => {
    const testValue = 5000;
    const e = new Role("Engineer", testValue);
    expect(e.getsalary()).toBe(testValue);
  });

  test("Can get department_id via getdepartment_id()", () => {
    const testValue = 5;
    const e = new Role("Pradeep",5000, testValue);
    expect(e.getdepartment_id()).toBe(testValue);
  });

  