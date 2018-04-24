//-------------------nav



window.onload = function () {
    var nav = document.getElementById('list-menu');
    nav.onmouseover = function (e) {
        document.getElementById('sub-menu').style.display ='block';

    };
    nav.onmouseout = function (e) {
        document.getElementById('sub-menu').style.display ='none';
    }

}









//--------------------------------- tabs
var tabBlock = document.getElementById('tabs');

function showTab (e) {
    var span = e.target;
    var id = span.dataset.tab;
    var tbContent = document.getElementById(id);

    tbContent.classList.toggle('hide');
}

function changeActive(e) {
    var span = e.target;

    span.classList.toggle('active');
}


tabBlock.addEventListener('click', showTab);
tabBlock.addEventListener('click', changeActive );
