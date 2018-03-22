$(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    if (age) {
      $("#young").text("");
      $(".celebs").hide();
      if (age >= 70 && gender === 'male') {
        $("#trump").show();
      } else if (age >= 70 && gender === "female") {
        $("#turner").show();
      } else if (age >=55 && gender === "male") {
        $("#mrt").show();
      } else if (age >=55 && gender === "female") {
        $("#fey").show();
      } else if (age >=35 && gender === "male") {
        $("#ice").show();
      } else if (age >=35 && gender === "female") {
        $("#tomei").show();
      } else if (age >=18 && gender === "male") {
        $("#lautner").show();
      } else if (age >=18 && gender === "female") {
        $("#swift").show();
      } else {
        $("#young").text("Get Out!");
      }
  } else {
      alert('Please enter your age.');
    }



  });
});
