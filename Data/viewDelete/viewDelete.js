const deleteEmployee ={
    message:"SELECT FROM BELOW TO DELETE EMPLOYEE ?",
    type:"rawlist",
    name:"viewDeleteChoices",
    choices:[
        "---------REMOVE FROM ROLE-------------",
        "---------REMOVE BY MANAGER----------",
        "---------REMOVE FROM DEPARTMENT-------------"
       
    ]
}

module.exports=deleteEmployee;