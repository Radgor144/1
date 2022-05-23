<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Sklep muzyczny</title>
    <link rel="stylesheet" href="muzyka.css">
</head>
<body>
    <div id="baner">
        <h1>SKLEP MUZYCZNY</h1>
    </div>
    <div id="lewy">
        <h2>NASZA OFERTA</h2>
        <ol>
            <li>Instrumenty muzyczne</li>
            <li>Sprzęt audio</li>
            <li>Płyty CD</li>
        </ol>
    </div>
    <div id="prawy">
        <?php

        $imie = $_POST['imie'];
        $nazwisko = $_POST['nazwisko'];
        $adres = $_POST['adres'];
        $telefon = $_POST['telefon'];
        $login = $_POST['login'];
        $haslo = $_POST['haslo'];

        echo "Konto ".$imie." ".$nazwisko." zostało zarejestrone w sklepie muzycznym";

    
        $connect = mysqli_connect('localhost','root','','sklep');

        $zapytanie1 = "INSERT INTO uzytkownicy (imie, nazwisko, adres, telefon) VALUES ('$imie', '$nazwisko', '$adres', '$telefon' )";

        $zapytanie2 = "INSERT into konta (login, haslo) values ('$login','$haslo')";

        mysqli_query($connect, $zapytanie1);
        mysqli_query($connect, $zapytanie2);

        mysqli_close($connect);

        ?>
    </div>
</body>
</html>



$connect = mysqli_connect("localhost","root","","baza");
$sql = "zapytanie1";
$query = mysqli_query($connect,$sql);

while($tablica = mysqli_fetch_row($query)){

}

mysqli_close($connect);