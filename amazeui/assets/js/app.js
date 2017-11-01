(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });

  // Create an empty context menu
  var menu = new nw.Menu();

  // Add some items with label
  menu.append(new nw.MenuItem({
    label: 'Item A',
    click: function() {
      alert('You have clicked at "Item A"');
    }
  }));
  menu.append(new nw.MenuItem({
    label: 'Item B'
  }));
  menu.append(new nw.MenuItem({
    type: 'separator'
  }));
  menu.append(new nw.MenuItem({
    label: 'Item C'
  }));

  // Hooks the "contextmenu" event
  document.body.addEventListener('contextmenu', function(ev) {
    // Prevent showing default context menu
    ev.preventDefault();
    // Popup the native context menu at place you click
    //menu.popup(ev.x, ev.y);

    return false;
  }, false);

})(jQuery);