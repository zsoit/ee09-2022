# JavaScript
- [Zmiana obrazka](#0)
- [Zmiana stylu](#1)
- [Sprawdz haslo](#2)
- [Sprawdz cene](#3)
- [Ciag arytmetyczny](#4)
- [Koszt dostawy](#5)
- [Zgoda na regulamin](#6)
- [Koszt dostawy](#7)
- [Wesele](#8)

## TEORIA

ZDARZENIA
```JS
onclick //klikniecie
onmouseover //najechanie myszką na obiekt
onmouseout //odjechanie myszką od obiektu

```

WŁAŚCIWOŚCI HTML
```JS
.checked
.value
.innerHTML
.src
.style
.length //dlugosc_znakow
```

FUNKCJE
```js
.split("") //zmienia, tekst na tablice znaków

.toUpperCase() //duze_litery
.toLowerCase() //male_litery

isNan() //sprawdza_czy_nie_jest_liczba
parseInt() //liczba całkowita
parseFloat() //zmiennoprzecinkowa
Number() //typ numeryczny
Math.sqr() //pierwiastek
Math.pow() //potega
```
###### 0
## Zmiana obrazka po najechaniu


```html
<img src="obrazek1.jpg" id="obraz" onmouseover="zmien()" onmouseout="wroc()">

<script>
    var obraz = document.getElementById('obraz');

    function zmien()
    {
        obraz.src = "obrazek2.jpg";
    }

    function wroc()
    {
        obraz.src = "obrazek1.jpg";
    }
</script>

```
###### 1
## Zmiana stylu


```html

<script>
    var element = document.getElementById('#element');
    element.style.color="red";
    element.style.backgroundColor = "black";
    element.style.fontSize = "48px";
    element.style.fontStyle = 'italic';
</script>

```
###### 2
## Sprawdź hasło


#### - 7 lub więcej znaków i jedna cyfra - dobre
#### - od 4 do 6 znaków i jedna cyfra - średnie
#### - inne przypadki - słabe

```html
    <input type="password" id="haslo"> <br>
    <button onclick="sprawdzHaslo()">SPRAWDZ HASLO</button>
    <p id="wynik"></p>
    <script>
    function sprawdzHaslo() {
        var haslo = document.getElementById('haslo');
        var wynik = document.getElementById('wynik');
        var dlugosc_hasla = haslo.value.length;
        // sprawdza_czy_haslo_ma_cyfre
        var czy_cyfra = false;
        var tablica = haslo.value.split("")
        for (var i = 0; i < dlugosc_hasla; i++) {
            console.log(tablica[i]);
            if (!isNaN(tablica[i])) czy_cyfra = true;
        }

        if (dlugosc_hasla >= 7 && czy_cyfra == true) {
            wynik.innerHTML = "DOBRE";
        } else if (dlugosc_hasla >= 4 && dlugosc_hasla <= 6 && czy_cyfra == true) {
            wynik.innerHTML = "ŚREDNIE";
        } else {
            wynik.innerHTML = "SŁABE";
        }
    }
    </script>

```
###### 3
## Sprawdź cene

#### Oblicza łączną cenę zabiegów wybranych z pola checkbox

```html
<input type="checkbox" id="piling">Pilling<br>
<input type="checkbox" id="maska">Maska<br>
<input type="checkbox" id="masaz">Masaż twarzy<br>
<input type="checkbox" id="regulacja"> Regulacja brwi<br>
<button onclick="oblicz_cene()">Sprawdź cenę</button><br>
<p id="wynik"></p>

<script>
    var wynik = document.getElementById('wynik');
    var piling = document.getElementById('piling')
    var maska = document.getElementById('maska')
    var masaz = document.getElementById('masaz')
    var regulacja = document.getElementById('regulacja');

    function oblicz_cene() {
        var cena = 0;
        if (piling.checked) {
            cena += 45;
        }
        if (maska.checked) {
            cena += 30;
        }
        if (masaz.checked) {
            cena += 20;
        }
        if (regulacja.checked) {
            cena += 5;
        }
        wynik.innerHTML = 'Cena zabiegów: ' + cena;
    }
</script>

```
###### 4
## Ciąg arytmetyczny

#### W pętli kazdy kolejny wyraz ciągu to wartosc poprzeniedniego ciągu + r

```html
<div id="prawy">
    <h2>Generowanie ciągu arytmetycznego</h2>
    Pierwszy wyraz A1: <input type="number" id="a1"><br>
    Różnica ciągu R: <input type="number" id="r"><br>
    Liczba wyrazów ciągu: <input type="number" id="n"><br>
    <button onclick="ciag()">Generuj Ciąg</button><br>
    <span id="wynik"></span>
</div>

<script>
    function ciag() {

        var a1 = parseInt(document.getElementById('a1').value);
        var r = parseInt(document.getElementById('r').value);
        var n = parseInt(document.getElementById('n').value);
        var wynik = "Ciąg artmetyczny zawiera wyrazy: ";

        wynik += a1;
        for (var i = 1; i < n; i++) {
            a1 = a1 + r;
            wynik += ", " + a1;
        }
        document.getElementById('wynik').innerHTML = wynik;
    }
</script>
```
###### 5
## Własny kolor, wybrany żelek


#### Po naciśnięcu przycisku "zamów" kolor drugiego przycisku zmienia się na wybrany kolor RGB z formularza

```html
<div id="prawy">
    Podaj numer kształtu:
    <form>
        <input type="number" id="ksztalt"><br> Skomponuj swój kolor, podaj RGB:<br>
        R: <input type="number" id="r">
        G: <input type="number" id="g">
        B: <input type="number" id="b"><br>
        <input type="button" onclick="oblicz()" value="Zamów">
    </form>

    <p id="tekst">Wybrany kształt</p>
    <button id="kolor">Wybrany kolor</button>
</div>

<script>
    function oblicz() {
        var ksztalt = document.getElementById("ksztalt").value;
        var przycisk = document.getElementById("tekst");

        if (ksztalt == 1) {
            przycisk.innerHTML = "Zamówiłeś żelka: miś";
        } else if (ksztalt == 2) {
            przycisk.innerHTML = "Zamówiłeś żelka: żabka";
        } else if (ksztalt == 3) {
            przycisk.innerHTML = "Zamówiłeś żelka: serce";
        } else {
            przycisk.innerHTML = "Zamówiłeś żelka: inny kształt";
        }

        var PrzyciskKolor = document.getElementById("kolor");

        var r = document.getElementById("r").value;
        var g = document.getElementById("g").value;
        var b = document.getElementById("b").value;

        PrzyciskKolor.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
```
###### 6
## Zgoda na regulamin


```html
Imię:<input type='text' id='imie'> <br>
Nazwisko:<input type='text' id='nazwisko'> <br>
E-mail:<input type='text' id='email'> <br>
Usługa:</td> <><textarea id='usluga'></textarea> <br>
<input type='checkbox' id='zgoda'>
Zapoznałam/em się z regulaminem <br>
<input type='reset' value='Resetuj'>
<input type='button' value='Prześlij' onclick='Przeslij()'>

<p id='wynik'></p>
<hr>

<script>
function Przeslij(){
    var imie = document.getElementById('imie').value;
    var nazwisko = document.getElementById('nazwisko').value;
    var usluga = document.getElementById('usluga').value;
    var zgoda = document.getElementById('zgoda');
    var wynik = document.getElementById('wynik');

    var tresc1 = imie.toUpperCase()
    +' '
    +nazwisko.toUpperCase() +'</br> Treść Twojej sprawy: '
    +usluga+'</br> Na podany e-mail zostanie wysłana oferta'}
    ;

    var tresc2 = '<span style="color:red">Musisz się zapozanć z regulaminem</span>' ;

    if (zgoda.checked)
    {
        wynik.innerHTML=tresc1;


    else {
        wynik.getElementById('wynik').innerHTML=tresc2;
    }
}
</script>
```


###### 7
## Koszt dostawy

```html
<h3>Oblicz koszt dostawy</h3>
    <form>
    <input type='checkbox' id='zg'> Jestem z Zielonej Góry
    <p>albo</p>
    Podaj liczbę kilometrów od Zielonej Góry <input type='number' id='km'></br>
    <input type='button' value='Oblicz' onclick='Oblicz()'>
    </form>
    <p id='wynik'></p>
    <script>
        function Oblicz(){
            var liczba=document.getElementById('km');
            var stan=document.getElementById('zg');
            var wynik = document.getElementById('wynik');

            if (stan.checked){
                wynik.innerHTML='Dowieziemy Twoją pizzę za darmo';}
            else {
                var koszt = (liczba.value * 2);
                wynik.innerHTML='Dowóz będzie Cię kosztował ' + koszt + ' złotych';}
        }
    </script>

```


###### 8
## Wesele
```html
<h2>Ile będzie kosztowało moje wesele?</h2>
Podaj liczbe gości: <input type='number' id='goscie'/></br>
<input type='checkbox' id='poprawiny'/>Wesele z poprawinami?</br>
<button onClick='Oblicz()'>Oblicz koszt</button></br>
<p id='koszt'></p>
<script>
function Oblicz()
{
    var goscie=parseInt(document.getElementById('goscie').value);
    var poprawiny=document.getElementById('poprawiny');
    var koszt = document.getElementById('koszt');
    var cena=0;

    if (!poprawiny.checked){
        cena = goscie*100;
    }
    else {
        cena=(goscie*100)*1.30;
    }


    if (isNaN(goscie)) {
        koszt.innerHTML = 'Nie podano liczby gości';
    }
    else {
        koszt.innerHTML = 'Koszt Twojego wesela to '+cena +' złotych';
    }
}
</script>
```
