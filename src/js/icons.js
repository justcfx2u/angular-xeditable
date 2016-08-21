/*
Editable icons:
- default
- font-awesome

*/
angular.module('xeditable').factory('editableIcons', function() {

  var icons = {
    //Icon-set to use, defaults to bootstrap icons
    default: {
      'bs2': {
        ok: 'icon-ok icon-white',
        cancel: 'icon-remove'
      },
      'bs3': {
        ok: 'glyphicons glyphicons-ok',
        cancel: 'glyphicons glyphicons-remove'
      }
    },
    external: {
      'font-awesome': {
        ok: 'fa fa-check',
        cancel: 'fa fa-times'
      }
    }
  };

  return icons;
});
