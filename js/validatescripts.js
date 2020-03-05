$("#myForm").submit(function(e) {
  e.preventDefault();
  let validEmail = emailsArray.includes($("#inputEmail").val());
  let validPassword = passwordsArray.includes($("#inputPassword").val());

  if (validEmail && validPassword){
    window.location.href = './index.html';
    }else{
      alert('invalid username password');
    }
});
