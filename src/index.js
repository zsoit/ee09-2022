const nameArray = ['css', 'html', 'php', 'js', 'sql', 'grafika']

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

function href() {
    const a = document.querySelectorAll('ul li a')
    const h6 = document.querySelectorAll('h6')
    a.forEach((e) => {
        const dupa = e.getAttribute("href")
        e.addEventListener('click', () => {
            for (let i = 0; i < h6.length; i++) {
                if (dupa == `#${h6[i].textContent}`) {
                    h6[i].scrollIntoView();
                    console.log(dupa)
                }
            }

        })
    })
}
href();


const mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

mybutton.addEventListener('click', topFunction)