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
    <header>

    </header>

    <main>
      <div class="disc-wrapper">
        <ul class="disc-list">
          <?php foreach ($database as $value) { ?>
          <li class="disc">
            <img src="<?php echo($value["poster"]); ?>" alt="">
            <h4><?php echo($value["title"]); ?></h4>
            <p><?php echo($value["author"]); ?></p>
            <p><?php echo($value["year"]); ?></p>
          </li>
        <?php } ?>
        </ul>
      </div>
    </main>
  </body>
</html>
