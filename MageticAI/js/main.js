$(document).ready(function(){
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
    $("#show-logo").css('display', 'block');
}
$('#open').click(PopUpShow);


//Функция скрытия PopUp
function PopUpHide() {
    $("#popup1").hide();
    $("#show-logo").css('display', 'none');
}
$('#hide').click(PopUpHide);