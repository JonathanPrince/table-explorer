var dragger = function(containerID) {
    var clicked = false;

    var prefix = util.getPrefix();

    var vendorPrefix = '';

    if(prefix.lowercase === 'webkit' || 'moz') {
        vendorPrefix = '-' + prefix.lowercase + '-';
    }

    var container = document.getElementById(containerID);

    var updateScrollPos = function(e) {
        container.scrollTop  = container.scrollTop + (clickY - e.pageY);
        container.scrollLeft = container.scrollLeft + (clickX - e.pageX);
    };

    util.addEvent(container,'mousemove', function(e) {
        if(clicked === true) updateScrollPos(e);
    });
    util.addEvent(container,'mousedown', function(e) {
        clicked = true;
        container.style.cursor = vendorPrefix + 'grabbing';
        clickY = e.pageY;
        clickX = e.pageX;
    });
    util.addEvent(container,'mouseup', function() {
        clicked = false;
        container.style.cursor = vendorPrefix + 'grab';
    });

};;var util = {
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
};;var wrapElement = function(elementToWrap, wrapperID){
	elementToWrap = '#' + elementToWrap;
	var parent = document.querySelector(elementToWrap).parentNode;
	var wrapper = document.createElement('div');
	var position = 0;
	
	for(var i = 0; i < parent.childNodes.length; i++) {
	  if(parent.childNodes[i] === document.querySelector(elementToWrap)) {
	    position = i;
	    break;
	  }
	}

	wrapper.id = wrapperID;
	wrapper.appendChild(document.querySelector(elementToWrap));
	parent.insertBefore(wrapper, parent.childNodes[position]);
};

;console.log('initialising...');
wrapElement('result-table','holder');
dragger('holder');