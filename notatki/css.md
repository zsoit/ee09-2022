# CSS

## PODSTAWOWE
```css
/*marginesy wewnętrzne 10px */
padding: 10px;

/* marginesy zewnętrzne 10 px */
margin: 10px;

/* wyrównanie tekstu */
text-align: center;

/* zaokrąglenie rogów obramowania 10 px */
border-radius: 10px;

/* obramowanie */
border: 2px solid red;
            -dotted /*kropkowana*/
            -double /*podowjna*/

/* pozycjonoanie */
float: left/right;

/*reset float np. dla stopki i banera*/
clear: both;

width: 200px;
height: 1000px;

background-color:  red;
color: red;
font-family: Arial;
font-size: 12px;

```
## PSEOUDOKLASY
```css
/* po najechaniu myszką */
p:hover{
    color: red;
}

/* pierwsza linia paragrafu */
p:first-line {
    color: red;
}

/* pierwsza litera paragrafu */
p:first-letter {
    color: blue;
}


```

## INNE
```css
/*odstępy między literami */;
letter-spacing: 5px;

/*
- pierwsza litera zawsze wielka reszta normlanie
- tekst napisany kapitalikami (capitalize)
*/
text-transform: capitalize|uppercase|lowercase;


/* obramowanie tabeli i komórki jest połączone */
border-collapse: collapse;
|separate|initial|inherit

/* paski przesuwania (scroll) */
overflow: scroll;

/* lista punktowana kwadratem */
list-style-type: square;
|circle|decimal|;

/* styl czcionki: prosty, kursywa, pochylony */
font-style: normal|italic|oblique;

/* rodzaj pogrubienia czcionki */
font-weight: bold;


```

