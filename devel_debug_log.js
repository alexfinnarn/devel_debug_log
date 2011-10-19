(function ($) {

Drupal.devel_debug_log = {};

Drupal.behaviors.devel_debug_log = {
  attach: function (context) {
    setTimeout("Drupal.devel_debug_log.refresh()", 5000);
  }
};

Drupal.devel_debug_log.refresh = function() {
  $.ajax({
    url: '/devel-debug-log/callback',
    dataType: 'json',
    success: function(data) {
      $('#devel-debug-log-messages-table').html(data['content']);
    }
  });
  
  setTimeout("Drupal.devel_debug_log.refresh()", 5000);
}

})(jQuery);
