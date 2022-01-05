# SQL

## ZAPYTANIA

###### XD

#### SELEKCJA
```SQL
• ORDER BY
  -> ASC (ascending) rosnąco.
  -> DESC (descending) malejąco

• LIMIT [-- limit 10 ; na samym koncu]
• LIKE = (nazwisko like '%a' or nazwisko like 'a%' );
• IN(30,20);

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
GRANT ALL PRIVILEGES on tabela.* to piotr@localhost;
GRANT CREATE, ALTER, SELECT ON egzamin.liga TO ' fryzjer'@'localhost'

```

## ZAPYTANIE

```sql
//zapytania mysql

---Proszę wyświetlić wszystkie nazwy powiatów i nazwę województwa, należące do województwa śląskiego.
select
	powiaty.nazwa
from
	powiaty
join
	wojewodztwa
on
	wojewodztwa.idwojewodztwa=powiaty.idwojewodztwa
where
	wojewodztwa.nazwa='slaskie'
;
---Proszę wyświetlić wszystkie województwa, których nazwa zaczyna się na literę P.
select
	nazwa
from
	wojewodztwa
where
	wojewodztwa.nazwa like 'p%'
;
--Proszę policzyć ile jest powiatów w każdym województwie
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
---Proszę wyświetlić wszystkich obserawotrów (imię, nazwisko, płeć oraz rok urodzenia) z tabeli obserwatorzy, którzy:
---urodzili się w latach 1980-1985 i są mężczyznami
---albo
---urodzili się w latach 1990-1993 i są kobietami

select
	imie,
	nazwisko,
	czykobieta,
	dataurodzenia
from
	obserwatorzy
where
	(year(dataurodzenia)between 1980 and 1985 and czykobieta = false)
	or
	(dataurodzenia between '1990-01-01' and '1993-12-31' and czykobieta = 1)
order by year
	(dataurodzenia)
;


//złączenia tabel
select
	g.NazwaPL, g.idstatusu
from
	Rzedy as rz
join
	Rodziny as r
on
	r.idrzedu = rz.IdRzedu
join
	Gatunki as g
on
	g.IdRodziny = r.Idrodziny
join
	StatusyOchrony as s
on
	g.IdStatusu = s.IdStatusu
join
	TypyPobytu as t
on
	g.IdTypu = t.IdTypu
where	(
		g.nazwaPL like 'j%'
		or
		g.nazwaPL like 'r%'
		)

	and
	s.nazwa = "pod ścisłą ochroną"

	and
	t.nazwa= "zalatuje"
;


//tworzenie bazy danych i tabeli
create table auto_domyslna
(
id int PRIMARY key auto_INCREMENT,
imie varchar(15) not null,
nazwisko VARCHAR(40) not null,
pesel char(11) UNIQUE,
telefon char(9) DEFAULT 'brak'
)
---------------------------------------
create database szkola2021;

use szkola2021;

create table informatyk
(
idInformatyk int PRIMARY key,
Imie varchar(20),
Nazwisko varchar(30),
Klasa varchar(30)
)
//dodwanie informacji do bazy
INSERT INTO informatyk values (1,'Jan','Kowalski','4TI');

INSERT INTO informatyk -nazwa tabeli values (1,'Jan','Kowalski','4TI')-wartości ;

//tworzenie użytkowników i dodawanie uprawnien

create user kasia@localhost IDENTIFIED by 'qwerty'; //tworzy uzytkownika z hasłem qwerty
rename user kasia to katarzyna ; zmienia nazwe z kasia na katarzyna
create user katarzyna@localhost by 'qwerty2';
set password for katarzyna = 'qwerty2';
create user piotr@localhost IDENTIFIED by 'qwerty' GRANT all PRIVILEGES on *.* to piotr@localhost;
//
```







