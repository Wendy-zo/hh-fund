window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 400) {
        document.getElementById("backtop").style.display = "block";
    }
    else {
        document.getElementById("backtop").style.display = "none";
    }
}