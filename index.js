const input = document.querySelector("input");
const container = document.querySelector(".container");
function addTask() {
  if (input.value === "") {
    alert("Please enter the task name!");
  } else {
    const Li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const edit = document.createElement("button");
    const dateAdd = document.createElement("span");
    span.classList.add("task-text");
    dateAdd.innerHTML = new Date().toLocaleString().replace(",", "");

    dateAdd.classList.add("timestamp");
    edit.classList.add("edit");
    edit.innerHTML = "&#x270E;";
    button.classList.add("delete");
    button.innerHTML = "&times";
    span.innerHTML = input.value;
    Li.appendChild(span);
    Li.appendChild(dateAdd);
    Li.appendChild(edit);
    Li.appendChild(button);
    document.querySelector("ul").appendChild(Li);
    input.value = "";

    edit.addEventListener("click", (e) => {
      const oldTask = e.target.parentNode.querySelector("span").textContent;
      const newInput = document.createElement("input");
      newInput.type = "text";
      newInput.value = oldTask;
      e.target.parentNode.querySelector("span").textContent = "";
      e.target.parentNode.appendChild(newInput);
      newInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const newValue = newInput.value;
          e.target.parentNode.querySelector("span").textContent = newValue;
          e.target.parentNode.removeChild(newInput);
        }
      });
    });
  }
}

container.addEventListener(
  "click",
  function (e) {
    if (e.target.className === "task-text") {
      e.target.classList.toggle("completed");
    }
  },
  false
);
container.addEventListener(
  "click",
  function (e) {
    if (e.target.className == "delete") {
      e.target.parentNode.remove();
    }
  },
  false
);
function showCompleted(e) {
  setActiveButton(e.target);
  const lis = document.querySelectorAll("li");
  lis.forEach((li) => {
    const span = li.querySelector("span");
    if (span.classList.contains("completed")) {
      li.style.display = "flex";
    } else {
      li.style.display = "none";
    }
  });
}
function showAll(e) {
  setActiveButton(e.target);
  const lis = document.querySelectorAll("li");
  lis.forEach((li) => {
    li.style.display = "flex";
  });
}
function showPending(e) {
  setActiveButton(e.target);
  const lis = document.querySelectorAll("li");
  lis.forEach((li) => {
    const span = li.querySelector("span");
    if (span.classList.contains("completed")) {
      li.style.display = "none";
    } else {
      li.style.display = "flex";
    }
  });
}
function setActiveButton(clickedButton) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  clickedButton.classList.add("active");
}
