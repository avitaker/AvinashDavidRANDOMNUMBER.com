<?php

$sql=sprintf("CREATE TABLE MyGuests (
  id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(40) NOT NULL,
  email VARCHAR(60) NOT NULL,
  subject VARCHAR(30),
  comment VARCHAR(150) NOT NULL,
  reg_date TIMESTAMP
)");

$user = 'scramble';
$password = 'scramble';
$db = 'scramble';
$host = 'scramble';
$port = scramble;
$socket = 'localhost:/scramble';

$link = mysqli_init();
$success = mysqli_real_connect(
  $link,
  $host,
  $user,
  $password,
  $db,
  $port,
  $socket
);

// $request = $_GET['request'];
//
// if ($request=='createTable'){
// mysql_select_db('mysql');
$result = mysqli_query($link,$sql);
if ($result){
  echo "Table created";
} else {
  echo "Failure";
}

mysqli_close($link);
?>
