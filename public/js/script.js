let header = document.getElementById("header");

if (header !== null) {
  header.addEventListener("mouseover", function () {
    header.innerHTML = "Hello My bro";
  });
}
else{
    console.log("That element doesn't exist");
}