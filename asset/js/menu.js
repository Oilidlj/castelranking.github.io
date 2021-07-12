function myFunction() {
    var x = document.getElementById("lop");
    if (x.className === "navigateur") {
        x.className += " responsive";
    } else {
        x.className = "navigateur";
    }
}