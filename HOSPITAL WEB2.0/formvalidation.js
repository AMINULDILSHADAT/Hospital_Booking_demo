function validate(){
          
    var name=document.getElementById("username").value;
    
    var email=document.getElementById("email").value;

    var select=document.getElementById("department").value;

    var phone=document.getElementById("phone").value;

    // regular expression section

    var regexmail=/^([a-z A_Z 0-9.\-]+)@([a-z A-Z 0-9-]).([a-z]{2,8}).([a-z]{2,8})?$/;
    var regexphone=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    


    if (name.trim()==""){
    alert("Please enter your name")
    return false

    } 

    else if (email.trim()==""){
  alert("please fill your email correct")
  document.myform.email.focus(); 
  return false
  }

  else if(!regexmail.test(email)){
    alert("Invalid email for mat");
    return false;
  }

  else if(select.trim()==''){
    alert("please select your department");
    return false;
  }

  else if (phone.trim()==''){
    alert("please enter phone number")
    return false
  }

  else if(!regexphone.test(phone)){
    alert("invalid phone number")
    return false
  }
  else{
    alert("Your appointment successfully Completed \n We will call you back very soon")
    return true
  }
}