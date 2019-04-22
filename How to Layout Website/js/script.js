function expand(s) { /* Shows the drop down menu */
	var td = s;
	var d = td.getElementsByTagName("div").item(0);

	td.className = "menuHover";
	d.className = "menuHover";
}

function collapse(s) { /* Collapses the drop down menu after not hovering */
	var td = s;
	var d = td.getElementsByTagName("div").item(0);

	td.className = "menuNormal";
	d.className = "menuNormal";
}