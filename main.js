var password = document.getElementById('input');
function genPassword(){
  var char = "!@#$%^&*_-+=1234567890ABCDEFGHIJKLMNOPQRESTYZabcdefghijklmnopqrestyz"
  var passwordLength = 12;
  var Newpassword = "";

  for (let i = 0; i <= passwordLength; i++) {
    var random = Math.floor(Math.random() * char.length);
    // finding it hard to understand the logic behind substring method and how the programmer thought about it 
    Newpassword += char.charAt(random);
  };
  document.getElementById('input').value = Newpassword;
};


