$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var age = parseInt(("#age").val());
    var gender = ("#gender").val();

    if (age) {

      if (age > 70 && gender === "male") {

      } else if (age > 70 && gender === "female") {

      } else if (age >=55 && gender === "male") {

      } else if (age >=55 && gender === "female") {

      } else if (age >=35 && gender === "male") {

      } else if (age >=35 && gender === "female") {

      } else if (age >=18 && gender === "male") {

      } else if (age >=18 && gender === "female") {

      } else {

      }

    } else {
      alert('Please enter your age.');
    }



  });
});
