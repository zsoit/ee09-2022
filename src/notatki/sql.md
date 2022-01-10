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

//AGREGACJA DANYCH
• COUNT() - liczy wystąpienia;
• SUM() - sumuje;
• MIN() - zwraca najmiejszą wartość;
• MAX() - zwraca najwiekszą wartość;
• AVG() - wylicza średnią;
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
//TWORZENIE UŻYTKOWNIKA
CREATE user kasia@localhost IDENTIFIED by 'qwerty';

//ZMIANA
SET password for katarzyna = 'qwerty2';

//UPRAWNIENIA
GRANT ALL PRIVILEGES on baza.* to piotr@localhost;
GRANT CREATE, ALTER, SELECT ON egzamin.liga TO ' fryzjer'@'localhost'

```

#### EDYCJA STRUKTURY TABELI
• KOLUMNA=POLE=ATRYBUT\
• OPERACJE W ISTNIEJĄCEJ TABELI!
```SQL

//DODAWANIE KOLUMNY
ALTER TABLE pracownicy ADD rozmiar_buta VARCHAR(10);


//ZMIANA TYPU KOLUMNY
ALTER TABLE pracownicy MODIFY rozmiar_buta INT;

//USUWANIE KOLUMNY
ALTER TABLE pracownicy DROP rozmiar_buta;

//ZMIANA NAZWY KOLUMNY
ALTER TABLE pracownicy RENAME zatrudnieni;


```



## ZAPYTANIE

```sql


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

