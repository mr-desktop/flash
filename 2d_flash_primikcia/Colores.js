var coloro = "Ning";
	var ja;
	var rr;
	var aa;
	var vv;

// Número Aleatorio
function rand(inferior, superior){ 
	var numPosibilidades = (superior + 1) - inferior; 
	var aleat = Math.random() * numPosibilidades; 
	aleat = Math.floor(aleat); 
	aleat = (inferior + aleat); 
	return aleat}
	ja = rand(6,0);
	
	coloro = ((ja==1) ? "#D6D6D6" : coloro); //Pache
	coloro = ((ja==2) ? "#FCC4DD" : coloro); //Michelle
	coloro = ((ja==3) ? "#FFFFCC" : coloro); //Gina
	coloro = ((ja==4) ? "#FEC787" : coloro); //Nikauly
	coloro = ((ja==5) ? "#F1CCFF" : coloro); //Carolina
	document.bgColor=coloro
                 //document.write(ja)