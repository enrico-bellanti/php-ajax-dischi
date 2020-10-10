<?php include "db.php"; ?>

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
            <h4><?php echo(strtoupper($cd["title"])); ?></h4>
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
