document.addEventListener("DOMContentLoaded", () => {
  let depth = window.location.pathname.split("/").length - 2;
  let prefix = "../".repeat(depth);
  let navbarPath = prefix + "components/navbar.html";

  fetch(navbarPath)
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    })
    .catch(err => console.error("Navbar load error:", err));
});
