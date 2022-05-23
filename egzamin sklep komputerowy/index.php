<!Doctype HTML>
<html lang="pl">
<head>
<meta charset="utf-8">
<title>Nasz sklep komputerowy</title>
<link rel="stylesheet" href="styl8.css">
</head>
<body>

<div id="menu">
	<a href="index.php">Główna</a>
	<a href="procesory.html">Procesory</a>
	<a href="ram.html">RAM</a>
	<a href="grafika.html">Grafika</a>

</div>
<div id="logo">
	<h2>Podzespoły komputerowe</h2>

</div>
<div id="glowny">
	<h1>Dzisiejsze promocje</h1>
	<table>
			<th>NUMER</th><th>NAZWA PODZESPOLU</th><th>OPIS</th><th>CENA</th>
			<?php
				$connect = mysqli_connect('localhost','root','','sklep');
				
				$sql = "SELECT id, nazwa, opis, cena FROM podzespoly WHERE cena<1000";
			
				$query = mysqli_query($connect,$sql);
				
				while($tablica = mysqli_fetch_assoc($query)){
					echo '<tr><td>'.$tablica['id'].'</td><td>'
					.$tablica['nazwa'].'</td><td>'
					.$tablica['opis'].'</td><td align="right">'
					.$tablica['cena'].'</td></tr>';
				}
				
				mysqli_close($connect);
			?>
	</table>

</div>
<footer>
	<img src="scalak.jpg" alt="promocje na procesory">

</footer>
<footer>
	<h4>Nasz sklep komputerowy</h4>
	<p>Współpracujemy z hurtownia<a href="https://www.edata.pl/" target="blank">edata</a></p>

</footer>
<footer>
	<p>zadzwon: 601 602 603</p>

</footer>
<footer>
	<p>Strone wykonal PESEL: Radosław Góralik 4T1</p>

</footer>


</body>
</html>