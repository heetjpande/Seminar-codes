function clearErrors(){

  errors = document.getElementsByClassName('formerror');
  for(let item of errors)
  {
      item.innerHTML = "";
  }


}
function seterror(id, error){
  //sets error inside tag of id 
  element = document.getElementById(id);
  element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
  var returnval = true;
  clearErrors();

  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms['myForm']["fname"].value;
  if (name.length<5){
      seterror("name", "*Length of name is too short");
      returnval = false;
  }

  if (name.length == 0){
      seterror("name", "*Length of name cannot be zero!");
      returnval = false;
  }

  var email = document.forms['myForm']["femail"].value;
  if (email.length>20){
      seterror("email", "*Email length is too long");
      returnval = false;
  }

  var phone = document.forms['myForm']["fphone"].value;
  if (phone.length != 10){
      seterror("phone", "*Phone number should be of 10 digits!");
      returnval = false;
  }

  // Validate address
  var address = document.forms['myForm']["faddress"].value;
  if (address.length < 5 || address.length > 100) {
    seterror("address", "*Address length should be between 5-100");
    returnval = false;
  }

  // Validate salary
  var salary = document.forms['myForm']["fsalary"].value;
  if (isNaN(salary) || salary < 0) {
    seterror("salary", "*salary should be a real number");
    returnval = false;
  }

  return returnval;
}

