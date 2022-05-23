<?php

$connect = mysqli_connect("localhost","root","","dane");

if(isset($_POST['dodaj'])){

$tytul = $_POST['tytul'];
$gatunek = $_POST['gatunek'];
$rok = $_POST['rok'];
$ocena = $_POST['ocena'];

$sql="INSERT INTO filmy (gatunki_id, tytul, rok, ocena) VALUES ('".$gatunek."', '".$tytul."', '".$rok."', '".$ocena."')";

$query = mysqli_query($connect,$sql);

if($query){
 echo "Film ".$tytul."zostal dodany do bazy";
}

mysqli_close($connect);
}
?>