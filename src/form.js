// This is a simple script to send form submissions to gsheets
// in the absence of a real backend. Using google sheets for
// this is definitely one of the jankier things I've put on the internet
// but it took literally thirty minutes to make work, so it'll
// work for now.
//
// Backend GScript and overall process adapted from this absolutely
// incredible tutorial:
// https://medium.com/@dmccoy/how-to-submit-an-html-form-to-google-sheets-without-google-forms-b833952cc175

var FORM_URL = "https://script.google.com/macros/s/AKfycbwiQD9aQGaDc2hrx37OeRRk2gf3R91xPyRuFDWio2tirMLYnw/exec"

$("#submit").on("click", function(e) {
  e.preventDefault()

  subname = $("#subname").val()
  subemail = $("#subemail").val()

  if (!subemail) {
    $("#subemail").addClass("invalid")
    return
  }

  $("#submit").text("...")

  $.ajax({
    url: FORM_URL,
    method: "GET",
    dataType: "json",
    data: {
      name: subname,
      email: subemail,
      tstamp: new Date().toISOString()
    },
    success: function() {
      $("#subemail").removeClass("invalid")
      $("#submit").text("Thank you!")
      $("#submit").addClass("success")
      $("#submit").removeClass("ready")
      $("#subemail").val("")
      $("#subname").val("")
    },
    error: function() {
      $("#subemail").removeClass("invalid")
      $("#submit").text("Something went wrong!")
      $("#submit").addClass("failure")
      $("#submit").removeClass("ready")
    }
  })
})
