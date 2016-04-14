<?php
$data = json_decode(file_get_contents("php://input"));
function scrubSQL($con,$string)
{

     $string = htmlspecialchars(strip_tags(trim($string)));
     $string = str_replace("'","",$string);
     $string = mysqli_real_escape_string($con,$string);

     return $string;

}

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

$fullnameRaw=($data->fullName);
$emailRaw=($data->email);
$commentRaw=($data->comment);

// $fullName= mysqli_real_escape_string($link,$data->fullName);
// $email=mysqli_real_escape_string($link,$data->email);
// $comment=mysqli_real_escape_string($link,$data->comment);
$fullName=scrubSQL($link,$fullnameRaw);
$email=scrubSQL($link,$emailRaw);
$comment=scrubSQL($link,$commentRaw);
if ($data->subject){
  $subjectRaw=($data->subject);
  $subject=scrubSQL($link,$subjectRaw);
  $sql=sprintf("INSERT INTO MyGuests(fullname, email, comment, subject) VALUES('$fullName','$email','$comment','$subject')");
}
else {
  $sql=sprintf("INSERT INTO MyGuests(fullname, email, comment) VALUES('$fullName','$email','$comment')");
}

$result = mysqli_query($link,$sql);
if ($result){
  echo "Table created";
} else {
  echo "Failure";
}

mysqli_close($link);
 ?>
