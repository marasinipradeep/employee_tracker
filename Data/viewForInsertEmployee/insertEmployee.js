const insertEmployee ={
    message:"SELECT FROM BELOW TO INSERT FROM ?",
    type:"rawlist",
    name:"insertEmployeeChoices",
    choices:[
        "---------ADD DEPARTMENT-------------",
        "---------ADD ROLE-----------",
        "---------ADD EMPLOYEE-----------",
        "---------EXIT--------------"
    ]
}

module.exports=insertEmployee;