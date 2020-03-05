var logins= document.getElementById("login");
				var registers = document.getElementById("register");
				var btns = document.getElementById("btn");

				function register(){
					logins.style.left="-400px";
					registers.style.left="50px";
					btns.style.left="110px";
				}
				function login(){
					logins.style.left="50px";
					registers.style.left="450px";
					btns.style.left="0";
        }
        
        $(function() {

          $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
            preventSubmit: true,
            submitError: function($form, event, errors) {
              // additional error messages or events
            },
            submitSuccess: function($form, event) {
              event.preventDefault(); // prevent default submit behaviour
              // get values from FORM
              var name = $("input#name").val();
              var email = $("input#email").val();
              var phone = $("input#phone").val();
              var message = $("textarea#message").val();
              var firstName = name; // For Success/Failure Message
              // Check for white space in name for Success/Fail message
              if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
              }
              $this = $("#sendMessageButton");
              $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
              $.ajax({
                url: "././mail/contact_me.php",
                type: "POST",
                data: {
                  name: name,
                  phone: phone,
                  email: email,
                  message: message
                },
                cache: false,
                success: function() {
                  // Success message
                  $('#success').html("<div class='alert alert-success'>");
                  $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                  $('#success > .alert-success')
                    .append("<strong>Your message has been sent. </strong>");
                  $('#success > .alert-success')
                    .append('</div>');
                  //clear all fields
                  $('#contactForm').trigger("reset");
                },
                error: function() {
                  // Fail message
                  $('#success').html("<div class='alert alert-danger'>");
                  $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                  $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                  $('#success > .alert-danger').append('</div>');
                  //clear all fields
                  $('#contactForm').trigger("reset");
                },
                complete: function() {
                  setTimeout(function() {
                    $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                  }, 1000);
                }
              });
            },
            filter: function() {
              return $(this).is(":visible");
            },
          });
        
          $("a[data-toggle=\"tab\"]").click(function(e) {
            e.preventDefault();
            $(this).tab("show");
          });
        });
        
        /*When clicking on Full hide fail/success boxes */
        $('#name').focus(function() {
          $('#success').html('');
        });
        
function Hostel(location, hostel_type, price_range, ){
    this.location = location;
    this.hostel_type = hostel_type;
    this.price_range = price_range;

}
function Student(name, age, phone_number, school, gender){
    this.name = name;
    this.age = age;
    this.phone_number = phone_number;
    this.school = school;
    this.gender = gender;
}

  let hostel1 = new Hostel("nairobi", "mixed", 5500);
  let hostel2 = new Hostel("mombasa", "male", 85000);
  let hostel3 = new Hostel("kisumu", "female", 12500);
  let hostel4 = new Hostel("meru", "mixed", 17500);
  let hostel5 = new Hostel("eldoret", "male", 4500);
  let hostel6 = new Hostel("nakuru", "female", 20000);
  let hostel7 = new Hostel("nairobi", "mixed", 16500);
  let hostel8 = new Hostel("mombasa", "male", 11000);
  let hostel9 = new Hostel("kisumu", "female", 7500);
  let hostel10 = new Hostel("meru", "mixed", 19000);
  let hostel11 = new Hostel("eldoret", "male", 15000);
  let hostel12 = new Hostel("nakuru", "female", 13000);
  let hostel13 = new Hostel("nairobi", "mixed", 8000);
  let hostel14 = new Hostel("mombasa", "male", 3000);
  let hostel15 = new Hostel("kisumu", "female", 9000);
  let hostel16 = new Hostel("meru", "mixed", 7000);
  let hostel17 = new Hostel("eldoret", "male", 14000);
  let hostel18 = new Hostel("nakuru", "female", 18000);
  let hostel19 = new Hostel("nairobi", "mixed", 3500);
  let hostel20 = new Hostel("mombasa", "male", 5000);
  let hostel21 = new Hostel("nairobi", "mixed", 10000);
  let hostel22 = new Hostel("nairobi", "female", 7500);
  let hostel23 = new Hostel("kisumu", "male", 12000);
  let hostel24 = new Hostel("eldoret", "female", 18500);
  let hostel25 = new Hostel("meru", "male", 8000);
  let hostel26 = new Hostel("nairobi", "mixed", 13500);
  let hostel27 = new Hostel("nakuru", "female", 9500);
  let hostel28 = new Hostel("mombasa", "female", 14000);
  let hostel29 = new Hostel("kisumu", "male", 17500);
  let hostel30 = new Hostel("nairobi", "female", 23000);
  let hostel31 = new Hostel("eldoret", "male", 8500);
  let hostel32 = new Hostel("meru", "male", 16000);
  let hostel33 = new Hostel("kisumu", "mixed", 9500);
  let hostel34 = new Hostel("nakuru", "male", 17000);
  let hostel35 = new Hostel("nairobi", "female", 21000);
  let hostel36 = new Hostel("eldoret", "female", 11000);
  let hostel37 = new Hostel("kisumu", "male", 9000);
  let hostel38 = new Hostel("mombasa", "mixed", 18000);
  let hostel39 = new Hostel("nakuru", "mixed", 7500);
  let hostel40 = new Hostel("meru", "male", 14500);
  let hostel41 = new Hostel("eldoret", "female", 9500);
  let hostel42 = new Hostel("meru", "female", 8500);
  let hostel43 = new Hostel("nairobi", "female", 15500);
  let hostel44 = new Hostel("nairobi", "mixed", 25500);
  let hostel45 = new Hostel("nairobi", "male", 9500);
