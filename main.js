
//we create a list of employees
let employees = [];

//Crate a constructor of Employee
function Employee(name, lastname, birth, position ){
    this.name = name;
    this.lastname = lastname;
    this.birth = birth;
    this.position = position;   
}

//In this function we receive the values of form.
function addEmployee(){
    //I receive the values in the variables and then pass to create the instance with this values.
    let name = document.getElementById('txtName').value;
    let lastname = document.getElementById('txtLastname').value;
    let birth = document.getElementById('txtBirth').value;
    let position = document.getElementById('txtPosition').value;

    //Instanciating the new employee
    let employee = new Employee(name, lastname, birth, position);
    //then we add the new employee created to the list employees
    employees.push(employee);
    alert("The employee was added");

    cleanFields();
}

function showEmployee(){
    let list = '';
        for(employee of employees){
            for(let prop in employee){
                list = list + prop.toUpperCase() + ":" + employee[prop] + ",";
            }    
            list = list + "\n";
        }   
        alert(list);
}

function cleanFields(){
    document.getElementById('txtName').value = " ";
    document.getElementById('txtLastname').value = " ";
    document.getElementById('txtBirth').value = "";
    document.getElementById('txtPosition').value = "";

}