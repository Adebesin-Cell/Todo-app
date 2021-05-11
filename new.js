"use strict";

//Selecting the elements
const form = document.querySelector(".form");
const todoContainer = document.querySelector(".todo__list");
const todoInput = document.querySelector(".input");
const lightSwitch = document.getElementById("light");
const darkSwitch = document.getElementById("dark");
const header = document.querySelector(".header-bg");
const body = document.querySelector("body");

//Storage for the to do item;
const todoList = [];

//function gets data,

const getData = function () {
  let inputData = todoInput.value.trim();
  return inputData;
};

const validateData = function () {
  const todo = {
    //the todo descriptioon gotten from get data function
    description: getData(),
    //used to differentiate each todo item from the other
    id: Date.now(),
    //manages the state of the todo item
    isChecked: false,
  };
  if (todo.description !== "") {
    return todoList.push(todo);
  }
};

const createUI = function () {
  //creates html content and return them
  todoContainer.textContent = "";

  //loops throught the todolist and creates a UI on each function call, generates list item for the length of the todolist
  for (let i = 0; i < todoList.length; i++) {
    //
    todoContainer.innerHTML += `
              <li class="todo__item" id=${todoList[i].id}>
                <input type="checkbox" id="checkbox" class="checkbox" hidden/>
                <label for="checkbox" class="checkbox__label">
                  <div class="icon-box">
                    
                  </div>
                </label>

                <p class="todo__description">${todoList[i].description}</p>
                <div class="delete-box" id="delete">
                  <svg
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
                  </svg>
                </div>
              </li>`;
  }
  return todoContainer;
};

//function call that calls other function
const todoApp = function (e) {
  //prevents form submitting
  e.preventDefault();
  //validate data
  validateData();

  //build UI
  createUI();
  //delete function
  del();

  //Restore input value to empty string
  todoInput.value = "";
  for (let i = 0; i < todoList.length; i++) {}
  const del = function () {
    for (let i = 0; i < todoList.length; i++) {
      const deleteBox = document.getElementById(`${todoList[i]}`);
      deleteBox.addEventListener("click", function () {
        this.remove();
      });
    }
  };
};

//Event listener for the form submit

form.addEventListener("submit", todoApp);

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
};

//initializes the theme switcher on load of the page
themeSwicther();

//actions based on state of the applications
