var FORM_URL = "https://script.google.com/macros/s/AKfycbwiQD9aQGaDc2hrx37OeRRk2gf3R91xPyRuFDWio2tirMLYnw/exec"

$("#submit").on("click", function(e) {
  e.preventDefault()
  $.ajax({
    url: FORM_URL,
    method: "GET",
    dataType: "json",
    data: {
      name: $("#subname").val(),
      email: $("#subemail").val(),
      tstamp: new Date().toISOString()
    }
  })
})
