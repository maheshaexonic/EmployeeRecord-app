var selectedRow = null;

function onFormSubmit(){
    var empData = addData();
    if(selectedRow == null)
        insertData(empData);
    else
        updateData(empData);
    resetForm();
}

function addData(){     /*Get data from view and store in object */
    var empData = {};
    empData["ename"] = document.getElementById("ename").value;
    empData["empid"] = document.getElementById("empid").value;
    empData["desig"] = document.getElementById("desig").value;
    empData["salary"] = document.getElementById("salary").value;
    empData["city"] = document.getElementById("city").value;
    return empData;
}

function insertData(data){  /*collect from object and put in table form*/
    var table = document.getElementById("empdetails").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ename;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empid;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.desig;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.salary;
    cell5 = newRow.insertCell(4); 
    cell5.innerHTML = data.city;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `&nbsp;&nbsp;<a class='far fa-edit' onClick ="onUpdate(this)" title="Edit"></a>&nbsp;&nbsp;&nbsp;&nbsp
                        <a class="fa fa-trash" onClick ="onDelete(this)" title="Delete"></a>`
}

function resetForm(){ /*clear the form*/
    document.getElementById("ename").value = "";
    document.getElementById("empid").value = "";
    document.getElementById("desig").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onUpdate(td){  /*select data which we inserted and put back in form*/
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ename").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("desig").value = selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
}

function updateData(empData){
    selectedRow.cells[0].innerHTML = empData.ename;
    selectedRow.cells[1].innerHTML = empData.empid;
    selectedRow.cells[2].innerHTML = empData.desig;
    selectedRow.cells[3].innerHTML = empData.salary;
    selectedRow.cells[4].innerHTML = empData.city;
}

function onDelete(td){
    if(confirm('Conform again')){
        row = td.parentElement.parentElement;
        document.getElementById("empdetails").deleteRow(row.rowIndex);
        resetForm();
    }

}

function onCopy() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }

  