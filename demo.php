<table>
    <tr><td>Imię:</td> <td><input type='text' id='imie'></td></tr>
    <tr><td>Nazwisko:</td> <td><input type='text' id='nazwisko'></td></tr>
    <tr><td>E-mail:</td> <td><input type='text' id='email'></td></tr>
    <tr><td>Usługa:</td> <td><textarea id='usluga'></textarea></td></tr>
    <tr><td></td> <td><input type='checkbox' id='zgoda'>Zapoznałam/em się z regulaminem</td></tr>
    <tr><td></td> <td><input type='reset' value='Resetuj'><input type='button' value='Prześlij' onclick='Przeslij()'></td></tr>
</table>
<p id='wynik'></p>
<hr>

<script>
function Przeslij(){
var imie = document.getElementById('imie').value;
var nazwisko = document.getElementById('nazwisko').value;
var usluga = document.getElementById('usluga').value;
var zgoda = document.getElementById('zgoda');

if (zgoda.checked)
{
    document.getElementById('wynik').innerHTML= imie.toUpperCase() +' '+nazwisko.toUpperCase() +'</br> Treść Twojej sprawy: '+usluga+'</br> Na podany e-mail zostanie wysłana oferta'}
else {
    document.getElementById('wynik').innerHTML='<span style="color:red">'+'Musisz się zapozanć z regulaminem'+'</span>'
}
}
</script>