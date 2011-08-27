
(function ($) {

Drupal.dbp = {};

Drupal.behaviors.dbp = {
  attach: function (context) {
    setTimeout("Drupal.dbp.refresh()", 5000);
  }
};

Drupal.dbp.refresh = function() {
  $.ajax({
    url: '/dbp/callback',
    dataType: 'json',
    success: function(data) {
      $('#dbp-messages-table').html(data['content']);
      $('#dbp-pager').html(data['pager']);
    },
  });
  
  setTimeout("Drupal.dbp.refresh()", 5000);
}

})(jQuery);
