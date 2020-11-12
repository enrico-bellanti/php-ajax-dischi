const $ = require("jquery");
const Handlebars = require("handlebars");

$(document).ready(function() {

  $.ajax(
    {
      "url":"http://localhost/exercise/php-ajax-dischi/server.php",
      "method":"GET",
      "success":function (discs) {
        renderCds(discs);
        renderSelect(discs);
      },
      "error":function (err) {
        alert("E avvenuto un errore. "+ err);
    }
  });


  $("#select-author").trigger(function() {
    var authorVal = $(this).val();
    resetResults();
    $.ajax(
      {
        "url":"http://localhost/exercise/php-ajax-dischi/server.php",
        "data": {
          "author": authorVal
        },
        "method":"GET",
        "success":function (discs) {
          renderCds(discs)
        },
        "error":function (err) {
          alert("E avvenuto un errore. "+ err);
      }
    });
  });


});

// FUNCTIONS
function renderCds(results) {
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

      // appendo cds
      var html = cdTemplate(context);
      $(".disc-list").append(html);
  }
}

function renderSelect(results) {
  var authors = [];

  for (var i = 0; i < results.length; i++) {
    if (!authors.includes(results[i]["author"])) {
          // template select
    var source = $("#option-template").html();
    var optionTemplate = Handlebars.compile(source);
    var context = {
      "author":  results[i]["author"],
    };
    // appendo select options
    var html = optionTemplate(context);
    $("#select-author").append(html);
    authors.push(results[i]["author"]);
    }

  }
}

// funzione per resettare la ricerca
function resetResults() {
  $(".disc-list").html("");
}
