<?php
include "db.php";

$results = [];
if (empty($_GET["author"]) || $_GET["author"] == "all") {
    $results = $database;
    
} else {
    $author = $_GET["author"];


    foreach ($database as $cd) {
        if ($cd["author"] == $author) {
            $results[] = $cd;
        }
    }
}


header('Content-Type: application/json');
echo json_encode($results);
?>
