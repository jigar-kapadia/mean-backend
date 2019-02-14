const employeeModel = require('../models/employee');

var GetEmployees = function(req,res,next){
    let employeeList = [];

    employeeModel.find({},function(err,employees){
        if(err)
        {
            next(err);
        }
        else
        {
            res.json({status:"success", message: "Employee list found!!!", data:employees});
        }

        //res.json({status:"success", message: "Test list found!!!", data: null});
    })
}

var GetEmployeeById = function(req,res,next){
    
    employeeModel.findById(req.params.id,function(err,employee){
        if(err)
        {
            next(err)
        }
        else
        {
            res.json({status:"success", message: "Employee found!!!", data:employee});
        }
    })

}

var CreateEmployee = function(req,res,next){
    console.log(req.body)

    employeeModel.create(req.body,function(err,employee){
        
        if(err)
            next(err);
        else
        res.json({status:"success", message: "Employee Created!!!", data:null});
    })
    
}

var UpdateEmployee = function(req,res,next){
    
    console.log(req.params.id)
    //console.log(req.body)
    res.json({status:"success", message: "Employee UPdated!!!", data:null});
    // employeeModel.findByIdAndUpdate(req.params.id,req.body,function(err,employee){
    //     if(err)
    //         next(err);
    //     else
    //     res.json({status:"success", message: "Employee Updated!!!", data:null});
    // })
}

var DeleteEmployee = function(req,res,next){
    employeeModel.findByIdAndDelete(req.params.id,req.body,function(err,employee){
        if(err)
            next(err);
        else
        res.json({status:"success", message: "Employee Deleted!!!", data:null});
    })
}


module.exports = {
    GetEmployees,
    GetEmployeeById,
    CreateEmployee,
    UpdateEmployee,
    DeleteEmployee
}