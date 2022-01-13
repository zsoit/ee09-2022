# SQL

## ZAPYTANIA

###### XD

#### SELEKCJA
```SQL
• ORDER BY
  -> ASC (ascending) rosnąco.
  -> DESC (descending) malejąco

• SELECT DISTINCT ... [usuwanie duplikatów]
• LIMIT [... limit 10 ; na samym końcu]
• LIKE = (nazwisko like '%a' or nazwisko like 'a%');
• IN(30,20);
```
#### FUNKCJE AGREGUJĄCE
```
• COUNT() - liczy wystąpienia;
• SUM() - sumuje;
• MIN() - zwraca najmiejszą wartość;
• MAX() - zwraca najwiekszą wartość;
• AVG() - wylicza średnią;
• ROUND(5.7876, 2) - zaokrogla liczby;
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
//TWORZENIE_UŻYTKOWNIKA
CREATE user kasia@localhost IDENTIFIED by 'qwerty';

//ZMIANA_HASŁA
SET password for katarzyna = 'qwerty2';

//USUNIĘCIE_UŻYTKOWNIKA
DROP USER kasia@localhost;

```

#### UPRAWNIENIA
```SQL
//NADAWANIE_UPRAWNIEN
GRANT ALL PRIVILEGES on baza.* to piotr@localhost;
GRANT CREATE, ALTER, SELECT ON egzamin.liga TO fryzjer@localhost;

//ODBIERANIE_UPRAWNIEŃ
REVOKE ALL ON egzamin.* FROM piotr@localhost;

//WYŚWIETLANIE_UPRAWNIEŃ
SHOW GRANTS FOR piotr@localhost;

```

#### EDYCJA STRUKTURY TABELI
OPERACJE W ISTNIEJĄCEJ TABELI!
```SQL
• KOLUMNA=POLE=ATRYBUT

//DODAWANIE_KOLUMNY
ALTER TABLE pracownicy ADD rozmiar_buta VARCHAR(10);

//ZMIANA_TYPU_KOLUMNY
ALTER TABLE pracownicy MODIFY rozmiar_buta INT;

//USUWANIE_KOLUMNY
ALTER TABLE pracownicy DROP rozmiar_buta;

//ZMIANA_NAZWY_KOLUMNY
ALTER TABLE pracownicy RENAME zatrudnieni;

```

## Grupowanie
```sql
[...] GROUP BY Gmina HAVING Gmina like 'a%';
Having takie where, ale dla elementu po którym grupujemy

//poszę policzyć ile jest powiatów w każdym województwie
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

//Proszę policzyć ile jest gmin w każdym powiecie
województwa pomorskiego lub lubuskiego
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

## TEORIA MYSQL

#### OPERATORY
```SQL
---ARYTMETYCZNE
• >=  wiekszy badz rowny
• <=  mnniejszy bądź równy
• = równy
• !=, <> różny od
• %, MOD  reszta z dzielenia modulu

---LOGICZNE
• AND, &&
cena>100 and cena < 200;

• OR, ||
cena > 100 or cena< 200;

• BETWEEN
cena between 100 and 200;

• IN
picie in('kawa','herbata');

• NOT IN
picie not in('kawa','herbata');

• IS
herbata is true; //lub flase;

• LIKE = (nazwisko like '%a' or nazwisko like 'a%' );
```
#### NAWIGACJA
```SQL
• show databases;
• use nazwa_bazy;
• conect nazwa_bazy;
• show tables;
• describe nazwa_tabeli;
```
#### FUNKCJE TEKSTOWE
```SQL
-- MANIPULACJA NA CIĄGACH
• reverse(); = odwraca znaki
• left(nazwisko, 2)
• right(nazwisko, 2)
• mid('Ala ma kota',2,5),
• substr(),substring()

• LPAD(nazwisko,20,'#');
• RPAD(nazwisko,20,'?');
• SPACE(12);
• REPEAT('-',10);

-- FUNKCJA CONCAT
• CONCAT() = łączenie ciągów
• CONCAT_WS('<---->',) = łączenie ciągów z separatorem

-- WIELKOSĆ LITER
• LOWER(),LCASE()= małe litery;
• UPPER(),UCASE() = duze litery;

-- DŁUGOSĆ CIĄGU
• length();
• bit_length();
• octet_length();
• char_length();
• character_length();
• TRIM() = usuwa puste znaki na poczatku i na koncu;
```
#### FUNKCJE DATY I CZASU
```SQL
• timestampdiff(year, DataUrodzenia, Now());

//access Dni: DateDiff('d';[DataWypozyczenia];Now())

---FUNKCJE NA REKORDACH
• hour(), minute(), second();
• day(), year(), month();
• dayname(), monthname();
• dayofWeek()

---AKTUALNY CZAS
• now() = DATA i CZAS;
• curtime() = CZAS;
• curdate() = DATA;
LUB
• current_time = CZAS
• current_data = DATA
```
#### INSTRUKCJE STERUJĄCE
```SQL
//IF
• IF(wiek>=18,'pelnoletni','niepelnoletni');

//SWICTH
--SKŁADNIA1
CASE
  WHEN cena=15 THEN 'ROWNA'
  WHEN cena>15 THEN 'WYZSZA'
  ELSE 'MNIEJSZA'
END

---SKŁADNIA2
CASE imie
  WHEN 'Janek' THEN 'Hej B.'
  WHEN 'Adam' THEN 'Hej A.'
  ELSE 'MNIEJSZA'
END

--IFNULL

Zwraca podaną wartość jeśli aktualna jest NULL
• IFNULL(stanowisko,'BRAK')

--NULLIF

W podaną wartość zwraca NULL
• NULLIF(imie,'JAN')

```