/**
* Typewriter is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* // basic usage (just like .hover) receives onMouseOver and onMouseOut functions
* $("selector").typewriter( showNav , hideNav );
* 
* // advanced usage receives configuration object only
* $("selector").hoverIntent({
*	progress: 7, // start index of text
*	interval: 100   // number = milliseconds of polling interval
* 
* Insert <!--break--> in html to break word
* 
* @author    Shizend
*/

(function($) {
  $.fn.typewriter = function(option) {
    option = option || {};
    var setting = {
      progress: 0,
      interval: 100,
      blinkSpeed: 12
    };
    $.extend(setting, option);
    var me = this,
        str = this.html().replace(/(<!--break-->)+/g, "                        ");
    me.each(function() {
      me.html('');
      var timer = setInterval(function(){
        if(str.substring(setting.progress, setting.progress+1) == "<") {
            var endtag = str.substring(setting.progress).search(">");
            setting.progress += endtag + 1;
        }
        me.html(str.substring(0, setting.progress++) + ((setting.progress % setting.blinkSpeed) > (setting.blinkSpeed/2) ? '<span style="color: #f37462;font-weight: bold;">|</span> ' : '<span style="color: #F3F3F4;font-weight: bold;">|</span> '));
        if (setting.progress > str.length) {
          clearInterval(timer);
          me.html(str);
        }
      },setting.interval)
    });
  };
})(jQuery);