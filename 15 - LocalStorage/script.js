const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

itemsList.addEventListener("click", toggleCheck);

addItems.addEventListener("submit", addNewItem);

function addNewItem(e) {
  e.preventDefault();
  const text = addItems.querySelector("[name=item]").value;
  const item = {
    done: false,
    text
  };
  items.push(item);
  addItems.reset();
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function populateList(list = [], node) {
  node.innerHTML = list
    .map((item, index) => {
      return `<li>
        <input type="checkbox"  data-index="${index}" id="item${index}" ${
        item.done ? "checked" : ""
      } >
        <label for="item${index}">${item.text}</label>
      </li>`;
    })
    .join("");
}

function toggleCheck(e) {
  if (e.target.tagName !== "INPUT") return;
  const index = e.target.dataset.index;

  console.log(index);
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
}

populateList(items, itemsList);
