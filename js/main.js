//Mobile menu open and close
function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
	document.getElementById("html").classList.toggle("_overflow");
}

// Time
window.onload = function() {
    window.setInterval(function(){
        var date = new Date();


        var years = date.getFullYear();
        

        var clock = years;

        document.getElementById("year-clock").innerHTML = clock; 
    }
    );
}