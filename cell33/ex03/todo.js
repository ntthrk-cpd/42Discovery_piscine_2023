////////todo list save data in cookie array//////////////
var cookieArray = getCookieArray("todoArray");

///After load page check cookie and load todo list from cookie.
window.onload = function() {
    loadTodo();
}

//get Array cookie
function getCookieArray(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    let i = 0;
    for (i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ')
        c = c.substring(1);
        if (c.indexOf(name) == 0)
        return c.substring(name.length, c.length);
    }
    return "";
}

//set cookie
function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*1000*60*60*24));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//set Array cookie
function setCookieArray(cname, cvalue) {
    let todoArray = getCookieArray(cname);
    if (todoArray != "") {
        todoArray = todoArray.split(",");
        todoArray.push(cvalue);
        todoArray = todoArray.join(",");
        setCookie("todoArray", todoArray, 1);
    } else {
        setCookie("todoArray", cvalue, 1);
    }
}

//load todo from array cookie
function loadTodo() {
    if (cookieArray != "") {
        cookieArray = cookieArray.split(",");
        let i = 0;
        for (i = 0; i < cookieArray.length; i++) {
            createLiFromCookie(cookieArray[i]);
        }
    }
}

//create li from cookie
function createLiFromCookie(cookie) {
    let li = document.createElement("li");
    let t = document.createTextNode(cookie);
    li.appendChild(t);
    document.getElementById("myList").appendChild(li);

    addCloseButton();
}

//create li from input
function createLiFromInput() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);

    //check input
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myList").appendChild(li);
        setCookieArray("todoArray", inputValue);
    }
    document.getElementById("myInput").value = "";

    addCloseButton();
}

//create checked symbol
function addCloseButton() {
    let myNodelist = document.getElementsByTagName("LI");
    let i = 0;
    for (i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
        
    }
}

//if click New button check input and create li from input and save cookie on cookieArray.
function newElement() {
    createLiFromInput();
}

//if click close button delete li from list and cookie.
document.addEventListener('click', function(event) {
    if (event.target.className == 'close') {
        deleteTodo();
    }
}, false);


//delete tobo cookie and remove li from list.
function deleteTodo() {
    //deleted word of li from cookie
    let li = event.target.parentElement;
    let todo = li.textContent;
    let todoArray = getCookieArray("todoArray");
    todoArray = todoArray.split(",");
    let i = 0;
    for (i = 0; i < todoArray.length; i++) {
        if (todoArray[i] == todo) {
            todoArray.splice(i, 1);
        }
    }
    todoArray = todoArray.join(",");
    setCookie("todoArray", todoArray, 1);
    
    //remove li from list
    li.remove();
}


