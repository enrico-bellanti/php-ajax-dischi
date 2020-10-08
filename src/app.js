const $ = require("jquery");
const Handlebars = require("handlebars");



$(document).ready(function() {

  $.ajax(
    {
      "url":"http://localhost/exercise/php-ajax-dischi/server.php",
      "method":"GET",
      "success":function (discs) {
        renderCds(discs, "all");
        renderSelect(discs);
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
          renderCds(discs, authorVal)
        },
        "error":function (err) {
          alert("E avvenuto un errore. "+ err);
      }
    });
  });

});

// FUNCTIONS
function renderCds(results, filter) {
  for (var i = 0; i < results.length; i++) {
    // template dei CDs
    var source = $("#cd-template").html();
    var cdTemplate = Handlebars.compile(source);
    // context
    var context = {
      "title": results[i]["title"],
      "author":  results[i]["author"],
      "year": results[i]["year"],
      "poster": results[i]["poster"]
    };
    // condizione filtro
    if (filter == results[i]["author"] || filter == "all") {
      // appendo cds
      var html = cdTemplate(context);
      $(".disc-list").append(html);
    }
  }
}

function renderSelect(results) {
  for (var i = 0; i < results.length; i++) {
    // template select
    var source = $("#option-template").html();
    var optionTemplate = Handlebars.compile(source);
    var context = {
      "author":  results[i]["author"],
    };
    // appendo select options
    var html = optionTemplate(context);
    $("#select-author").append(html);
  }
}

// funzione per resettare la ricerca
function resetResults() {
  $(".disc-list").html("");
}
