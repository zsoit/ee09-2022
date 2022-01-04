const nameArray = ['css', 'html', 'php', 'js', 'sql']

function resetActiveNow() {
    nameArray.forEach((e) => {
        document.querySelector(`.${e}`).classList.add('hidden');
        document.querySelector(`#${e}`).classList.remove('active_nav');
    })
}

function ToggleClass(e) {
    resetActiveNow();
    document.querySelector(`.${e}`).classList.toggle('hidden')
    document.querySelector(`#${e}`).classList.toggle('active_nav')
    document.title = `ee09.${e}`;
}
nameArray.forEach((e) => {
    document.querySelector(`#${e}`).addEventListener('click', () => ToggleClass(e));
})


function clicked(url) {
    nameArray.forEach((e) => {
        if (url == e) document.querySelector(`#${e}`).click();
    })
}

function get_url() {
    let url = document.URL;
    let params = (new URL(url)).searchParams;
    params.getAll('a').forEach(e => clicked(e))
}

get_url();