//I denne funktion henter jeg document value med element ID, og så ligger til værdien som bliver trykket på.
function insert(num)
{	
	document.getElementById("data-resultat").value += num;
    document.getElementById("data-udregning").value += num;
}

//I denne funktion replacer jeg tegn som har mere en 1 karakter. Det er fordi jeg bruger split funktionen i regner funktionen, så dermed skal den kun være et tegn, ellers kommer der for meget i array'en.
function replacer() {
	//Her replacer jeg π
    var pi = document.getElementById("data-resultat").value
	pi = pi.replace("π", "3.141592653589793");
	document.getElementById("data-resultat").value = pi;
    
	//her replacer jeg e
	var e = document.getElementById("data-resultat").value
	e = e.replace("e", "2.7182818284590452353602");
	document.getElementById("data-resultat").value = e;
    
	//her replacer jeg x²
	var x = document.getElementById("data-resultat").value
	x = x.replace("x²", "x");
	document.getElementById("data-resultat").value = x;

	//her replacer jeg log10
	var L = document.getElementById("data-resultat").value
	L = L.replace("log10", "L");
	document.getElementById("data-resultat").value = L;

	//her replacer jeg log
	var l = document.getElementById("data-resultat").value
	l = l.replace("log", "l");
	document.getElementById("data-resultat").value = l;

	//her replacer jeg ex
	var E = document.getElementById("data-resultat").value
	E = E.replace("ex", "E");
	document.getElementById("data-resultat").value = E;

	//her replacer jeg Cos
	var c = document.getElementById("data-resultat").value
	c = c.replace("Cos", "c");
	document.getElementById("data-resultat").value = c;

	//her replacer jeg Sin
	var s = document.getElementById("data-resultat").value
	s = s.replace("Sin", "s");
	document.getElementById("data-resultat").value = s;

	//her replacer jeg Tan
	var t = document.getElementById("data-resultat").value
	t = t.replace("Tan", "t");
	document.getElementById("data-resultat").value = t;

	//her replacer jeg Cos-1
	var C = document.getElementById("data-resultat").value
	C = C.replace("Cos-1", "C");
	document.getElementById("data-resultat").value = C;

	//her replacer jeg Sin-1
	var S = document.getElementById("data-resultat").value
	S = S.replace("Sin-1", "S");
	document.getElementById("data-resultat").value = S;

	//her replacer jeg Tan-1
	var T = document.getElementById("data-resultat").value
	T = T.replace("Tan-1", "T");
	document.getElementById("data-resultat").value = T;
}

//I denne funktion, regner jeg de tal sammen som bliver indskrevet.
function regner(){
	//Laver variablen res, som skal indeholde regnestykket.
	var res = [];
    
	//Her nævner jeg replacer funktionen, så regner funktionen bruger de rigtige tegn.
	replacer();
    
	//Her udregner den med +, hvor den splitter res[] op hvor der er et + tegn, og ligger den første og anden del af array'et sammen.
	if(document.getElementById("data-resultat").value.includes("+")){
	    res = document.getElementById("data-resultat").value.split('+');
	    return parseFloat(res[0]) + parseFloat(res[1]);
	}
	
	//Her udregner den med -, hvor den splitter res[] op hvor der er et - tegn, og trækker den første og anden del af array'et fra hinanden.
	else if(document.getElementById("data-resultat").value.includes("-")){
	    res = document.getElementById("data-resultat").value.split('-');
	    return parseFloat(res[0]) - parseFloat(res[1]);
	}
	
	//Her udregner den med ÷, og dividerer de to dele.
	else if(document.getElementById("data-resultat").value.includes("÷")){
	    res = document.getElementById("data-resultat").value.split('÷');
	    return parseFloat(res[0]) / parseFloat(res[1]);
	}
	
	//Her udregner den med *, og ganger de to dele med hinanden.
	else if(document.getElementById("data-resultat").value.includes("*")){
	    res = document.getElementById("data-resultat").value.split('*');
	    return parseFloat(res[0]) * parseFloat(res[1]);
	}

	//Her bruger jeg Math.sprt.
	else if(document.getElementById("data-resultat").value.includes("√")){
		res = document.getElementById("data-resultat").value.split('√');
		return Math.sqrt(parseFloat(res[0]));
	}

	//Her bruger jeg Math.cbrt.
	else if(document.getElementById("data-resultat").value.includes("∛")){
		res = document.getElementById("data-resultat").value.split('∛');
		return Math.cbrt(parseFloat(res[0]));
	}
	
	//Her ganger jeg den første del med -1, for at give den det omvendte værdi.
	else if(document.getElementById("data-resultat").value.includes("±")){
		res = document.getElementById("data-resultat").value.split('±');
		return parseFloat(res[0]) * parseFloat(-1);
	}
	
	//Her ganger jeg den første del med sig selv
	else if(document.getElementById("data-resultat").value.includes("x")){
		res = document.getElementById("data-resultat").value.split('x');
		return parseFloat(res[0]) * parseFloat(res[0]);
	}

	//Her dividere jeg den første del med 100
	else if(document.getElementById("data-resultat").value.includes("%")){
		res = document.getElementById("data-resultat").value.split('%');
		return parseFloat(res[0]) / parseFloat(100);
	}

	//Her bruger jeg Math.log.
	else if(document.getElementById("data-resultat").value.includes("l")){
		res = document.getElementById("data-resultat").value.split('l');
		return Math.log(parseFloat(res[0]));
	}

	//Her bruger jeg Math.cos.
	else if(document.getElementById("data-resultat").value.includes("c")){
		res = document.getElementById("data-resultat").value.split('c');
		return Math.cos(parseFloat(res[0]));
	}

	//Her bruger jeg Math.sin.
	else if(document.getElementById("data-resultat").value.includes("s")){
		res = document.getElementById("data-resultat").value.split('s');
		return Math.sin(parseFloat(res[0]));
	}

	//Her bruger jeg Math.tan.
	else if(document.getElementById("data-resultat").value.includes("t")){
		res = document.getElementById("data-resultat").value.split('t');
		return Math.tan(parseFloat(res[0]));
	}

	//Her bruger jeg Math.acos.
	else if(document.getElementById("data-resultat").value.includes("C")){
		res = document.getElementById("data-resultat").value.split('C');
		return Math.acos(parseFloat(res[0]));
	}

	//Her bruger jeg Math.asin.
	else if(document.getElementById("data-resultat").value.includes("S")){
		res = document.getElementById("data-resultat").value.split('S');
		return Math.asin(parseFloat(res[0]));
	}

	//Her bruger jeg Math.atan.
	else if(document.getElementById("data-resultat").value.includes("T")){
		res = document.getElementById("data-resultat").value.split('T');
		return Math.atan(parseFloat(res[0]));
	}

	//Her bruger jeg Math.log10.
	else if(document.getElementById("data-resultat").value.includes("L")){
		res = document.getElementById("data-resultat").value.split('L');
		return Math.log10(parseFloat(res[0]));
	}

	//Her bruger jeg Math.exp.
	else if(document.getElementById("data-resultat").value.includes("E")){
		res = document.getElementById("data-resultat").value.split('E');
		return Math.exp(parseFloat(res[0]));
	}

	//Her skal jeg udregne med faltorial.
	else if(document.getElementById("data-resultat").value.includes("!")){
		res = document.getElementById("data-resultat").value.split('!');
		//Jeg starter ud med en if-statment, som siger hvis res[0] = 0 eller 1, så skal den return 1, fordi er det den giver hvis man har indsat det i rengestykket
		if (res[0] === "0" || res[0] === "1") {
			return 1;
		}
		//her gør jeg res[0] kommer i float form.
		res[0] = parseFloat(res[0]);
		//Her laver jeg en for loop, som siger at i er ligmed res[0] -1, og så mens i er større eller ligmed 1, så skal den minus i med 1 for hver gang.
		for (var i = res[0] -1; i >= 1; i--) {
			//Her ganger jeg res[0] med i, for hver gang den kommer rundt i for loopet.
            res[0] *= i;
		}
		return res[0];
	}

	//Hvis der kommer en fejl eller et regnestykke som ikke har noget at gøre med de tidligere else if-statments, så vil den sende en alert der fortæller brugeren at reset.
    else {alert("ERROR!\nKlik Clear eller Delete");}
}

//I denne funktion udskriver jeg resultatet af regner funktionen, når man klikker på = knappen.
function insertLigmed() {	
	//Her laver jeg en variable som hedder num, og den er ligmed det som blev returned i regner funktionen.
    var num = regner()

	//Her siger jeg at resultat viseren skal være ligmed num.
    document.getElementById('data-resultat').value = num;
    
	//Her siger jeg at udregning viseren skal være ligmed num og den skal udskrive et ligmedstegn.
    document.getElementById('data-udregning').value += "=" + num; 
}

//I denne funktion skal jeg clear resultat og udregning, og det gør jeg med at sige resultat = "" og udregning er ligmed resultat
function klear() {
    document.getElementById("data-resultat").value = "";
    document.getElementById('data-udregning').value = document.getElementById('data-resultat').value;
}

//I denne funktion skal jeg slette den seneste tegn i regnestykket, og det gør jeg med at bruge slice funktionen, hvor jeg fjerner det sidste element i dens string.
function remove() {
    var remover = document.getElementById('data-resultat').value;
    document.getElementById('data-resultat').value = remover.slice(0, -1);

    document.getElementById('data-udregning').value = document.getElementById('data-resultat').value;
}
