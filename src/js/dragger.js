var clicked = false;

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
};