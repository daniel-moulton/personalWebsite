<?php
session_start();
$username = "ECM1417";
$password = "WebDev2021";
$dbname = "tetris";

// Create connection
$conn = mysqli_connect("localhost", $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// else {
//     echo "Connection succeded";
// }
?>