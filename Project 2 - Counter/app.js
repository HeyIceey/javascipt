// set initial value to zero
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("increase-by-ten")) {
      count += 10; // Increasing by 10 ;)
    } else if (styles.contains("decrease-by-ten")) {
      count -= 10; // Decreasing by 10 ;)
    } else {
      count = 0;
    }
    updateDisplay();
  });
});

// Random Button
const btnRandomChange = document.querySelector(".random-change");
btnRandomChange.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * 10);
  const randomArray = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5];
  const randomChange = randomArray[randomIndex];
  count += randomChange;
  updateDisplay();
});

function updateDisplay() {
  if (count > 0) {
    value.style.color = "green";
  } else if (count < 0) {
    value.style.color = "red";
  } else {
    value.style.color = "#222";
  }

  value.textContent = count;
}
