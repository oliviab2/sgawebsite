function submit() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var eid = document.getElementById("eid").value;
    var comment = document.getElementById("comment").value;
    //if (validation()) // Calling validation function
    
    document.getElementById("contactform").submit(); //form submission
    alert(" Name : " + fname + lname + " n Email : " + eid + " n Comment : " + comment + "nn Form Submitted Successfully......");
    
    }

var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';