    var fn,ln,ps,ag,ge,gr;
    var objStudent;

    //Constructor, this allow to create many objects.
    function NewStudent(fname,pport,gder,grade){
        this.firstName = fname;
        this.passport = pport;
        this.gender = gder;
        this.grade = grade;
    }


//Default List
    //Creating Object with the keyword new.
    var alum1 = new NewStudent("Peter",1111,"male",8);
    var alum2 = new NewStudent("Michael",2222,"male",9);
    var alum3 = new NewStudent("Luis",3333,"male",6);


    //load a list of students into an array.
    var student = [alum1, alum2, alum3];
                

    //insert a new student into an array.
    //var alum4 = new NewStudent("Denise",4444,"female",35);
    //student.push(alum4);
   
    //display all student inside the array.
    displayStudent();
//End default List


	function findStudent(){
        ps = parseInt(document.getElementById("passport").value);
		
            //Retriving Data stored
            var getList = localStorage.getItem("listStudent");
            var retrieveArray = JSON.parse(getList);
            
            displayStudentByPassoport(ps,retrieveArray);
	}

	//Delete data store inside the browser
	function cleanLocalStorage(){
        localStorage.removeItem("listStudent");
		alert("The data has been deleted!");
	}


	//Display a student by Passport.
    function displayStudentByPassoport(ps,retrieveA){
	var passport = ps;
        var x;
        var txt = "";
        var ifExistAlu = false;
        //read each object inside of Array.
        for (i=0; i < retrieveA.length;i++){
            var alu = retrieveA[i];
            //read each atribute of an object one by one. 
            for (x in alu) {
                if (alu.passport == passport){
                   ifExistAlu = true;
                   document.getElementById("studentData").innerHTML = "<h2>"+"Full Name"+": "+alu.firstName+";  Passport: "+alu.passport+";  Gender: "+alu.gender+";  Grade: "+alu.grade+"</h2>";
                   break;
                }
             }
        }
        // if there student doesn't not exist, I will display a message. 
        if(!ifExistAlu){
            document.getElementById("studentData").innerHTML = "<h2>"+"Student not found"+"</h2>";
        }
    }


	function insertStudent2(){
        //var thigh = get("va1").value;
        fn = document.getElementById("fname").value;
        ps = parseInt(document.getElementById("passp").value);
        ge = document.getElementById("gender").value;
        gr = parseInt(document.getElementById("grade").value);
		
		if(fn == "" || ps == "" || ge == ""|| gr == "" ){
		    alert("Please fill all fields!\nTo add another student");
		} else {
			
			//objStudent = {firstName: fn, passport: ps, gender: ge, grade: gr};
                        //working with constructor. 
			objStudent = new NewStudent (fn,ps,ge,gr);
                        
			//Send an object to a function to know if the student exist return a boolean
			var existStudent = ifExistStudent(objStudent);
			
			
			if (existStudent == true){
				alert("Sorry but this passport' student already exist!\nEnter another student");
			}else{
				//save the object into an array.
				student.push(objStudent);
				
				//Convert the array into text to save it into local Storage.
				var stJson = JSON.stringify(student);
				localStorage.setItem("listStudent",stJson);
				
				
				//Retriving Data from local storage.
				var getList = localStorage.getItem("listStudent");
                                //convert the retriving data into JS.
				var objList = JSON.parse(getList);
				//document.getElementById("list").innerHTML = objList[0].firstName+"<br>";
				



		//--REFRESH DATA--

				//Display list entire list of student.
				displayStudent();
	
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
        //read each object inside the Array.
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









