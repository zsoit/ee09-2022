# SQL

## ZAPYTANIA

###### XD

#### SELEKCJA
```SQL
• ORDER BY
  -> ASC (ascending) rosnąco.
  -> DESC (descending) malejąco

• SELECT DISTINC ... [usuwanie duplikatów]
• LIMIT [-- limit 10 ; na samym koncu]
• LIKE = (nazwisko like '%a' or nazwisko like 'a%' );
• IN(30,20);

//agregacja danych
• COUNT() - liczy wystapienia;
• SUM() - sumuje;
• MIN() - zwraca najsmiejsza wartosc;
• MAX() - zwraca najwieksza wartosc;
• AVG() - wylicza srednia;
• timestampdiff(year, DataUrodzenia, Now());


```

#### DODANIE REKORDU
```sql
//przyklad1
INSERT INTO informatyk values (1,'Jan','Kowalski','4TI');

//przyklad2
INSERT INTO przyloty
	(`id`, `kierunek`, `czas`, `dzien`, 'id_samolotu')
VALUES
	(NULL,`Warszawa`, `21:46:28`, `2022-01-15`, `3`)
;
```
#### USUWANIE REKORDU
```sql
DELETE FROM pracownicy WHERE IdPracownika = 110;
```

#### EDYCJA REKORDU
```SQL
UPDATE pracownicy SET nazwisko = 'KOWALSKI' WHERE IdPracownika = 100;
```

#### USUWANIE TABELI
```sql
DROP TABLE KLASA;
 ```

#### CZYSZCZENMIE TABELI
```sql
TRUNCATE TABLE rozgrywka;
 ```

 #### TWORZENIE TABELI
```sql
CREATE TABLE informatyk
(
	id int primary key AUTO_INCREMENT,
	Imie varchar(20) NOT NULL,
	Nazwisko varchar(30) NOT NULL,
	Klasa varchar(30) NOT NULL DEFAULT '4TI',
	Pseudonim varchar(20) NOT NULL UNIQUE
)
;

 ```
#### TWORZENIE UŻYTKOWNIKA
```SQL

CREATE user kasia@localhost IDENTIFIED by 'qwerty';

//ZMIANA
SET password for katarzyna = 'qwerty2';

//UPRAWNIENIA
GRANT ALL PRIVILEGES on baza.* to piotr@localhost;
GRANT CREATE, ALTER, SELECT ON egzamin.liga TO ' fryzjer'@'localhost'

```

## ZAPYTANIE

```sql


-- poszę policzyć ile jest powiatów w każdym województwie
select
	w.nazwa,
	count(p.idpowiatu)
from
	powiaty as p
join
	wojewodztwa as w
on
	w.idwojewodztwa=p.idwojewodztwa
group by w.nazwa
;
--Proszę policzyć ile jest gmin w każdym powiecie województwa pomorskiego lub lubuskiego
select
p.nazwa, p.idwojewodztwa, count(*)
from
gminy as g
join
powiaty as p
on
g.idpowiatu=p.idpowiatu
where p.idwojewodztwa = 11 or p.idwojewodztwa = 5
group by p.nazwa
order by p.idwojewodztwa
;

```

## TEORIA

#### TYPY RELACJI
```
==> 1:1 (jeden do jeden) = A ma tylko jeden B
SAMOCHOD1 <=> KARTA_POJAZDU1
CZŁOWIEK1 <=> PESEL1

==> 1:n (jeden do wielu) = A wiele B, ale B ma jedno A
KLIENT1 <=> FAKTURA1, FAKTURA2
FAKTURA1 <=> KLIENT
FAKTURA2 <=> KLIENT

PLATFORMA <=> GRA1, GRA2 ...
GRA <=> PLATFORME1!
PS4 <=> TheLastOfUS, GodOfWar
TheLastOfUS <=> PS4!
GodOfWar <=> PS4!

DREDZIARZ1 <=> DRED1, DRED2, DRED3
DRED1 <=> DREDZIARZ1
DRED2 <=> DREDZIARZ1
DRED3 <=> DREDZIARZ1


==> n:m (wiele do wielu)- KONIECZNIE WYMAGA stworzenia tabeli pośredniej (TABELA KRZYŻOWA/ŁĄCZNIKOWA)
łączącej klucze obu tabel, stosuje sie klucz obcy, relacje wymuszone lub opcjonalne

przykład relacji:
Zamowienia <=> SzczegolyZamowienia <=> Produkt

SzczegolyZamowienia to tabela, która to łączy, krzyżowa, taki adapter, co łączy ID
IdZamowienia, IdProduktu, Ilosc, Rabat

```

####  NORMALIZACJA
```
https://oracledev.pl/normalizacja-baz-danych/

tworzymy baze dla sklepu;

1.Wymyślamy jeden pojemnik zbiorczy, jedna tabele: np.zamowienia
2.Wymyślamy jakie mogą być Atrybuty(NazwaKlienta, Adres, Cena itp.)
3.NIE TWORZYMY RELACJI ANI TABEL, tylko elementarne informacje


Przechodzimy do normalizacji:

// I. postać normalna:

=> gdy każda kolumna jest atomowa tzn. nie zawiera list i dane są niepodzielne.

1.Dzielimy kolumne Adres na kilka kolumn: Ulica, Nr Bloku, Nr Mieszkania, Miasto

> Przed 1NF:
Adres
ul.Henryka 5, Warszawa

> Po 1NF:
Ulica | Nr Bloku | Nr Mieszkania | Miasto
Henryka | 5 | | Warszawa


// II. postać normalna:
=> spełnia warunki postaci I
=> wszystkie kolumny w tabeli zależą tylko od klucza

1.wyodrębiamy z jedenj tabeli, trzy kolejne tabele:
Klient, Detale, Produkty - tym sposobem mamy 4 tabele
2. dodajemy ID dla tych tabel, jednocześnie usuwamy zduplikowane dane, bo operujemy już tylko na kluczach.
3. Zmiana nazwy ulic na przykład z Jan Paweł II na JP2 jest prosta, bo wystraczy zmiana jednego rekordu.
4. Tabela Zamowienia stała się tabelą krzyżową, relacja n:m wiele do wielu

CO ZYSKALIŚMY:
Dzięki wydzieleniu jednej tabeli zamówienia na 3 mniejsze:
-> unikalne ID dla każdej z tabeli
-> usunięcie zduplikowanych tabel
-> łatwa edycja danych, zmiana dokonana w jednym rekordzie aktualiazuje się wszędzie


// III. postać normalna:
=> spełnia warunki postaci I oraz II
=> kolumna nie jest zależna od innej kolumny tylko od klucza!!!!!

w przykladzie gdzie tabela pizza ma kolumne rozmiar, cena gdzie cena nie jest zalezna od id tylko od rozmiaru, aby to naprawic musimy wydzielic cena do osobnej tabeli

1.można USUNAC niepotrzebne kolumny, które można na przykład
mozna wyliczyć takie jak brutto,
bo brutto mozna obliczyc , brutto = netto+vat,
oraz bo nie zależy od ID a od kolumny NETTO



```

#### JĘZYKI SQL

```
//kwerendy

ALTER = MODYFIKACJA STRUKTURY
UPDATE = AKTUALIZACJA DANYCH


DROP =
DELETE =

SELECT = WYBIERANIE
INSERT = WSTAWIANIE


```
#### POJĘCIA BAZY DANYCH
```

0.RELACJA = TABELA = KLASA
Struktura danych, przechowuje infomracje o obiektach określonego typu.
Tabela składa sie z rekordów, kolumn, danych

1.KROTKA = WIERSZ = REKORD
OBIEKT OPISANY ATRUBYBUTAMI DANEJ RELACJI

2.ATRYBUT=KOLUMNA
Masz człowieka(ENCJA), on ma atrybuty:
 imie, nazwisko, plec, pesel



4.ENCJA
cos co mozna opisac:
osoba (imie, nazwisko, pesel), pojazd(wysokosc,marka,silnik)


=============
CROSS JOIN
iloczyn kartezjanski to problem jak sa tabele i
wszystkie rekordy sie polacza ze soba,
taka orgie zrobia kazdy z kazdym,
jak masz dwie tabele po 3 redordy to wyjdzioe 3*3
AxB
=============

$wszystko = rekordy, które mają wszystkie dane dwoch tabel;

-inner join (join) zwraca TYLKO  $wszystko;

-left join, zwraca $wszystko + kolumne, które nie mają atrybutu prawej tabeli

-right join, zwraca wszystko + kolumne, które nie mają atrubutu lewej tabeli

```

