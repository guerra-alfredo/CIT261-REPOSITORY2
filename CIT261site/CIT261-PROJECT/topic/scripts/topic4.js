function displayList1(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //convert the JSON object into JavaScritp Object and save it in a variable. 
            var student = JSON.parse(this.responseText);
            displayStudent1(student);
            //displayStudent3(student);
            //document.getElementById("demo").innerHTML = student.Age;
            //document.getElementById("listStu").innerHTML = student.Courses;
            //document.getElementById("listStu").innerHTML = student.Courses[0].season;
        }
    };
    xmlhttp.open("GET", "student.txt", true);
    xmlhttp.send();
}

function displayList2(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //convert the JSON object into JavaScritp Object and save it in a variable. 
            var student = JSON.parse(this.responseText);
            displayStudent2(student);
            //document.getElementById("demo").innerHTML = student.Age;
            //document.getElementById("listStu").innerHTML = student.Courses;
            //document.getElementById("listStu").innerHTML = student.Courses[0].season;
        }
    };
    xmlhttp.open("GET", "students.txt", true);
    xmlhttp.send();
}

function displayList3(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //convert the JSON object into JavaScritp Object and save it in a variable. 
            var student = JSON.parse(this.responseText);
            displayStudent3(student);
            //document.getElementById("demo").innerHTML = student.Age;
            //document.getElementById("listStu").innerHTML = student.Courses;
            //document.getElementById("listStu").innerHTML = student.Courses[0].season;
        }
    };
    xmlhttp.open("GET", "students.txt", true);
    xmlhttp.send();
}


//Function with parameters, I can call a funtion many times.  
function displayStudent1(alu){

 //var alu = JSON.parse('{ "Name":"John", "Age":31,"Gender":"Male","Courses":[{ "season":"Winter", "name":"CIT-160", "finalGrade":"A" },{ "season":"Winter", "name":"WDD-100", "finalGrade":"A"  },{ "season":"Fall", "name":"CIT-230", "finalGrade":"-A"  },{ "season":"Winter", "name":"CIT-261", "finalGrade":"Nothing yet"}]}');



    //read each object inside of Array.
    var y;
    var txt2 = "";
    var stu = "<strong>"+"Name: "+alu.Name+" -  Age:"+alu.Age+" -  Gender: "+alu.Gender+"</strong>";

    for(y in alu.Courses){
        txt2 += "Season: "+alu.Courses[y].season+" - Course: "+alu.Courses[y].name + " - Final Grade: "+alu.Courses[y].finalGrade+"<br> ";
    }
    txt2=txt2+"<br>";
    document.getElementById("listStu").innerHTML = stu+"<br><br>"+txt2+"<br>";	

}	

//Function with parameters, I can call a funtion many times.  
function displayStudent2(alu){

//var alu = JSON.parse('[{ "Name":"John", "Age":31,"Gender":"Male","Courses":[{ "season":"Winter", "name":"CIT-160", "finalGrade":"A" },{ "season":"Winter", "name":"WDD-100", "finalGrade":"A"  },{ "season":"Fall", "name":"CIT-230", "finalGrade":"-A"  },{ "season":"Winter", "name":"CIT-261", "finalGrade":"Nothing yet"}]},{ "Name":"Alfredo", "Age":34,"Gender":"Male","Courses":[{ "season":"Winter", "name":"CIT-160", "finalGrade":"B" },{ "season":"Winter", "name":"WDD-100", "finalGrade":"B"  },{ "season":"Fall", "name":"CIT-230", "finalGrade":"B"  },{ "season":"Winter", "name":"CIT-261", "finalGrade":"B"}]}]');



    //read each object inside of Array.
    var y;
    var txt = "";
    var txt2 = "";
    var txt3 = "";
    var stu = "";


    //var stu = "Name: "+alu.Name+" -  Age:"+alu.Age+" -  Gender: "+alu.Gender;
    for (i=0; i < alu.length;i++){
        for(y in alu[i].Courses){
            //var al = alu[i];
            var stu = "Name: "+alu[i].Name+" -  Age:"+alu[i].Age+" -  Gender: "+alu[i].Gender+"<br>";


             txt2 += "Season: "+alu[i].Courses[y].season+" - Course: "+alu[i].Courses[y].name + " - Final Grade: "+alu[i].Courses[y].finalGrade+"<br> ";

             //this allows to add the name of the student only one time. 
             var cant =  (alu[i].Courses.length - 1);   

             if(y == cant){
                txt3 += "<strong>"+stu+"</strong>"+"<br>"+txt2;
                txt3=txt3+"<br>";
                document.getElementById("listStu2").innerHTML = "<br><br>"+txt3+"<br><br>";
                txt2 = "";
             }
        }

    }

}	

function displayStudent3(alu){

    //read each object inside of Array.
    var y;
    var txt = "";
    var txt2 = "";
    var txt3 = "";
    var stu = "";

    fn = document.getElementById("fname").value;

    //var stu = "Name: "+alu.Name+" -  Age:"+alu.Age+" -  Gender: "+alu.Gender;
    for (i=0; i < alu.length;i++){
        if(fn == alu[i].Name){
            for(y in alu[i].Courses){

                if (fn == alu[i].Name){

                     txt2 += "Season: "+alu[i].Courses[y].season+" - Course: "+alu[i].Courses[y].name + " - Final Grade: "+alu[i].Courses[y].finalGrade+"<br> ";
                    //this allows to add the name of the student only one time. 

                     var cant =  (alu[i].Courses.length - 1);   

                     if(y == cant){
                        var stu = "Name: "+alu[i].Name+" -  Age:"+alu[i].Age+" -  Gender: "+alu[i].Gender+"<br>";
                        txt3 += "<strong>"+stu+"</strong>"+"<br>"+txt2;
                        txt3=txt3+"<br>";
                        document.getElementById("listStu3").innerHTML = "<br><br>"+txt3+"<br><br>";
                        txt2 = "";
                    }   
                } 
            }
            break;
        }else{
            document.getElementById("listStu3").innerHTML = "<strong>"+"Not Found, write a name of the upper list"+"</strong>";
        }  
    }
}

