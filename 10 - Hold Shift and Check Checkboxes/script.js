const checkboxes = document.querySelectorAll(".item input[type=checkbox]");
checkboxes.forEach(box => box.addEventListener("click", handleCheck));
let lastChecked;

function handleCheck(event) {
  if (event.target.checked && event.shiftKey) {
    let inBeetwen = false;
    if (lastChecked) {
      checkboxes.forEach(box => {
        if (box === lastChecked || box === this) inBeetwen = !inBeetwen;
        if (inBeetwen) box.checked = true;
      });
    }
  }

  lastChecked = this;
}
