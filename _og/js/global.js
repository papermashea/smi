function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

function menu() {
	var pages = document.getElementByClassName("menu")
	if(pages.style.display == 'block')
		pages.style.display = 'none';
	else
		pages.style.display = 'block'
}


