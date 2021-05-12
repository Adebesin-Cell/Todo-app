"use strict";

//selecting elements
const form = document.querySelector(".form");
const todoContainer = document.querySelector(".todo__list");
// const todos = document.querySelector(".todo__item");
const todoInput = document.querySelector(".input");
const lightSwitch = document.getElementById("light");
const darkSwitch = document.getElementById("dark");
const header = document.querySelector(".header-bg");
const body = document.querySelector("body");
const itemLeft = document.querySelector(".item__left-value");

//state variables

let count = 0;
//functions

function addTodo() {
  //preventing form submittion

  const todoItem = document.createElement("li");
  todoItem.classList.add("todo__item");
  const checkbox = document.createElement("div");
  checkbox.classList.add("icon-box");
  checkbox.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        class="check hide"
        id="check"
        width="11"
        height="9"
      >
        <path
          fill="none"
          stroke="#FFF"
          stroke-width="2"
          d="M1 4.304L3.696 7l6-6"
        />
      </svg>`;
  const paragraph = document.createElement("p");
  paragraph.classList.add("todo__description");
  paragraph.innerText = todoInput.value.trim();
  const deleteBox = document.createElement("div");
  deleteBox.classList.add("delete-box");
  deleteBox.innerHTML = `<svg
      id="delete"
      class="delete"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
    >
      <path
        fill="#494C6B"
        fill-rule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg>`;

  todoItem.appendChild(checkbox);
  todoItem.appendChild(paragraph);
  todoItem.appendChild(deleteBox);
  todoContainer.appendChild(todoItem);

  todoInput.value = "";
}

function todoApp(e) {
  e.preventDefault();
  addTodo();
  count++;
  itemLeft.textContent = count;
}
function deleteCheck(e) {
  const check = document.querySelector(".icon-box");
  const checkmark = document.querySelector(".check");
  const p = document.querySelector(".todo__description");
  const item = e.target;

  //delete todo
  if (item.classList[0] === "delete-box") {
    const todos = item.parentElement;
    count--;
    itemLeft.textContent = count;
    todos.remove();
  }

  if (item.classList[0] === "icon-box") {
    check.classList.toggle("gradient");
    p.classList.toggle("strike");
    checkmark.classList.toggle("hide");
  }
}
//event listeners

form.addEventListener("submit", todoApp);
todoContainer.addEventListener("click", deleteCheck);
//storage
const todoList = [];

//THEME SWITCHER

const themeSwicther = function () {
  lightSwitch.addEventListener("click", () => {
    header.classList.remove("new-header");
    lightSwitch.classList.remove("show");
    darkSwitch.classList.remove("hide");
    body.classList.remove("dark-theme");
  });

  darkSwitch.addEventListener("click", () => {
    header.classList.add("new-header");
    darkSwitch.classList.add("hide");
    lightSwitch.classList.add("show");
    body.classList.add("dark-theme");
  });
  localStorage.setItem("theme", themeSwicther);
};

//initializes the theme switcher on load of the page
themeSwicther();
