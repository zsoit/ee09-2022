# JavaScript


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

