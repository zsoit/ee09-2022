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




