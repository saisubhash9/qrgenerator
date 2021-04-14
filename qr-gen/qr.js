function dis(p1) {
		var x = document.getElementById(p1);
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
		x.style.display = "none";
		}
	}

	function gen() {
		x=document.getElementById("acc").value;
		var y = x.replace(" ","+");
		var z = "https://chart.googleapis.com/chart?cht=qr&chl=google.com&chs=160x160&chld=L|0";
		var a = z.replace("google.com",y);
		document.getElementById("change").src=a;
		document.getElementById("acc").value=" ";
	}