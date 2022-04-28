const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const pendingTask = document.querySelector(".pendingTask");
const clearAll = document.querySelector(".footer button");
let inputBoxEdit;
let isEdit = null;
inputBox.onkeyup = () => {
  let userEnterValue = inputBox.value;
  if (userEnterValue.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
};

showTask();

addBtn.onclick = () => {
  let userEnterValue = inputBox.value;
  console.log("user", userEnterValue);
  if (userEnterValue != "") {
    let getLocalStorage = localStorage.getItem("Newtodo");
    if (!getLocalStorage) {
      listArray = [];
    } else {
      //chuyen ve 1 object
      listArray = JSON.parse(getLocalStorage);
    }
    listArray.push({
      name: userEnterValue,
      isCompleted: false,
    });
    localStorage.setItem("Newtodo", JSON.stringify(listArray));
    console.log(userEnterValue);
    showTask();
  } 
};

function showTask() {
  let getLocalStorage = localStorage.getItem("Newtodo");
  if (!getLocalStorage) {
    listArray = [];
  } else {
    //chuyen ve 1 object
    listArray = JSON.parse(getLocalStorage);
  }
  let newTask = "";
  listArray.forEach((item, index) => {
    // <input type="text" name="task1" id="task${index}" value="${item.name}" onblur= "editTask(${index})" style="border: 0px solid #f2f2f2; color: black; background:#f2f2f2 " />
    if (index === isEdit) {
      if (item.isCompleted == false) {
        newTask += `<li> 
            <input id="${index}" type="checkbox" onclick="checkIsCompleted(${index})">
            <label for="${index}" class="todo-checkbox"></label>
            <input id=task${index} onchange="getValueInput(${index})" type="text" />
             <span class="icon" onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></span></li>`;
      } else {
        newTask += `<li> 
            <input id="${index}" type="checkbox" onclick="checkIsCompleted(${index})" checked="checked">
            <label for="${index}" class="todo-checkbox"></label>
            <input id=task${index} onchange="getValueInput(${index})" type="text" />
             <span class="icon" onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></span></li>`;
      }
    } else {
      if (item.isCompleted == false) {
        newTask += `<li> 
            <input id="${index}" type="checkbox" onclick="checkIsCompleted(${index})">
            <label for="${index}" class="todo-checkbox"></label>
            <span ondblclick="editItem(${index})" > ${item.name}</span>
             <span class="icon" onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></span></li>`;
      } else {
        newTask += `<li> 
            <input id="${index}" type="checkbox" onclick="checkIsCompleted(${index})" checked="checked">
            <label for="${index}" class="todo-checkbox"></label>
            <span ondblclick="editItem(${index})" > ${item.name}</span>
             <span class="icon" onclick="deleteTask(${index})"><i class="fa-solid fa-trash"></i></span></li>`;
      }
    }
  });
  todoList.innerHTML = newTask;
  inputBox.value = "";
  pendingTask.textContent = listArray.length;
}

function editItem(index) {
  isEdit = index;
  showTask();
}
function getValueInput(index) {
  let variable1 = "task" + `${index}`;
  var x = document.getElementById(variable1);
  listArray[index].name = x.value;
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  isEdit = null;
  showTask();
}

function checkIsCompleted(index) {
  listArray[index].isCompleted = !listArray[index].isCompleted;
  console.log("newCompleted", !listArray[index].isCompleted);
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
}

function deleteAll() {
  listArray = [];
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
}
clearAll.onclick = deleteAll;

function deleteTask(index) {
  listArray.splice(index, 1);
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
}
