var wrapElement = function(elementToWrap, wrapperID){
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

