// let body = document.getElementsByTagName("body");
// let button = document.getElementById("button");
// let header = document.querySelector(".header-bg");
// let checkbox = document.querySelector(".check-box");
// const myList = document.querySelector(".todo__list");
// let list = document.querySelectorAll(".todo__item");
// let deleteIcon = document.querySelectorAll(".delete-box");
// const form = document.querySelector(".form");

// let itemLeft = document.querySelector(".item__left-value");
// let value = 0;

// const todoList = [];
// const userInput = document.querySelector(".input");

// const addItem = (e) => {
//   const todo = {
//     item: userInput.value,
//     id: Date.now(),
//     isChecked: false,
//   };
//   if (e.which === 13) {
//     if (userInput.value.trim() !== "") {
//       value++;
//       todoList.push(todo);
//       console.log(todoList);
//     }
//   }
//   injectUI();
// };
// const injectUI = () => {
//   myList.innerHTML = "";
//   for (let i = 0; i < todoList.length; i++) {
//     // debugger;
//     myList.innerHTML = `<li class="todo__item" >
//                 <div class="icon-box">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     class="check"
//                     id="check"
//                     width="11"
//                     height="9"
//                   >
//                     <path
//                       fill="none"
//                       stroke="#FFF"
//                       stroke-width="2"
//                       d="M1 4.304L3.696 7l6-6"
//                     />
//                   </svg>
//                 </div>
//                 <p class="todo__description">
//                   ${todoList[i].item}
//                 </p>
//                 <div class="delete-box">
//                   <svg
//                     id="delete"
//                     class="delete"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                   >
//                     <path
//                       fill="#494C6B"
//                       fill-rule="evenodd"
//                       d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
//                     />
//                   </svg>
//                 </div>
//     </li>`;
//     itemLeft.textContent = value;
//     console.log(myList);
//   }
// };
// form.addEventListener("submit", addItem);

// // list.forEach((item) => {
// //   item.addEventListener("mouseenter", () => {
// //     deleteIcon.forEach((icon) => {
// //       icon.classList.add("show");
// //     });
// //   });
// // });

// // // button.addEventListener("click", () => {
// // //   header.classList.toggle("newHeader");
// // // });
// // checkbox.addEventListener("click", () => {
// //   checkbox.classList.toggle("gradient");
// // });
// // //TODO
// // /*
// // Break the task into small components
// // accepts input from user , take it from there then*/

// // //Accepting input from the user

// // let userInput = document.querySelector(".input");
// // console.log(userInput);
// // // userInput.addEventListener("keypress", () => {
// // //   console.log(34);
// // // });

// // let todoList = [];
// // function addItem(e) {}

// // button.addEventListener("click", () => {
// //   let input = userInput.value;
// //   let myList = document.createElement("li");
// //   myList = myList.setAttribute("class", "todo__item");
// //   console.log(myList);
// //   myList.textContent = input;
// // });

const todoList = [];
const userInput = document.querySelector(".input");
const form = document.querySelector(".form");
const myList = document.querySelector(".todo__list");
let itemLeft = document.querySelector(".item__left-value");
let value = 0;
const addItem = (e) => {
  e.preventDefault();
  if (userInput.value === "") return "enter a value";
  if (userInput.value.trim() !== " ") {
    const todo = {
      item: userInput.value,
      id: Date.now(),
      isChecked: false,
    };
    todoList.push(todo);
    console.log(todoList);

    displayUI();
  }
};
const displayUI = () => {
  myList.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    myList.innerHTML += `<li class="todo__item">
                <div class="icon-box" id = ${todoList[i].id}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="check"
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
                  </svg>
                </div>
                <p class="todo__description">${todoList[i].item}</p>
                <div class="delete-box">
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
  value++;
  itemLeft.textContent = value;
  userInput.value = "";
  const check = document.querySelectorAll(".icon-box");
  const paragraph = document.querySelector(".todo__description");
  check.forEach((item, i) => {
    item.addEventListener("click", function () {
      todoList[i].isChecked = true;
      if (todoList[i].isChecked === true) {
        item.classList.toggle("gradient");
        paragraph.classList.add("strike");
        value--;
        itemLeft.textContent = value;
      } else {
        todoList.isChecked = false;
        this.classList.remove("gradient");
      }

      console.log(todoList);
    });
  });
};

// const del = () => {
//   document.querySelector(".delete-box").addEventListener("click", () => {
//     todoList[i].splice();
//   });
//   displayUI();
// };

// del();
// const checked = (e) => {
//   e.preventDefault();
// };
form.addEventListener("submit", addItem);

const lightSwitch = document.getElementById("light");
const darkSwitch = document.getElementById("dark");
const header = document.querySelector(".header-bg");

lightSwitch.addEventListener("click", () => {
  header.classList.remove("new-header");
  lightSwitch.classList.remove("show");
  darkSwitch.classList.remove("hide");
});

darkSwitch.addEventListener("click", () => {
  header.classList.add("new-header");
  darkSwitch.classList.add("hide");
  lightSwitch.classList.add("show");
});
