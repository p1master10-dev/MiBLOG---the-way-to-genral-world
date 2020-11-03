function showPassword(){
    pass = document.getElementById("textInput2");
    if(pass.type == "password"){
        pass.type = "text";
    }else{
        pass.type = "password";
    }
}
var textInput1 = document.getElementById("textInput1");
var textInput2 = document.getElementById("textInput2");

function submitCONSOLE(){
    if(textInput2.type == "password"){
        consoleConvert = textInput2.type = "password" , console.log(document.getElementById("textInput2").value);
        textInput2.type = "password";
    }
    var center_tag = document.getElementById("discenter");
    function nextScreen(){
      document.body.style.backgroundImage = "url('My image BG.jpg')";
      center_tag.innerHTML = "";
      center_tag.id = "center";
      center_tag.className = "center_tag";
      document.getElementById("center").innerHTML = "<input type='text' placeholder='new text writer' id='textInput3'>";
    }
    console.log(document.getElementById("textInput1").value);
    setTimeout(nextScreen, 4000);
}
