function openNav() {
    document.getElementById("mySidenav").style.width = "35%";
    document.getElementById("main").style.marginLeft = "16%";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    var width = screen.width;
    if(width<1080){
      document.getElementById("main").style.marginLeft = "13.2%";
    }else{
      document.getElementById("main").style.marginLeft = "7.8%";
    }
}
