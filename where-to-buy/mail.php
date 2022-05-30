<?php

$name = $_POST['name'];
$email = $_POST['email'];
$country = $_POST['county'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$company = $_POST['company'];
$to = "edengu20@gmail.com"
$message = $_POST['message'];


$mailheader = "From:" .$name."\r\n";
"CC: edengu20@gmail.com"
$recipent = "edengu20@gmail.com"

mail($recipent,$subject,$message,$mailheader)
or die("Error");
echo"message send"

>