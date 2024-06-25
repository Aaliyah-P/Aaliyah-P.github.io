var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");



function opentab(tabname){
   for(tablink of tablinks){
    tablink.classList.remove("active-link");
   }
   for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab")
}

function openmenu(){
   sidemenu.style.right = "0";
}
function closemenu(){
   sidemenu.style.right = "-200px";
}

















// ---------------------------------------------------Event listener for theme toggle -----------------------------------------
localStorage.getItem("theme");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const toggle = document.querySelector("[data-theme-toggle]");

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

toggle.addEventListener("click", () => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  const newCta = newTheme === "dark" ? "Change to light theme" : "change to dark theme";
  toggle.setAttribute("aria-label", newCta);

  // update theme attribute on HTML to switch theme in CSS
  document.querySelector("html").setAttribute("data-theme", newTheme);

  // update in local storage
  localStorage.setItem("theme", newTheme);

  // update the currentThemeSetting in memory
  currentThemeSetting = newTheme;
});
