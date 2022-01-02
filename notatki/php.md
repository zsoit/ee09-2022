# PHP

## POŁACZENIE Z BAZĄ DANYCH

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







