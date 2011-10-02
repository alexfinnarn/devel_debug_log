(function ($) {

Drupal.debug_page = {};

Drupal.behaviors.debug_page = {
  attach: function (context) {
    setTimeout("Drupal.debug_page.refresh()", 5000);
  }
};

Drupal.debug_page.refresh = function() {
  $.ajax({
    url: '/debug-page/callback',
    dataType: 'json',
    success: function(data) {
      $('#debug-page-messages-table').html(data['content']);
    }
  });
  
  setTimeout("Drupal.debug_page.refresh()", 5000);
}

})(jQuery);
