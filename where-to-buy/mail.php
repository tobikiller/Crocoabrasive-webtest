<?php

$name = $_POST['name'];
$email = $_POST['email'];
$country = $_POST['county'];
$phone = $_POST['phone'];
$website = $_POST['website'];
$company = $_POST['company'];
$message = $_POST['message'];


$mailheader = "From:" .$name. "<".$email. "\r\n";

$recipent = "edengu20@gmail.com"

mail($recipent,$subject,$message,$mailheader)
or die("Error");
echo"message send"
>