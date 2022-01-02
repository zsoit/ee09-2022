const css = document.querySelector('#css')
const html = document.querySelector('#html')
const php = document.querySelector('#php')
const js = document.querySelector('#js')
const sql = document.querySelector('#sql')

const active_now = document.querySelectorAll('.active_nav')

const classesArrays = ['.css', '.html', '.php', '.js', '.sql']
const idArrays = [css, html, php, js, sql]


function resetActiveNow() {
    classesArrays.forEach(function(e) {
        document.querySelector(e).classList.add('hidden');
    })

    idArrays.forEach(function(e) {
        e.classList.remove('active_nav');
    })

}


function ToggleClass(e, id) {
    resetActiveNow();
    document.querySelector(e).classList.toggle('hidden')
    id.classList.toggle('active_nav')
    document.title = `ee09${e}`;
}



css.addEventListener('click', () => ToggleClass('.css', css));
html.addEventListener('click', () => ToggleClass('.html', html));
php.addEventListener('click', () => ToggleClass('.php', php));
js.addEventListener('click', () => ToggleClass('.js', js));
sql.addEventListener('click', () => ToggleClass('.sql', sql));