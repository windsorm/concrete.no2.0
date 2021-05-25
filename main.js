function mobileMenuToggle() {
    var x = document.getElementById("topNavToggle");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }