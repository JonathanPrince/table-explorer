var util = {
  addEvent: function ( obj, type, fn ) {
    if ( obj.attachEvent ) {
      obj['e'+type+fn] = fn;
      obj[type+fn] = function(){
        obj['e'+type+fn]( window.event );
      };
      obj.attachEvent( 'on'+type, obj[type+fn] );
    } else {
      obj.addEventListener( type, fn, false );
    }
  },
  getPrefix : function () {
    var styles = window.getComputedStyle(document.documentElement, ''),
      pre = (Array.prototype.slice
        .call(styles)
        .join('') 
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
      )[1],
      dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    return {
      dom: dom,
      lowercase: pre,
      css: '-' + pre + '-',
      js: pre[0].toUpperCase() + pre.substr(1)
    };
  }
};;var clicked = false;

var prefix = util.getPrefix();

var vendorPrefix = '';

if(prefix.lowercase === 'webkit' || 'moz') {
	vendorPrefix = '-' + prefix.lowercase + '-';
}

var holder = document.getElementById('holder');

util.addEvent(holder,'mousemove', function(e) {
    if(clicked === true) updateScrollPos(e);
});
util.addEvent(holder,'mousedown', function(e) {
    clicked = true;
    holder.style.cursor = vendorPrefix + 'grabbing';
    clickY = e.pageY;
    clickX = e.pageX;
});
util.addEvent(holder,'mouseup', function() {
    clicked = false;
    holder.style.cursor = vendorPrefix + 'grab';
});

var updateScrollPos = function(e) {
    holder.scrollTop  = holder.scrollTop + (clickY - e.pageY);
    holder.scrollLeft = holder.scrollLeft + (clickX - e.pageX);
};;console.log('initialising...');