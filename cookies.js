function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(){
    document.cookie = "cookiename= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"

}

function checkCookie() {
    var user = getCookie("username");
    if (user !== "") {
        alert("Welcome back! " + user);
    }
    else {
        user = prompt("Please enter your name in the field:", "");
        if (user !== "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}