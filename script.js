const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target.id)));

function doTheTrick(clickedID) {
  if(good.checked && cheap.checked && fast.checked) {
    if(good.id === clickedID) {
      fast.checked = false;
    }

    if(cheap.id === clickedID) {
      good.checked = false;
    }

    if(fast.id === clickedID) {
      cheap.checked = false;
    }
  }
}