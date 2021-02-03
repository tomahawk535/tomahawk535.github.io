$(document).ready(function(){
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
    $("#get-first-name").val("First name: " + $("#send-first-name").val());
    $("#send-first-name").val("");
    $("#get-last-name").val("Last name: " + $("#send-last-name").val());
    $("#send-last-name").val("");
    $("#get-email").val("Email: " + $("#send-email").val());
    $("#send-email").val("");
}
$('#show-pop-up').click(PopUpShow)

//Функция скрытия PopUp
function PopUpHide() {
    $("#popup1").hide();
}
$('#pop-up-hide').click(PopUpHide);

