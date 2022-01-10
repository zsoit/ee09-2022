# HTML

## META
```html

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Tytuł strony</title>
    <link rel="stylesheet" href="styl3.css">
</head>
<body>

    <img src="obrazek.jpg" alt="Opis jakiegoś obrazka">
    <a href="mailto:ja@portal.pl">Napisz do mnie</a>
    <a href="tel:+48123456789">Zadzwon do mnie</a>
    <a href="http://masno.pl" target="_blank">Otwiera się w nowej karcie!</a>


</body>
</html>

```

## ZNACZNIKI

nagłówki danego stopnia
```<h1> - <h6>```

akapit (paragraf)
```<p>```

przełamanie lini
```<br>```

linia pozioma
```<hr>```

odnośnik do strony
```<a href="strona.html">Strona</a>```

ordered list(lista numerowana)
```<ol>```

unordered list(lista nienumerowana), lista punktowa (nieuporządkowana)
```<ul> ```

czcionka pochylona
```<i> lub <em>```

czcionka pogrubiona
```<b> lub <strong>```

indeks dolny
```<sup>```

indeks górny
```<sub>```

Cytat blokowy
```<blockquote> ```

akronim(pod kursorem po najechaniu)
```<abbr> ```

tekst, który został usunięty |  wstawiony
``` <del> | <ins>```

## FORMULARZE

#### input type:
- text - pole tekstowe
- checkbox - pole zaznaczenia opcji (można zaznaczyć lub odznaczyć opcję)
- radio - pole wyboru (z grupy wybieramy tylko jedną)
- password - pole wprowadzania hasła (wprowadzane znaki nie są widoczne)
- file - możliwość dołączenia do formularza pliku, który zostanie przesłany na serwer
- submit - przycisk, uruchamiający wykonanie akcji zdefiniowanej w atrybucie "action"
- reset - przycisk, który usuwa wszystkie dane z formularza
- button - przycisk dowolnego przeznaczenia
- email, tel
- date - data w formacie dd-mm-rrrr
- color - wybieranie koloru
- range [min, max] - wskaznik, suwak wartosci

```html

<!-- LABEL - ETYKIETA DLA POLA -->
<label for="imie">Imię:</label>
<input type="text" name="imie" id="imie">

<label for="wiek">Wiek: </label>
<input type="numer" name="wiek" id="wiek">


<!-- lista rozwijana-->
<select name="lista">
    <option selected>Mężczyzna</option>
    <option>Kobieta</option>
</select>

<!-- większa ilość tekstu, np. komentarz na stornie internetowej -->
<textarea name="komentarz" rows="4" cols="20">Popisz sobie</textarea>



```

## TABELKI
#### colspan - rozszerza w poziomie
#### rowspan - rozszerza w pionie
#### th- nagłówek
#### tr- wiersz
#### td- komórka


```html

    <table border="1">
        <tr>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Wiek</th>
        </tr>
        <tr>
            <td>Masny</td>
            <td>Ben</td>
            <td>22</td>
        </tr>
        <tr>
            <td rowspan="2">Jan</td>
            <td>Kowalski</td>
            <td>48 lat</td>
        </tr>
        <tr>
            <td colspan="2">Nowak</td>
        </tr>
    </table>
```
## HTML5
#### SEMANTYCZNY HTML

naglowek
```<header> ```

nawigacja
```<nav> ```

glowna_czesc_storny
```<main>```

sekcja
```<section>```

boczna_sekcja
```<aside>```

artykul
```<article>```

stopka
```<footer>```

kontakt_info
```<address>```


```
<fieldset> //obramowanie
    <legend> //tekst_na_obramowaniu

//lista_definicji
<dl>
    <dt> //definicja
    <dd> //opis
```
#### AUDIO/VIDEO

- poster (miniaturka filmu)
- autoplay (automatyczne odtwarzanie)
- controls (wyświetlenie panelu sterowania wideo)
- loop (zapętlenie się odtwarzania wideo)
- autobuffer (automatyczne buforowanie wideo)
- preload (wczytywanie wideo wraz z załadowaniem strony)

```HTML
<video width="320" height="240" autoplay>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>

<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
</audio>

//video-html5 = MP4, Ogg, WebM

MP3	= audio/mpeg
OGG = audio/ogg
WAV = audio/wav

```