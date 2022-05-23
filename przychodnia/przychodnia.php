<Doctype html>
<html lang="pl">
<head>
    <meta charset="utf-8">
    <title>Przychodnia</title>
    <link rel="stylesheet" href="przychodnia.css">
</head>
<body>
    <div class="baner">
        <h1>PRAKTYKA LEKARZA RODZINNEGO</h1>
    </div>
    <div class="lewy">
        <h3>LISTA PACJENTOW</h3>
        <?php

        $connect = mysqli_connect("localhost","root","","przychodnia");

        $sql = "SELECT id, imie, nazwisko FROM pacjenci";

        $query = mysqli_query($connect,$sql);

        while($tablica = mysqli_fetch_row($query)){
            echo $tablica[0].' '.$tablica[1].' '.$tablica[2].'<br>';
        }

        mysqli_close($connect);

        ?>
        <br><br>

        <form action="pacjent.php" method="POST">
        Podaj id<br>
        <input type="number" name="numer">
        <input type="submit" value="Pokaż dane">

        </form>

        <h3>LEKARZE</h3>
            <ul>
                <li>pn - śr</li>
                    <ol>
                        <li>Anna Kwiatkowska</li>
                        <li>Jan Kowalewski</li>
                    </ol>
                <li>czw - pt</li>
                    <ol>
                        <li>Krzysztof Nowak</li>
                    </ol>
            </ul>
    </div>
    <div class="prawy">
        <h2>INFORMACJE SZCZEGÓŁOWE O PACJENCIE</h2>
        <p>Brak wybranego pacjenta</p>
    </div>
    <div class="stopka">
        <P>utworzone przez: JAAA!</P>
        <a href="kwerendy.txt">Pobierz plik z kwerendami</a>
    </div>
</body>
</html>