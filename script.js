function submit(){
  const user=document.getElementById("name").value;
  const password=document.getElementById("password").value;
  const age= document.getElementById("age").value;
  const msg=document.getElementById("msg");
  let message=''
  if (user==''){
    message="Please enter your name "
      msg.style.color = "red"
  }
  else if(password==''){
    message="Please enter the password"
      msg.style.color = "red"
  }
  else if(age==''){
    message="Please enter your age"
      msg.style.color = "red"
  }
  else{
    message="Login successful!"
    msg.style.color="green"
  }
  msg.innerText=message;
}

var text="Please do not forget filling one of the sections, you must put in this information";
alert(text);