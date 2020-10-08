<?php include "db.php" ; ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Discs</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
    <link rel="stylesheet" href="dist/app.css">
  </head>
  <body>
    <!-- HEADER -->
    <header>
      <div class="container">
        <div class="logo">
          <img src="img/1200px-Spotify_logo_without_text.svg.webp" alt="">
        </div>
      </div>
    </header>
    <!-- /HEADER -->

    <!-- vetrina dischi -->
    <main>
      <div class="disc-wrapper">
        <ul class="disc-list">
          <?php foreach ($database as $cd) { ?>
          <li class="disc">
            <img src="<?php echo($cd["poster"]); ?>" alt="">
            <h4><?php echo($cd["title"]); ?></h4>
            <p><?php echo($cd["author"]); ?></p>
            <p><?php echo($cd["year"]); ?></p>
          </li>
        <?php } ?>
        </ul>
      </div>
    </main>
    <!-- /vetrina dischi -->

  </body>
</html>
