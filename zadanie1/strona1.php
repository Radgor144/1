<!Doctype html>
<html lang="pl">
<head>
<meta charset="utf-8">
<title></title>


</head>
<body>
<?php

$connect = mysqli_connect("localhost","root","","oceny");
$sql = "SELECT imie, nazwisko FROM uczen WHERE id=2";
$query = mysqli_query($connect,$sql);

while($tablica = mysqli_fetch_row($query)){

echo 'Uczeń: <h2>'.$tablica[0].' '.$tablica[1].'</h2>';

}

mysqli_close($connect);
?>

<?php

$connect = mysqli_connect("localhost","root","","oceny");
$sql = "SELECT AVG(ocena) FROM ocena WHERE uczen_id=2 and przedmiot_id=1";
$query = mysqli_query($connect,$sql);

while($tablica = mysqli_fetch_row($query)){

echo 'Średnia ocen z języka polskiego '.$tablica[0];

}

mysqli_close($connect);
?>
</body>
</html>