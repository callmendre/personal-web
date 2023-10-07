let about_main = document.getElementById("about");
let kirim = document.getElementById("kirim");

about_main.addEventListener("mouseleave", function () {
  about_main.style.transition = "0.4s";
});

kirim.addEventListener("click", function () {
  alert("Fitur ini dalam pengerjaan, sabar ya :)");
});
