<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Sklep muzyczny</title>
    <link rel="stylesheet" href="muzyka.css">
</head>
<body>
    <div class="baner">
        <h1>SKLEP MUZYCZNY</h1>
    </div>
    <div class="lewy">
        <h2>NASZA OFERTA</h2>
        <ul>
            <li>Instrumenty muzyczne</li>
            <li>Sprzęt audio</li>
            <li>Płyty CD</li>
        </ul>
    </div>
    <div class="prawy">
        <?php


        $imie = $_POST['imie'];
        $nazwisko = $_POST['nazwisko'];
        $adres = $_POST['adres'];
        $telefon = $_POST['telefon'];

        $login = $_POST['login'];
        $haslo = $_POST['haslo'];

       
        $connect = mysqli_connect("localhost","root","","sklep2");
    
        $zap1 = "INSERT INTO uzytkownicy (imie, nazwisko, adres, telefon) VALUES ('".$imie."', '".$nazwisko."', '".$adres."', '".$telefon."')";

        $query1 = mysqli_query($connect,$zap1);



        $zap2 = "INSERT INTO konta (login, haslo) VALUES ('".$login."', '".$haslo."')";

        $query2 = mysqli_query($connect,$zap2);


        
            echo "Konto ".$imie." ".$nazwisko." zostało zarejestrowane w sklepie muzycznym";
        
        mysqli_close($connect);
        ?>
    </div>    
</body>
</html>