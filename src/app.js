const $ = require("jquery");
const Handlebars = require("handlebars");



$(document).ready(function() {

  $.ajax(
    {
      "url":"http://localhost/exercise/php-ajax-dischi/server.php",
      "method":"GET",
      "success":function (discs) {
        render(discs, "all");
      },
      "error":function (err) {
        alert("E avvenuto un errore. "+ err);
    }
  });


  $("#select-author").change(function() {
    var authorVal = $(this).val();
    resetResults();
    $.ajax(
      {
        "url":"http://localhost/exercise/php-ajax-dischi/server.php",
        "method":"GET",
        "success":function (discs) {
          render(discs, authorVal);
        },
        "error":function (err) {
          alert("E avvenuto un errore. "+ err);
      }
    });
  });

});

// FUNCTIONS

function render(data, filter) {
  for (var i = 0; i < data.length; i++) {
    if (filter == "all" || filter == data[i]["author"]) {
      // template dei CDs
      var source = $("#cd-template").html();
      var cdTemplate = Handlebars.compile(source);
      var source = $("#option-template").html();
      var optionTemplate = Handlebars.compile(source);
      var context = {
        "title": data[i]["title"],
        "author":  data[i]["author"],
        "year": data[i]["year"],
        "poster": data[i]["poster"]
      };
      var html = cdTemplate(context);
      $(".disc-list").append(html);
      var html = optionTemplate(context);
      $("#select-author").append(html);

    }
  }
}

// funzione per resettare la ricerca
function resetResults() {
  $(".disc-list").html("");
}
