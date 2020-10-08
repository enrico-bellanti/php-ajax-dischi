<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Discs</title>
    <link rel="stylesheet" href="dist/app.css">
  </head>
  <body>
    <!-- HEADER -->
    <header>
      <div class="container">
        <div class="logo">
          <img src="img/1200px-Spotify_logo_without_text.svg.webp" alt="">
        </div>
        <select id="select-author" name="">
          <option value="0">All Authors</option>

        </select>
      </div>
    </header>
    <!-- /HEADER -->

    <!-- vetrina dischi -->
    <main>
      <div class="disc-wrapper">
        <ul class="disc-list">

        </ul>
      </div>
    </main>
    <!-- /vetrina dischi -->

    <footer></footer>

    <!-- TEMPLATES -->
    <script id="cd-template" type="text/x-handlebars-template">
      <li class="disc" data-author="{{id_author}}">
        <img src="{{poster}}" alt="">
        <h4>{{title}}</h4>
        <p>{{author}}</p>
        <p>{{year}}</p>
      </li>
    </script>

    <!-- template select options -->
    <script id="option-template" type="text/x-handlebars-template">
      <option value="{{id_author}}">{{author}}</option>
    </script>
    <!-- /template select options -->

    <!-- TEMPLATES -->

    <script src="dist/app.js" charset="utf-8"></script>
  </body>
</html>
