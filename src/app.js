const $ = require("jquery");
const Handlebars = require("handlebars");



$(document).ready(function() {
  $.ajax(
    {
      "url":"http://localhost/exercise/php-ajax-dischi/server.php",
      "method":"GET",
      "success":function (discs) {
        render(discs);
      },
      "error":function (err) {
        alert("E avvenuto un errore. "+ err);
    }
  });


  $("#select-author").change(function() {
    var author = $(this).val();
    if (author == 0) {
      $(".disc").show();
    } else {
      $(".disc").hide();
      $(".disc[data-author="+author+"]").show();
    }
  });

});

// FUNCTIONS

function render(data) {
  for (var i = 0; i < data.length; i++) {
    // template dei CDs
    var source = $("#cd-template").html();
    var cdTemplate = Handlebars.compile(source);
    var source = $("#option-template").html();
    var optionTemplate = Handlebars.compile(source);
    var context = {
      "title": data[i]["title"],
      "author":  data[i]["author"],
      "id_author": i+1,
      "year": data[i]["year"],
      "poster": data[i]["poster"]
    };
    var html = cdTemplate(context);
    $(".disc-list").append(html);
    var html = optionTemplate(context);
    $("#select-author").append(html);


  }
}
