const budget = document.getElementById("budget");
const totalValue = document.getElementById("totalValue");
const currBal = document.getElementById("currBal");
const expenseValue = document.getElementById("expense-value");

// left side form inputs
const totalAmount = document.getElementById("total-amount");
const category = document.getElementById("category");
const description = document.getElementById("description");
const currDate = document.getElementById("currDate");
let val = 0;

const budgetValues = []; // array

const printVal =()=> {
  if (budget.value === "") {
    alert("please Enter The Value");
  }
  if (budget.value < 0) {
    alert("Please Enter the Positive Value");
  }
  else {

    val = parseInt(budget.value) + parseInt(val);
    totalValue.innerText = `${val}`;
    currBal.innerText = `${val}`;
  }
  budgetValues.push(val, parseFloat(totalValue.innerText), parseFloat(currBal.innerText));
  budget.value = "";
}


const todoList = document.getElementById("todo-list"); // ul tag in html, "id" 

const expenseData = { // save obj
  category: "",
  totalAmount: ""
};

// Second Form expense
let expNum = 0;
const expense = () => {
  
  const val = currBal.innerText - expenseValue.innerText;

  const li = document.createElement("li"); // create li element
  if (!totalAmount.value || !description.value || !currDate.value || !category.value) {
    alert("please Enter All Requirementsx")
  }
  else {
    expNum = parseFloat(totalAmount.value) + parseFloat(expNum);
  expenseValue.innerText = expNum;
  currBal.innerText = budgetValues[2] - expNum;
    const text = document.createTextNode("");  // total cut off amount
    li.appendChild(text);  //appaned text to li
    todoList.appendChild(li);
  }


  expenseData.category = category.value;
  expenseData.totalAmount = totalAmount.value;

  //  Category section
  const span1 = document.createElement("span");
  span1.setAttribute("id", "Category-list");
  const category1 = document.createTextNode(expenseData.category);   //li category add
  span1.appendChild(category1);
  li.appendChild(span1);


  const span2 = document.createElement("span");
  const descripText = document.createTextNode(description.value);
  span2.setAttribute("id", "descrip-list");
  span2.appendChild(descripText);
  li.appendChild(span2);




  // add total amount into span 

  const span3 = document.createElement("span");
  span3.setAttribute("id", "amount-list");
  const total = document.createTextNode(expenseData.totalAmount);
  span3.appendChild(total);
  li.appendChild(span3);




  // create date input 
  const span4 = document.createElement("span");
  const date = document.createTextNode(currDate.value);
  span4.setAttribute("id", "date-list");
  span4.appendChild(date);
  li.appendChild(span4);


  // create a book mark icon
  const i = document.createElement("i");
  i.setAttribute("class", "fa-solid fa-arrow-up-right-from-square");
  i.setAttribute("onclick", "editVal(this)")
  i.setAttribute("id", "mark-list");
  li.appendChild(i);

  // create  x icon

  const i2 = document.createElement("i");
  i2.setAttribute("class", "fa-sharp fa-solid fa-xmark");
  i2.setAttribute("id", "cross-list");
  i2.setAttribute("onclick", "deconsteVal(this)")
  li.appendChild(i2);

  category.value = "";
  totalAmount.value = "";
}

function editVal(edit) {
  const categoryVal = prompt("Enter New Category", edit.parentNode.childNodes[1].childNodes[0].nodeValue);
  const descrip = prompt("Enter New Description", edit.parentNode.childNodes[2].childNodes[0].nodeValue)
  const amountVal = prompt("Enter New Amount", edit.parentNode.childNodes[3].childNodes[0].nodeValue);

 console.log(newAmount = parseFloat(edit.parentNode.childNodes[3].childNodes[0].nodeValue));

  // Update currBal.innerText and expenseValue.innerText
  currBal.innerText = parseFloat(currBal.innerText) + newAmount - parseFloat(amountVal);
  expenseValue.innerText = parseFloat(expenseValue.innerText) - newAmount + parseFloat(amountVal);

  // Update the expense list values
  edit.parentNode.childNodes[1].childNodes[0].nodeValue = categoryVal;
  edit.parentNode.childNodes[2].childNodes[0].nodeValue = descrip;
  edit.parentNode.childNodes[3].childNodes[0].nodeValue = amountVal;
}

function deconsteVal(deconsted) {
  deconsted.parentNode.remove();
}