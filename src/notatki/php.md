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


## SKRYPT 1 - FORMULARZ
#### odbiera dane przesłane z formularza
-Jeśli pole edycyjne jest puste nie jest wykonywana żadna akcja
-Jeżeli wpisano dane skrypt wysyła do bazy danych zmodyfikowane zapytanie 2 tak, że w warunku
id pozycji jest równe wartości z pola edycyjnego
-Wyświetla zwrócone zapytaniem dane: imiona i nazwiska w paragrafach, jako elementy listy
punktowanej
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


## USUWANIE REKORDU

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







