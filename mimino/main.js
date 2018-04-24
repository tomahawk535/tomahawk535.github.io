$(document).ready(function(){
  $(".click").click(function() {
  $(".thumbHidden").toggle("slow");
  $(".click").val($(".click").val() == "Hide"? "Learn More":"Hide");
  });
});
