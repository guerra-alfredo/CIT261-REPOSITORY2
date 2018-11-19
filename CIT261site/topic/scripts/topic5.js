var person = [];
var person2 = [];
var fn,ag,ge,sp;


//Constructor, this allow to create many objects.
function NewHobby(fname,age,gender,sport){
    this.firstName = fname;
    this.age = age;
    this.gender = gender;
    this.sport = sport;
}


function saveSport(){
    fn = document.getElementById("fname").value;
    ag = parseInt(document.getElementById("age").value);
    ge = document.getElementById("gender").value;
    //sp = document.getElementById("cycling").value;

    var x = document.getElementById("sport").selectedIndex;
    var y = document.getElementById("sport").options;

    //This allows to get the text of the option. 
    sp = y[x].text;

    //Creating Object with the keyword new.
    var objSport = new NewHobby(fn,ag,ge,sp);

    person.push(objSport);
    //I convert the entire array into string to use it in the local storage. 
    var personArray = JSON.stringify(person);

    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store the array.
        localStorage.setItem("personHobby",personArray);
        // Retrieve
        //document.getElementById("result").innerHTML = localStorage.getItem("personHobby");
        var arrayStored = localStorage.getItem("personHobby");
        //I convert the string into an array to use with JS.
        var objStored = JSON.parse(arrayStored);
        displayListPerson(objStored);
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
}


function displayListPerson(ps){
    var txt = "";
    var x;

    //$("#myList").remove();

    //allows to remove all child items to clear the element before to show the data. 
    removeChildItems();

    //read each object inside of Array.
    for (i=0; i < ps.length;i++){
        var alu = ps[i];
        //read each atribute of an object one by one. 
        for (x in alu) {
                var node = document.createElement("LI");
                var textnode = document.createTextNode("Name: "+alu.firstName+"  -   Favorite Sport: "+alu.sport);
                node.appendChild(textnode);
                document.getElementById("myList").appendChild(node);



               break;
         }
    }
}


//remove child items. 
function removeChildItems() {
        var list = document.getElementById("myList");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
}

function deleteStorageItems(){
     // Check browser support 
    if (typeof(Storage) !== "undefined") {
        localStorage.removeItem("personHobby");
        
        //remove child items. 
        var list = document.getElementById("myList");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
        alert("The stored data was deleted!");
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
}

///////////////////////////////////////////////////SESSION STORAGE///////////////////////////////////////////////

  function saveSport2(){
    fn = document.getElementById("fname2").value;
    ag = parseInt(document.getElementById("age2").value);
    ge = document.getElementById("gender2").value;


    var x = document.getElementById("sport2").selectedIndex;
    var y = document.getElementById("sport2").options;

    sp = y[x].text;

    //Creating Object with the keyword new.
    var objSport = new NewHobby(fn,ag,ge,sp);

    person2.push(objSport);
    var personArray = JSON.stringify(person2);

    // Check browser support
    if (typeof(Storage) !== "undefined") {
        // Store
        sessionStorage.setItem("personHobby2",personArray);
        // Retrieve
        //document.getElementById("result").innerHTML = localStorage.getItem("personHobby");
        var arrayStored = sessionStorage.getItem("personHobby2");
        var objStored = JSON.parse(arrayStored);
        displayListPerson2(objStored);
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }
}


function displayListPerson2(ps){
    var txt = "";
    var x;

    //$("#myList").remove();

    //allows to remove all child items. 
    removeChildItems2();

    //read each object inside of Array.
    for (i=0; i < ps.length;i++){
        var alu = ps[i];
        //read each atribute of an object one by one. 
        for (x in alu) {
                var node = document.createElement("LI");
                var textnode = document.createTextNode("Name: "+alu.firstName+"  -   Favorite Sport: "+alu.sport);
                node.appendChild(textnode);
                document.getElementById("myList2").appendChild(node);



               break;
         }
    }
}



//remove child items. 
function removeChildItems2() {
        var list = document.getElementById("myList2");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
}
                    
                    
                    