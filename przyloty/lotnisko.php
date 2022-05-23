<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Port Lotniczy</title>
    <link rel="stylesheet" href="styl5.css">
</head>
<body>
    <div class="baner1">
        <img src="zad5.png" alt="logo">
    </div>
    <div class="baner2">
        <h1>Przyloty</h1>
    </div>
    <div class="baner3">
        <h3>przydatne linki</h3>
        <a href="kwerendy.txt" target="blank">Pobierz</a>
    </div>
    <div class="glowny">
        <table>
            <th>czas</th><th>kierunek</th>
            <th>numer rejsu</th><th>status</th>
            
            <?php

            $connect = mysqli_connect("localhost","root","","egzamin");

            $sql = "SELECT nr_rejsu, kierunek, czas, status_lotu FROM przyloty ORDER BY czas ASC";

            $query = mysqli_query($connect,$sql);

            while($tablica = mysqli_fetch_row($query)){
                echo '<tr>
                <td>'.$tablica[2].'</td>
                <td>'.$tablica[1].'</td>
                <td>'.$tablica[0].'</td>
                <td>'.$tablica[3].'</td>
                </tr>';
            }


            mysqli_close($connect);

            ?>

        </table>
    </div>
    <div class="lewy">

    <?php

$cookie_pierwszy = "Dzień dobry ! Strona lotniska używa ciasteczek";

$cookie_drugie = "Witaj ponownie na lotnisku";

setcookie($cookie_pierwszy,$cookie_drugie,time()+3600*2);

if(isset($_COOKIE[$cookie_pierwszy])){
    echo '<p><b>'.$cookie_pierwszy.'</b></p>';
}
else{
    echo '<p><i>'.$cookie_drugie.'</i></p>';
}

    ?>

    </div>
    <div class="prawy">
        Autor: JAA!!
    </div>
</body>
</html>