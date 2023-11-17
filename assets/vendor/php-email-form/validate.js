const body = document.querySelector("body");

const query = parseInt(
  prompt("Mennyit kapsz ha a hatot megszorzod kilencszer?")
);
const auth = function () {
  if (query === 54) {
    body.classList.toggle("hidden");
  }
};
auth();
