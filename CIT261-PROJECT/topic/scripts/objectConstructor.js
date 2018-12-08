    var fn,ln,ps,ag,ge,gr;
    var objStudent;

    //Constructor, this allow to create many objects.
    function NewStudent(fname,lname,pport,gder,age,grade){
            this.firstName = fname;
            this.lastName = lname;
            this.passport = pport;
            this.gender = gder;
            this.age = age;
            this.grade = grade;  
    }

//I am using Inheritance to add a new property to the constructor. 
NewStudent.prototype.nationality = "Chile";

//I am using Inheritance to add new methods to objects constructors
//NewStudent.prototype.agePrototype = function() {
    //var result = "";
    //if (this.age < 30){
        //result = "Very young";   
    //}else{
        //result = "Not so young";
    //}
    //return result;
//};

//Default List
    //Creating Object with the keyword new.
    var alum1 = new NewStudent("Peter","Hall",1111,"male",25,8);
    var alum2 = new NewStudent("Michael","Smith",2222,"male",30,9);
    var alum3 = new NewStudent("Luis","Morales",3333,"male",23,6);


    //load a list of students inside an array.
    var student = [alum1, alum2, alum3];
                

    //insert a new student into an array.
    var alum4 = new NewStudent("Denise","Calle",4444,"female",35,10);
    student.push(alum4);
   
    //Fuction that display all student inside the array.
    displayStudent();
//End default List


    function findStudent(){
    ps = parseInt(document.getElementById("passport").value);
            displayStudentByPassoport(ps);
    }

	//Display a student by Passport.
    function displayStudentByPassoport(ps){
	var passport = ps;
        var x;
        var txt = "";
        //read each object inside of Array.
        for (i=0; i < student.length;i++){
            var alu = student[i];
            //read each atribute of an object one by one. 
            for (x in alu) {
                if (alu.passport == passport){
                   // Adding method to an object.
                   alu.fullName = function(){
                         return this.firstName+" "+this.lastName;
                   }
                   
                   
                   //document.getElementById("fname2").innerHTML = alu.firstName+" "+alu.lastName
                   document.getElementById("fname2").innerHTML = "I called the full name by adding a method to the object"+"\n"+alu.fullName(); 
                   break;
                }
             }
        }
    }


    //get the values from a form, saving it inside an object, after thet I update the currest list of student. 
    function insertStudent(){
        //var thigh = get("va1").value;
        fn = document.getElementById("fname").value;
        ln = document.getElementById("lname").value;
        ps = parseInt(document.getElementById("passp").value);
        ag = parseInt(document.getElementById("age").value);
        ge = document.getElementById("gender").value;
        gr = parseInt(document.getElementById("grade").value);
		
		
		

		if(fn == "" || ln == "" || ps == "" || ag == ""|| ge == ""|| gr == "" ){
		    alert("Please fill all fields!\nTo add another student");
		} else {
			objStudent = {firstName: fn, lastName: ln, passport: ps, age:ag, grade: gr, 
                            // Using Getters
                            get gradeNote() {
                                var result = "";
                                if (this.grade > 8){
                                    result = "Excellent grade!";   
                                }else{
                                    result = "Good";
                                }
                                return result;
                            }
                        };
			
			//Send an object to a function to know if the student exist return a boolean
			var existStudent = ifExistStudent(objStudent);
                        
                        
			
			if (existStudent == true){
				alert("Sorry but this student already exist!\nEnter another student");
			}else{
				
                                alert(objStudent.gradeNote);
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


	//Look if a student existe by their passport. 
    function ifExistStudent(inputStudent){
        var x;
        var txt = "";
		//get the value from a property.
		var passPortStudent = inputStudent.passport;
        //read each object inside of Array.
        for (i=0; i < student.length;i++){
            var alu = student[i];
            //read each atribute of an object one by one. 
            for (x in alu) {
				if (alu.passport == passPortStudent){
					return true;
				}
                
             }
        }
    }


    //Display a list of all student - Function without parameters.
    function displayStudent(){
        var x;
        var txt = "";
        //read each object inside of Array.
        for (i=0; i < student.length;i++){
            var alu = student[i];
            //read each atribute of an object one by one. 
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
         