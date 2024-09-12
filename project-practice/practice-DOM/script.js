

function oddEven() {
    var List = document.getElementById("list");
    var index = document.querySelectorAll("li");
    console.log(index);
    
   for (var i = 0; i < index.length; i++) {
        console.log(index[i].style.backgroundColor = "orange");

        if (i % 2 == 1) {
            index[i].style.backgroundColor = "orange";
        } else {
            index[i].style.backgroundColor = "blue";
        }
    }
}
oddEven();

function generateList(){
    const li = document.createElement("li");
    li.classList.add("list_item");
    const name = document.createTextNode("Hi");
    const att = document.createAttribute("style");
    att.value = "color:red";
    li.setAttributeNode(att);
    li.appendChild(name);
    document.getElementById("list").appendChild(li);
}
generateList();



const parentbox = document.createElement('input'); // Create the parent checkbox
parentbox.type = 'checkbox';
parentbox.id = 'parentCheckbox';

const parentLabel = document.createElement('label');
parentLabel.textContent = ' Parent-Checkbox';
parentLabel.insertBefore(parentbox, parentLabel.firstChild);
document.body.appendChild(parentLabel); // Append the parent checkbox to the body

const childboxContainer = document.createElement('div'); // Create the container for the child checkbox
const childCheckbox = document.createElement('input'); // Create the child checkbox
childCheckbox.type = 'checkbox';
childCheckbox.id = 'childCheckbox';
childboxContainer.style.display = 'none';   //making the container display none

const childLabel = document.createElement('label');
childLabel.textContent = ' Child-Checkbox';
childLabel.insertBefore(childCheckbox, childLabel.firstChild);

childboxContainer.appendChild(childLabel); // Append the child checkbox to the container
document.body.appendChild(childboxContainer); // Append the container to the body

const grandchildboxContainer = document.createElement('div'); // Create the container for the child checkbox
const grandchildCheckbox = document.createElement('input'); // Create the child checkbox
grandchildCheckbox.type = 'checkbox';
grandchildCheckbox.id = 'childCheckbox';
grandchildboxContainer.style.display = 'none';   //making the container display none

const grandchildLabel = document.createElement('label');
grandchildLabel.textContent = ' Grand-Child-Checkbox';
grandchildLabel.insertBefore(grandchildCheckbox, grandchildLabel.firstChild);

grandchildboxContainer.appendChild(grandchildLabel); // Append the child checkbox to the container
document.body.appendChild(grandchildboxContainer); // Append the container to the body

parentCheckbox.addEventListener('change', function() {  // Add event listener to the parent checkbox
    if (parentCheckbox.checked) {
        childboxContainer.style.display = 'block';
    } else {
        childboxContainer.style.display = 'none';
    }
});
childCheckbox.addEventListener('change', function() {  // Add event listener to the parent checkbox
    if (childCheckbox.checked) {
        grandchildboxContainer.style.display = 'block';
    } else {
        grandchildboxContainer.style.display = 'none';
    }
});

const button = document.createElement("button");        //adding button to display text
button.innerHTML = "Click Me !!!";
document.body.appendChild(button);
const newdiv = document.createElement("div");
newdiv.id = 'innerText';

const text = document.createTextNode("You have clicked the button above");
document.body.appendChild(newdiv);
newdiv.style.display = 'none';
newdiv.appendChild(text);
button.addEventListener("click", function() {
    newdiv.style.display ='block';
    // // if( newdiv.style.display ==='block'){
    // //     newdiv.style.display = 'none';
    // // }
    // newdiv.toggle("show");
});

function showHtmlDiv() {
    var htmlShow = document.getElementById("html-show");
    if (htmlShow.style.display === "none") {
      htmlShow.style.display = "block";
    } else {
      htmlShow.style.display = "none";
    }
  }

//creating a table
function tableCreate() {
    var body = document.getElementsByTagName("body")[0]; //we are getting a reference of body

    //creating the elements <table> and a <tbody>
    var table = document.createElement("table");
    var tableBody = document.createElement("tbody"); //creating the body of the table
    //creating cells of the table
    for (var i = 0; i < 5; i++){
        var row = document.createElement("tr"); //creating the row
        for (var j = 0; j < 4; j++){
            var cell = document.createElement("td"); //creating the cell
            var cellText = document.createTextNode("Cell is row : " + j +", column : "+ i);
            cell.appendChild(cellText); //adding the text to the cell
            row.appendChild(cell); //adding the cell to the row
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody); //adding the body to the table
    body.appendChild(table); //adding the table to the body
    table.setAttribute("border","3");
} 
tableCreate();
//change odd rows background color
function changeOddRows() {
    var table = document.getElementsByTagName("table")[0];
    var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        if (i % 2 == 0) {
            rows[i].style.backgroundColor = "red";
        }else{
            rows[i].style.backgroundColor = "green";
        }
    }
}
changeOddRows();

//change column colors
function changeColumnColors() {
    var table = document.getElementsByTagName("table")[0];
    var columns = table.getElementsByTagName("td"); 
    for (var j = 0; j < columns.length; j++) {
        if (j % 2 == 0) {
            columns[j].style.backgroundColor = "red";
        }
        else{
            columns[j].style.backgroundColor = "pink";
        }
    }
}
changeColumnColors();

function myFunction(){
    var filter, input, table, tr,td,i,txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
        }
    }
}
myFucntion();

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected dfsjkiodoawmdio00dfkjfiokgiokvsdklnmm,niojdvdf
//klgr
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

filterSelection();
w3AddClass();
w3RemoveClass();

