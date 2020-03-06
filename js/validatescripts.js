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

$("#theForm").submit(function(e) {
  e.preventDefault();
  if ($("#inputEmail").val() == '' && $("#inputPassword").val() == '') {
    alert('username or password cann\'t be blank');
} else {
  window.location.href = './index.html';
}
});

