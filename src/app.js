const $ = require("jquery");
const Handlebars = require("handlebars");



$(document).ready(function() {
  $.ajax(
    {
      "url":"http://localhost/exercise/php-ajax-dischi/server.php",
      "method":"GET",
      "success":function (data) {
        for (var i = 0; i < data.length; i++) {
          var source = $("#cd-template").html();
          var cdTemplate = Handlebars.compile(source);
          var context = {
            "title": data[i]["title"],
            "author":  data[i]["author"],
            "year": data[i]["year"],
            "poster": data[i]["poster"]
          };
          var html = cdTemplate(context);
          $(".disc-list").append(html);
        }
      },
      "error":function (err) {
        alert("E avvenuto un errore. "+ err);
    }
  });
});
