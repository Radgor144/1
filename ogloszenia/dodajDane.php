<?php

$imie = $_POST['imie'];
$nazwisko = $_POST['nazwisko'];
$telefon = $_POST['telefon'];
$email = $_POST['email'];

$connect = mysqli_connect("localhost","root","","ogloszenia");

$sql = "INSERT INTO uzytkownik (imie, nazwisko, telefon, email) VALUES ('".$imie."', '".$nazwisko."', '".$telefon."', '".$email."')";

$query = mysqli_query($connect,$sql);

mysqli_close($connect);

?>