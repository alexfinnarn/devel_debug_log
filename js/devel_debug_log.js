(function ($) {

  Backdrop.devel_debug_log = {};
  Backdrop.devel_debug_log.active = 1;

  Backdrop.behaviors.devel_debug_log = {
    attach: function (context) {
      setTimeout("Backdrop.devel_debug_log.refresh()", 5000);

      $('#devel-debug-log-messages-table').click(function () {
        Backdrop.devel_debug_log.active = 0;
      });
    }
  };

  Backdrop.devel_debug_log.refresh = function() {
    if (Backdrop.devel_debug_log.active == 1) {
      $.ajax({
        url: '/devel-debug-log/callback',
        dataType: 'json',
        success: function(data) {
          $('#devel-debug-log-messages-table').html(data['content']);
        }
      });

      setTimeout("Backdrop.devel_debug_log.refresh()", 5000);
    }
  }

})(jQuery);
