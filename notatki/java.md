# JavaScript

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


```js
onclick
//klikniecie

onmouseover
//najechanie myszką na obiekt

onmouseout
//odjechanie myszką od obiektu

//WŁAŚCIWOŚCI HTML
.checked
.value
.innerHTML
.src
.style

//FUNKCJE TEKSTOWE
.length() //ile znakow ma tekst
.toUpperCase() //duze_litery
.toLowerCase() //male_litery

//FUNKJE LICZBOWE
parseInt() //liczba całkowita
parseFloat() //zmiennoprzecinkowa
Number() //typ numeryczny
Math.sqr() //pierwiastek
Math.pow() //potega
```