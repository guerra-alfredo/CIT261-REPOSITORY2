
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


// Check browser support
    if (typeof(Storage) !== "undefined") {
        var arrayStored = localStorage.getItem("personHobby");
        var objStored = JSON.parse(arrayStored);
        if(objStored != null){
            displayListPerson(objStored);
        }
    } else {
        alert("Sorry, your browser does not support Web Storage...");
    }



function displayListPerson(ps){


    var txt = "";
    var x;

    //$("#myList").remove();

    //allows to remove all child items. 
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



/////////////////////////////////////////  SESSION STORAGE ////////////////////////////////////////



        // Check browser support
    if (typeof(Storage) !== "undefined") {
        var arrayStored = sessionStorage.getItem("personHobby2");
        var objStored = JSON.parse(arrayStored);
        if(objStored != null){
            displayListPerson2(objStored);
        }
    } else {
        alert("Sorry, your browser does not support Web Storage...");
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
                    
                      
                    