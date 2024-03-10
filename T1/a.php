<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    
    $ephone = $_POST["ephone"];
    $password = $_POST["password"];
    
    
    $servername = "localhost";
    $username = "root";
    $password_db = "";
    $dbname = "t1";

    
    $conn = new mysqli($servername, $username, $password_db, $dbname);
  
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT * FROM user WHERE ephone = '$ephone' AND password = '$password'";
$result = $conn->query($sql);

if ($result) {
    
    header("Location: B.html");
    exit();
} else {
    echo "Invalid ephone or password.";
}

$conn->close();
    
}