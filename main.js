let btnDark = document.getElementById("darkModeBtn");
let btnLight = document.getElementById("lightMode");

check();

btnDark.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  localStorage.currentTheme = "dark";

  btnDark.classList.add("hidden");
  btnLight.classList.remove("hidden");

  //   localStorage.removeItem("theme");
});

btnLight.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");

  localStorage.currentTheme = "light";

  btnLight.classList.add("hidden");
  btnDark.classList.remove("hidden");

  // localStorage.removeItem("theme");
});

function check() {
  //   document.documentElement.classList.toggle(
  //     "dark",
  //     localStorage.currentTheme === "dark" ||
  //       (!("theme" in localStorage) &&
  //         window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   );

  if (
    localStorage.currentTheme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    btnDark.classList.add("hidden");
    btnLight.classList.remove("hidden");
  }
}
