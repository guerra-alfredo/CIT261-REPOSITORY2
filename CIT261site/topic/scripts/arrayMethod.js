    
//Global variables
var fn,ln,ps,ag,ge,gr;
var objStudent;

//Create object
//this was made to have a loaded list to test the functionality of the application. 
var alum1 = {firstName: "Peter", lastName: "Hall", passport: 1111, gender:"male", age:25,grade: 8};
var alum2 = {firstName: "Michael", lastName: "Smith", passport: 2222, gender:"male", age:30,grade: 9};
var alum3 = {firstName: "Luis", lastName: "Morales", passport: 3333, age:23, gender:"male", grade: 6};


//Save a list of students (object) into an array.
var student = [alum1, alum2, alum3];
                

//Another way to insert a new student into an array by using the push method.
var alum4 = {firstName: "Denise", lastName: "Calle", passport: 4444, gender:"female", age:35, grade: 10};
//this method insert the new student at the end of the array. 
student.push(alum4);
   
//This Function display all students from the arrays "student".
//So when the page load, we will have a default list. 
displayStudent();




//This Function allows to insert a new student.
function insertStudent(){
    fn = document.getElementById("fname").value;
    ln = document.getElementById("lname").value;
    //Parses a string into an integer.
    ps = parseInt(document.getElementById("passp").value);
    ag = parseInt(document.getElementById("age").value);
    ge = document.getElementById("gender").value;
    gr = parseInt(document.getElementById("grade").value);



    //Conditional statement - If there is an empty value then a message is displayed.
    if(fn == "" || ln == "" || ps == "" || ag == ""|| ge == ""|| gr == "" ){
        alert("Please fill all fields!\nTo add a new student");
    } else {
        //Save the input data into an object(global object).
        //Literal objecct
        objStudent = {firstName: fn, lastName: ln, passport: ps, age:ag, grade: gr};

        //Function with parameter - Query if the student already exist (by passport), returns a boolean
        var existStudent = ifExistStudent(objStudent);


        if (existStudent == true){
            alert("Sorry but this student already exist!\nEnter another student");
        }else{
            student.push(objStudent);

    //--REFRESH DATA--

            //Display list of original input.
            displayStudent();

            //create a copy the original array to sort from hights to lower grade.
            var copyStudent = student.slice(0);

            //save into a new array the sorted list by grade.
            var lastSortArray = sortByGradeHighest(copyStudent);

            //Display the last sorted list
            displaySortStudent(copyStudent);

    //BEST STUDENT//

            //this must have the highest grade object.
            var st = lastSortArray[0];
            //to get a value from an object, we write de obect.property
            var hGrade = st.grade;


            //display a list of student with the higher grade, it receive the order array + the best grade.
            findBestStudent(lastSortArray,hGrade);


    //WORST STUDENT//

            //create a copy the original array
            var copyStudent2 = student.slice(0);

            //save into a new array, sorted list by grade from lower to highest ;
            var sortArrayL = sortByGradeLowest(copyStudent2);

            //this must have the lower grade.
            var lg = sortArrayL[0];
            //to get a value from an object, we write de obect.property
            var lGrade = lg.grade;

            findWorstStudent(sortArrayL,lGrade);
        }
    }

}


	//Search all list to see if an student exist by their passport. 
    function ifExistStudent(inputStudent){
        var x;
        var txt = "";
		//get the value from the property on an object.
		var passPortStudent = inputStudent.passport;
        //I am using a "For Loop" to read each object inside of Array.
        for (i=0; i < student.length;i++){
            var alu = student[i];
            //I am using a "For In Loop" to read each atribute of an object. 
            for (x in alu) {
				if (alu.passport == passPortStudent){
					return true;
				}
                
             }
        }
    }





    //Display all student - Function without parameters.
    function displayStudent(){
        var x;
        var txt = "";
        //I am using a "For Loop" to read each object inside of Array.
        for (i=0; i < student.length;i++){
            var alu = student[i];
            //I am using a "For In Loop" to read each atribute of an object. 
            for (x in alu) {
                txt += alu[x] + ", ";
             }
            txt=txt+"<br>";
            document.getElementById("list").innerHTML = txt+"<br>";
        }
    }





//SORT ARRAY
    //clone an array.
    var copyArray = student.slice(0);
	var copyStudentArray = student.slice(0);

    //Sort by grade ordering it from highest to lowest
    var sortArray = sortByGradeHighest(copyStudentArray);
    function sortByGradeHighest(copyStudentArray){
        var sortA= copyStudentArray.sort(function(a,b){return b.grade - a.grade});
        return sortA;
    }

    displaySortStudent(sortArray);


    //Sort by grade ordering it from lowest to  highest 
    var sortArrayLow = sortByGradeLowest(copyArray);
    function sortByGradeLowest(cpy){
        var sortA= cpy.sort(function(a,b){return a.grade - b.grade});
        return sortA;
    }

    //displaySortStudent(sortArrayLow);




    //Function with parameters, I can call a funtion many times.  
    function displaySortStudent(sa){
        //read each object inside of Array.
        var x;
        var txt = "";
        for (i=0; i < sa.length;i++){
            var alu = sa[i];
            for (x in alu) {
                txt += alu[x] + ", ";
            }
            txt=txt+"<br>";
            document.getElementById("sortList").innerHTML = txt+"<br>";
        }
    }
//END SORT ARRAY            



//BEST STUDENTS			
    //this must have the highest grade.
    var st = sortArray[0];
    //to get a value from an object, we write de obect.property
    var hGrade = st.grade;


    findBestStudent(sortArray,hGrade);

    //there could be several students with the same high grade. 
    function findBestStudent(sortA,h){
        //read each object inside of Array.
        var x;
        var txt = "";
        var arrayBestStudent;
        for (i=0; i < sortA.length;i++){
            var alu = sortA[i];
            for (x in alu) {
                if(alu.grade >= h){
                txt += alu[x] + ", ";
                }
            }
        txt=txt+"<br>";
        document.getElementById("bestStudent").innerHTML = txt;
        }
                }
//CLOSE BEST STUDENT	



//WORST STUDENTS			
    //this must have the lower grade.
    var lg = sortArrayLow[0];
    //to get a value from an object, we write de obect.property
    var lGrade = lg.grade;


    findWorstStudent(sortArrayLow,lGrade);

    //there could be several students with the same high grade. 
    function findWorstStudent(sortA,lgra){
        //read each object inside of Array.
        var x;
        var txt = "";
        var arrayBestStudent;
        for (i=0; i < sortA.length;i++){
            var alu = sortA[i];
            for (x in alu) {
                if(alu.grade <= lgra){
                txt += alu[x] + ", ";
                }
            }
        txt=txt+"<br>";
        document.getElementById("worstStudent").innerHTML = txt+"<br>";
        }
    }
//WORST BEST STUDENT	






                //convert lowercase.


                var x = 10;
                for (var i = 1; i < x; i++){
                    if(i == 3){
                        break;
                    }
                    //window.alert(i);
                }
         