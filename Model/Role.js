class Role{
    constructor(title,salary,department_id){
        this.title=title,
        this.salary=salary,
        this.department_id=department_id
    }

    gettitle(){
        return this.title;
    }
    getsalary(){
        return this.salary
    }

    getdepartment_id(){
        return this.department_id
    }
}

module.exports = Role;