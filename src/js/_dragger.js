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

};