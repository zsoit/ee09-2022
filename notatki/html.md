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


</body>
</html>

```

## ZNACZNIKI

nagłówki danego stopnia
```<h1> - <h6>```

akapit (paragraf)
```<p>```

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


## HTML5
```html
<header>
<nav>
    <main>
    <section>
    <article>
    <aside>
<footer>

<details>
    <summary>

<figure>
    <figcaption>

<fieldset>
    <legend>

```

## FORMULARZE

```html

<input type="text" name="pole-tekstowe">
<input type="numer" name="pole-tekstowe">


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