function validity() {
  const form = document.querySelector("form");

  form.elements["email"].addEventListener("input", () => {
    console.log("meow");
  });
  form.elements["country"].addEventListener("input", () => {
    console.log("meow");
  });
  form.elements["pin"].addEventListener("input", () => {
    console.log("meow");
  });
  form.elements["pwd"].addEventListener("input", () => {
    console.log("meow");
  });
  form.elements["pwdconfirm"].addEventListener("input", () => {
    console.log("meow");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("meow");
  });
}

export default validity;
