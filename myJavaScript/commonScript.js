$(document).ready(function() {

    $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
            $('.icon.button.up').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
            $('.icon.button.up').transition('fade out');
          }
        })
      ;
      
      $('.icon.button.up').click(function(event){
        event.preventDefault();
        var position = $('#top').offset().top;
        $('html, body')
        .animate({
          scrollTop: position
        }, 1000);
      });

      $('.mouse_scroll').click(function(event){
        event.preventDefault();
        var position = $('.reference.division').offset().top;
        $('html, body')
        .animate({
          scrollTop: position
        }, 1000);
      });

    // create sidebar and attach to menu open
    $('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
  ;

    // Main page text

    var words = ['MBA @ UNC Chapel Hill', 'Kenan-Flagler Business School'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});



    // On inquiry submit

    var $errorMessage = $('.ui.error.message');
    $errorMessage.hide();
    $('#inquiry-submit').click(function(event){
      event.preventDefault();
      $errorMessage.hide();

      $('#inquiry-submit').addClass('disabled loading');

      var form_name = $('#form_name').val();
      var form_email = $('#form_email').val();
      var form_mobile = $('#form_mobile').val();
      var form_textarea = $('#form_textarea').val();

      if(form_email.trim()=='' && form_mobile.trim()=='') {
        $errorMessage.show();
        $('#inquiry-submit').removeClass('disabled loading');
        return;
      }
      var body = "Name: " + form_name + "\n" +"Email: " + form_email + "\n" + "Mobile: " + form_mobile + "\n" + "Message: " + form_textarea;
      let mailtoUri = "mailto:" + "mbaevc@kenan-flagler.unc.edu" + "?subject=" + encodeURIComponent("Inquiry from "+form_name) + "&body=" + encodeURIComponent(body);
      window.location.href = mailtoUri;
      $('#form_name').val('');
      $('#form_email').val('');
      $('#form_mobile').val('');
      $('#form_textarea').val('');
      $('#inquiry-submit').removeClass('disabled loading');
    });

    $('#link_contactus').click(function(event) {
      window.location.href = "https://forms.office.com/r/ARBuW8BLF0";
    });

    $('#link_courses').click(function(event) {
      window.location.href = "    https://www.kenan-flagler.unc.edu/programs/mba/full-time-mba/academics/concentrations-electives/entrepreneurship/";
    });


    $('.expand2').click(function(event) {
      var image = $(this).attr("image");
      var title = $(this).attr("title");
      var description = $(this).attr("description");
      $('#modal-image').attr('src',image);
      $('#modal-title').text(title);
      $('#modal-description').text(description);
      $('.ui.modal').modal('show');
    });

    $('.button.close').click(function(event) {
      $('.ui.modal').modal('hide');
    });

    $(".link.basic.button").click(function() {
      window.open($(this).attr("href"), '_blank');
      return false;
    });

});