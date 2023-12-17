var container = document.createElement("div");
container.className="container";


var row = document.createElement("div");
row.className="row";


var column = document.createElement("div");
column.className="col";

//parent to child
row.append(column);
container.append(row);
document.body.append(container);

function foo() {
    var ult= document.getElementById("email").value;
    console.log(ult);

}

function foo1(){
    var fName= document.getElementById("fName").value;
    console.log(fName);

    var middleName= document.getElementById("middleName").value;
    console.log(middleName);

    var lName= document.getElementById("lName").value;
    console.log(lName);

    var email= document.getElementById("email").value;
    console.log(email);

}