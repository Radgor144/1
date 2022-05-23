<!doctype html>
<html lang="pl">
<head>
<meta charset='utf-8'>
<title>Szkoła Podstawowa</title>
<link rel="stylesheet" href="styl.css">
</head>
<body>
    <div class="baner">
        <h1>Oceny uczniów: biologia</h1>
    </div>
    <div class="lewy">
        <h3>Uczeń:
        <?php
//nie jest wymagane sprawdzenie, czy operacja powiodła się, i wyświetlenie stosownego komunikatu; 

        $connect = mysqli_connect("localhost","root","","szkola");

        $sql = "SELECT imie, nazwisko FROM uczen WHERE id=1";

        $query = mysqli_query($connect,$sql);

        while($tablica = mysqli_fetch_row($query)){
            echo $tablica[0]." ".$tablica[1]."</h3>";
        }

        mysqli_close($connect);

        ?>
        <p>Najwyższa ocena z biologii:
        <?php
        
        $connect = mysqli_connect("localhost","root","","szkola");

        $sql = "SELECT MAX(ocena) FROM ocena WHERE uczen_id=1 and przedmiot_id=4";

        $query = mysqli_query($connect,$sql);

        while($tablica = mysqli_fetch_row($query)){
            echo $tablica[0]."</p>";
        }

        mysqli_close($connect);
        ?>

    </div>
    <div class="prawy">
        <h3>Nazwiska i numery PESEL uczniów</h3>
        <?php

        $connect = mysqli_connect("localhost","root","","szkola");

        $sql = "SELECT nazwisko, pesel FROM uczen;";

        $query = mysqli_query($connect,$sql);

        echo "<ul>";

        while($tablica = mysqli_fetch_row($query)){
            echo "<li>".$tablica[0]." ".$tablica[1];
        }

        echo "</ul>";

        mysqli_close($connect);

        ?>
    </div>
    <div class="stopka">
        <h2>Szkoła Podstawowa</h2>
        <p>Stronę opracował: JAAAA!!!</p>
    </div>
</body>
</html>