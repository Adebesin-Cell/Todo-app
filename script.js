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

let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  console.log(todoItems);
}
