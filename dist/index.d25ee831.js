const active_now = document.querySelectorAll('.active_nav');
const nameArray = [
    'css',
    'html',
    'php',
    'js',
    'sql'
];
function resetActiveNow() {
    nameArray.forEach((e)=>{
        document.querySelector(`.${e}`).classList.add('hidden');
        document.querySelector(`#${e}`).classList.remove('active_nav');
    });
}
function ToggleClass(e) {
    resetActiveNow();
    document.querySelector(`.${e}`).classList.toggle('hidden');
    document.querySelector(`#${e}`).classList.toggle('active_nav');
    document.title = `ee09${e}`;
}
nameArray.forEach((e)=>{
    document.querySelector(`#${e}`).addEventListener('click', ()=>ToggleClass(e)
    );
});

//# sourceMappingURL=index.d25ee831.js.map
