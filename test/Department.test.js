const Department = require("../Model/Department")

test("Can instantiate Employee instance", () => {
    const e = new Department();
    expect(typeof(e)).toBe("object");
  });
  
  test("Can set department name via constructor arguments", () => {
    const name = "Electronics";
    const e = new Department(name);
    expect(e.name).toBe(name);
  });
  
  
  test("Can get department via getname()", () => {
    const testValue = "Pradeep";
    const e = new Department(testValue);
    expect(e.getname()).toBe(testValue);
  });
  
  
  