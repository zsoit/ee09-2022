# PHP

## POŁACZENIE Z BAZĄ DANYCH
#### Nawiązanie połączenia i  wyświetlenie danych z tabeli

```php
<?php
$pol = mysqli_connect('localhost','root','','baza');
if(!$pol) exit('Nie połączono z bazą!');
$sql = "SELECT Imie,Nazwisko FROM baza";
$zapytanie = mysqli_query($pol,$sql);
while($wynik = mysqli_fetch_assoc($zapytanie) )
{
    echo "<p>{$wynik['Imie']}</p>";
    echo "<p>{$wynik['Imie']}</p>";
}
mysqli_close($pol);
?>
```

## WYŚWIETLANIE
```php
// TABLICA ASOCJACYJNA, PO NAZWIE
while($wynik = mysqli_fetch_assoc($zap)){
    echo "
    <p>{$wynik['Imie']}</p>
    <p>{$wynik['Nazwisko']}</p>
    <p>{$wynik['Ksiazka']}</p>
    ";
}

//TABLICA NUMERYCZNA, PO INDEXIE
while($wynik = mysqli_fetch_row($zap)){
    echo "
    <p>{$wynik[0]}</p>
    <p>{$wynik[1]}</p>
    <p>{$wynik[2]}</p>
    ";
}

echo " <h1>Liczba zwróconych wierszy: " . mysqli_num_rows($zap) . "</h1>";

echo " <h1>Liczba zwróconych kolumn: " . mysqli_num_fileds($zap) . "</h1>";

```

## FUNKCJE PHP
```php
// FORMULARZE
$_POST[] //niewidoczne
$_GET[] //widoczne w paskku adresu ?strona=kontakt
$_COOKIE[] //tablica ciasteczek
isset() //sprawdza czy zmienna ma ustawiona wartosc
empty() //sprawdza czy zmienna jest pusta

array_key_exists($_POST['uzytkownik'],$hasla)
//sprawdza czy podany klucz istnijej w tablicy

str_replace(',','.',$zmienna) //zmienia znak
settype($zmienna, 'double') //ustawia typ zmiennej
round($zmienna, 3) //zaakrogla zmienna

substr('Masny ben',6) //ucina znaki z przodu
trim() - //Usuwa białe,puste znaki z początku oraz końca

rand(1, 49) //zwraca losowa liczbe z przedzialu dwoch liczb
sort($nazwa_tablicy) //sortowanie rosnące
rsort($nazwa_tablicy //sortowanie malejące

date('Y-m-d') //zwraca dane w podanym formacie

```

## TWORZENIE CIASTECZEK
#### setcookie($nazwa,$wartosc,$czas)
Przykład 1
```php
<?php
$nazwa = "komunikat";
$wartosc = "informacja o ciasteczkach";

if(isset($_COOKIE[$nazwa]))
{
    echo "<p><b>Miło nam że nas znowu odwiedziłeś!</b></p>";
}
else{
    setcookie($nazwa,$wartosc,time()+3600);
    echo "<p><i>Dzień dobry! Sprawdź regulamin naszej strony!</i></p>";
}
?>
```

Przykład 2
```php

<?php
if(isset($_COOKIE["ciasteczko"]))
{
    echo "<i>Witamj ponowien na stronie lotniska</i>";
}
else
{
    $nazwa="ciasteczko";
    $wartosc="1";
    $czas=time()+7200;
    setcookie($nazwa,$wartosc,$czas);
    echo "<b>Dzień dobry strona używa ciasteczek</b>";
}
?>
```

## USUWANIE REKORDU

```php
//odnośnik do usunięcia
//a href="?co=usun&id={wynik['id']}"
<?php
$sql = "SELECT id,Imie FROM baza";
$zapytanie = mysqli_query($pol,$sql);
while($wynik = mysqli_fetch_assoc($zapytanie) )
{
    echo "<p>{$wynik['Imie']} {}</p>";
    echo "<a href='?co=usun&id={$wynik['id']}'>Usuń rekord</a>";
}
?>

//usunięcie rekordu
<?php
if(isset($_GET['co']))
{
    if($_GET['co']=="usun")
    {
        $zap="DELETE FROM zawody_wedkarskie WHERE id = {$_GET['id']}";
        mysqli_query($pol,$zap) or die("BŁĄd w usuwaniu");
        echo"usunięto rekord";
    }
}
?>
```

## DODANIE REKORDU

#### Przykład 1 - wędkarstwo
```PHP

<form method="POST" action="zawody.php">
    Łowisko: <input type="text" name="lowisko"> <br>
    Data: <input type="text" name="data" > <br>
    Sędzia: <input type="text" name="sedzia"> <br>
    <input type="submit" value="dodaj"> <br>
</form>

<?php
if(
    isset($_POST['lowisko']) AND
    isset($_POST['data']) and
    isset($_POST['sedzia'])
)
{

    $lowisko=$_POST['lowisko'];
    $data=$_POST['data'];
    $sedzia = $_POST['sedzia'];

    $zap="INSERT INTO `zawody_wedkarskie`
    (`id`,`Karty_wedkarskie_id`, `Lowisko_id`, `data_zawodow`, `sedzia`)
    VALUES(NULL,0,'$lowisko','$data','$sedzia')
    ;";
    mysqli_query($pol,$zap) or die(mysqli_error($pol));
    echo"Dodano $lowisko, $data, $sedzia";
?>

}
```
#### Przykład 2 BMI
```php
<h2>Podaj wagę i wzrost</h2>
<form action="bmi.php" method="POST">
    <label for="waga">Waga: </label>
    <input type="number" name="waga" min="1"> <br>
    <label for="wzrost">Wzrost w cm: </label>
    <input type="number" name="wzrost" min="1"> <br>
    <input type="submit" value="Oblicz i zapamiętaj wynik">
</form>
<?php
if( isset($_POST['waga']) && isset($_POST['wzrost']) ){
    $waga = $_POST['waga'];
    $wzrost = $_POST['wzrost'];
    $bmi = $waga/($wzrost*$wzrost);
    $bmi = $bmi*10000;
    echo "Twoja waga: " . $waga . ", Twój wzrost: "
    . $wzrost . "<br> BMI wynosi: " . $bmi;

    if($bmi>=0 && $bmi<=18)  $bmi_id=1;
    if($bmi>=19 && $bmi<=25)  $bmi_id=2;
    if($bmi>=26 && $bmi<=30)  $bmi_id=3;
    if($bmi>=31 && $bmi<=100)  $bmi_id=4;

    $data_pomiaru = date('Y-m-d');
    $wynik = $bmi;

    $sql2 = "INSERT INTO wynik VALUES('','$bmi_id','$data_pomiaru','$bmi')";

    mysqli_query($polaczenie, $sql2);
}

```


## Wyświetlanie po ID

```php
<p>Podaj pozycje zawodników (1-bramkarze, 2-obrońcy, 3-pomocnicy, 4-napastnicy):</p>
<form action="futbol.php" method="POST">
    <input type="number" name="id">
    <input type="submit" value="Sprawdz">
</form>
<ul>
    <!-- skrypt -->
    <?php
    if(isset($_POST['id']))
    {
        $sql = "
        select imie, nazwisko
        from zawodnik
        where
        pozycja_id={$_POST['id']}"
        ;
        $res = mysqli_query($db,$sql);
        while($row = mysqli_fetch_array($res)){
            echo "
            <li>
                <p>{$row['imie']} {$row['nazwisko']}</p>
            </li>
            ";
        }

    }
    ?>
</ul>


```




