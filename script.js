(function($){
$(document).ready(function() {
$("a[title]").style_my_tooltips({
tip_follows_cursor:false,
tip_delay_time:90,
tip_fade_speed:600,
attribute:"title"
});
});
})(jQuery);

(function($){
$(document).ready(function() {
$("img[title]").style_my_tooltips({
tip_follows_cursor:false,
tip_delay_time:90,
tip_fade_speed:600,
attribute:"title"
});
});
})(jQuery);


function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablink;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";}

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";
  
  elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();

$(document).ready(function(){
  $(".tablink").click(function(){
        $(".notes").hide();
         $(".bookbox").hide();
         $("#pagination").hide();
  });
  $(".tabsclose").click(function(){
        $(".notes").show();
        $(".bookbox").show();
         $("#pagination").show();
  });
});

    $(document).ready(function() {
  $('p').each(function() {
    if ($(this).html().trim() === '') {
      $(this).remove();
    }
  });
});

    $(document).ready(function() {
  $('div.caption').each(function() {
    if ($(this).text().trim() === '') {
      $(this).remove();
    }
  });
});