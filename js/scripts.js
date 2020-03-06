$(document).ready(function() {
	$("#hide").ready(function() {
	  $("#wrapping").hide();
	});
	$("#hide").click(function() {
	  $("#wrapping").hide();
	});
	$("#show").click(function() {
	  $("#wrapping").show();
	});
  });
  
  $(document).ready(function() {
	$(".portfolio-link").click(function() {
	  $(".portfolio-caption").slideToggle("slow");
	});
  });
  
  
  function Hostel(location, hostel_type, price_range, ) {
	this.location = location;
	this.hostel_type = hostel_type;
	this.price_range = price_range;
  }
  
  function Student(name, age, phone_number, school, gender) {
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
  
  $(document).ready(function() {
	var logins = document.getElementById("login");
	var registers = document.getElementById("register");
	var btns = document.getElementById("btn");
  
	function register() {
	  logins.style.left = "-400px";
	  registers.style.left = "50px";
	  btns.style.left = "110px";
	}
  
	function login() {
	  logins.style.left = "50px";
	  registers.style.left = "450px";
	  btns.style.left = "0";
	}
  
	$("#filter-btn").click(function() {
	  event.preventDefault();
	  let locations = ["nairobi", "mombasa", "kisumu", "meru", "eldoret", "nakuru"]
	  let types = ["mixed", "male", "female"]
	  let costs = ["0-5000", "5001-10000", "10001-20000", "20001"]
	  let location = $("#LOCATION option:selected").val();
	  let type = $("#HOSTEL-TYPE option:selected").val();
	  let cost = parseInt($("#PRICE-RANGE option:selected").val());
	  locations = locations.filter(item => item !== location)
	  types = types.filter(item => item !== type)
	  costs = costs.filter(item => item !== cost)
	  console.log(location);
	  if (type) {
		types.forEach((type) => {
		  $("." + type).css("filter", "brightness(25%)");
		});
	  }
	  if (location) {
		locations.forEach((location) => {
		  $("." + location).css("filter", "brightness(25%)");
		});
	  }
	  
	  if (cost) {
		costs.forEach((cost) => {
		  $("." + cost).css("filter", "brightness(25%)");
		});
	  }
	});
  
  
	$("button.portfolio-item").click(function() {
	  alert("Thank you.You have successfully booked a hostel. One of our agents shall be in touch with you.");
	});
  
  });

  
//form function
function myMessage() {
	var name = document.getElementsByName("FNAME").value; //mce-FNAME
	var email = document.getElementsByName("EMAIL").value; //mce-EMAIL
	var message = document.getElementsByName("MMERGE2").value; //mce-MMERGE2
  
	if (email !== "" && name !== "" && message !== "") {
	  // document.getElementById("pop").innerHTML =
	  alert("Hello, we have received your message. we wiil reach out to you soon");
	} else if (email == "" || name !== "" || message !== "") {
	  alert("Please fill in all the details");
	}
  }
  