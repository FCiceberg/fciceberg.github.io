function join() {
    window.open('https://forms.gle/ujSEVfm4qFkT5EfU7');
}

function instagram() {
    window.open('https://www.instagram.com/fc.bingsan/');
}

function kakao() {
    window.open('https://open.kakao.com/o/gd50NTMf');
}

function youtube() {
    alert('FC아이스버그 유튜브는 아직 준비중입니다!');
}

document.querySelector('.btn_top').addEventListener('click', function() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
});