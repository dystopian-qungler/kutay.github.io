var score = 0;
var scoreSimple = 0;
var cps = 0;
var basecps = 0;
var cursorcps = 0;
let multiplier = [1,1,250,250000000,2000000000000];
let upgradecost = [20,45,10000,10000000000,12000000000000000];
let upgradecostsimple = [20,25,10000,10000000000,12000000000000000];
let buildingcost = [15,5000,5000000000,5000000000000000];
let buildingcostsimple = [15,5000,5000000000,5000000000000000];
let buildingamount = [0,0,0,0];
simplifyPrices();
document.getElementById("points").innerHTML = scoreSimple;
document.getElementById("autoprice").innerHTML = "Cost: "+ buildingcostsimple[0];
document.getElementById("superprice").innerHTML = "Cost: "+ buildingcostsimple[1];
document.getElementById("ultraprice").innerHTML = "Cost: "+ buildingcostsimple[2];
document.getElementById("kutayprice").innerHTML = "Cost: "+ buildingcostsimple[3];
document.getElementById("cps").innerHTML = (autoclickers*multiplier[1]) + " clicks per second";
document.getElementById("cursorupprice").innerHTML = "Cost: "+upgradecostsimple[0];
document.getElementById("autoupprice").innerHTML = "Cost: "+upgradecostsimple[1];
document.getElementById("superupprice").innerHTML = "Cost: "+upgradecostsimple[2];
document.getElementById("ultraupprice").innerHTML = "Cost: "+upgradecostsimple[3];
document.getElementById("kutayupprice").innerHTML = "Cost: "+upgradecostsimple[4];

document.getElementById("autoclickers").innerHTML = " " + buildingamount[0];
document.getElementById("superclickers").innerHTML = " " + buildingamount[1];
document.getElementById("ultraclickers").innerHTML = " " + buildingamount[2];
document.getElementById("kutayclickers").innerHTML = " " + buildingamount[3];
function add(){
	score += multiplier[0];
	simplify();
	cursorcps += multiplier[0];
}
function buy(index){
	if(score>=buildingcost[index]){
		score -= buildingcost[index];
		buildingcost[index] *= 3;
		buildingamount[index] += 1;
		simplify();
		simplifyPrices();
		document.getElementById("autoprice").innerHTML = "Cost: "+buildingcostsimple[0];
		document.getElementById("superprice").innerHTML = "Cost: "+ buildingcostsimple[1];
		document.getElementById("ultraprice").innerHTML = "Cost: "+ buildingcostsimple[2];
		document.getElementById("kutayprice").innerHTML = "Cost: "+ buildingcostsimple[3];
		document.getElementById("autoclickers").innerHTML = " " + buildingamount[0];
		document.getElementById("superclickers").innerHTML = " " + buildingamount[1];
		document.getElementById("ultraclickers").innerHTML = " " + buildingamount[2];
		document.getElementById("kutayclickers").innerHTML = " " + buildingamount[3];
		if(buildingamount[0] >= 1){
			setInterval(autoclick,1000/buildingamount[0]);
		}
		if(buildingamount[1] >= 1){
			setInterval(superautoclick,1000/buildingamount[1]);
		}
		if(buildingamount[2] >= 1){
			setInterval(ultraautoclick,1000/buildingamount[2]);
		}
		if(buildingamount[3] >= 1){
			setInterval(kutayautoclick,1000/buildingamount[3]);
		}
	}
}

function upgrade(index){
	if(score>=upgradecost[index]){
		score -= upgradecost[index];
		multiplier[index] *= 2;
		upgradecost[index] *= 5;
		simplify();
		simplifyPrices();
		document.getElementById("cursorupprice").innerHTML = "Cost: "+upgradecostsimple[0];
		document.getElementById("autoupprice").innerHTML = "Cost: "+upgradecostsimple[1];
		document.getElementById("superupprice").innerHTML = "Cost: "+upgradecostsimple[2];
		document.getElementById("ultraupprice").innerHTML = "Cost: "+upgradecostsimple[3];
		document.getElementById("kutayupprice").innerHTML = "Cost: "+upgradecostsimple[4];
	}
}
function autoclick(){
	if(buildingamount[0] >= 1){
	score += multiplier[1];
	basecps += multiplier[1];
	simplify();
	}
}
function superautoclick(){
	if(buildingamount[1] >= 1){
		score += multiplier[2];
		basecps += multiplier[2];
		simplify();
	}
}
function ultraautoclick(){
	if(buildingamount[2] >= 1){
		score += multiplier[3];
		basecps += multiplier[3];
		simplify();
	}
}

function kutayautoclick(){
	if(buildingamount[3] >= 1){
		score += multiplier[4];
		basecps += multiplier[4];
		simplify();
	}
}

function updateTitle() {
	document.getElementById("clickertitle").innerHTML = scoreSimple + " clicks";
	cps = basecps + cursorcps;
	simplify();
	document.getElementById("cps").innerHTML = cps + " clicks per second";
	cursorcps = 0;
	basecps= 0;
}
function simplify(){
	scoreSimple = score;
	if(score >= 1000){
		scoreSimple /= 100;
		scoreSimple = Math.round(scoreSimple);
		scoreSimple /= 10;
		scoreSimple += " thousand"
	}
	if(score >= 1000000){
		scoreSimple = score;
		scoreSimple /= 100000;
		scoreSimple = Math.round(scoreSimple);
		scoreSimple /= 10;
		scoreSimple += " million"
	}
	if(score >= 1000000000){
		scoreSimple = score;
		scoreSimple /= 100000000;
		scoreSimple = Math.round(scoreSimple);
		scoreSimple /= 10;
		scoreSimple += " billion"
	}
	if(score >= 1000000000000){
		scoreSimple = score;
		scoreSimple /= 100000000000;
		scoreSimple = Math.round(scoreSimple);
		scoreSimple /= 10;
		scoreSimple += " trillion"
	}
	if(score >= 1000000000000000){
		scoreSimple = score;
		scoreSimple /= 100000000000000;
		scoreSimple = Math.round(scoreSimple);
		scoreSimple /= 10;
		scoreSimple += " quadrillion"
	}
	if(score >= 1000000000000000000){
		scoreSimple = score;
		scoreSimple /= 100000000000000000;
		scoreSimple = Math.round(scoreSimple);
		scoreSimple /= 10;
		scoreSimple += " quintillion"
	}
	if(score >= 1000000000000000000000){
		scoreSimple = score;
		scoreSimple /= 100000000000000000000;
		scoreSimple = Math.round(scoreSimple);
		scoreSimple /= 10;
		scoreSimple += " sextillion"
	}
	if(score >= 1000000000000000000000000){
		scoreSimple = score;
		scoreSimple /= 100000000000000000000000;
		scoreSimple = Math.round(scoreSimple);
		scoreSimple /= 10;
		scoreSimple += " septillion"
	}
	if(score >= 1000000000000000000000000000){
		scoreSimple = score;
		scoreSimple /= 100000000000000000000000000;
		scoreSimple = Math.round(scoreSimple);
		scoreSimple /= 10;
		scoreSimple += " octillion"
	}
	if(score >= 1000000000000000000000000000000){
		scoreSimple = score;
		scoreSimple /= 100000000000000000000000000000;
		scoreSimple = Math.round(scoreSimple);
		scoreSimple /= 10;
		scoreSimple += " nonillion"
	}
	if(score >= 1000000000000000000000000000000000){
		scoreSimple = score;
		scoreSimple /= 100000000000000000000000000000000;
		scoreSimple = Math.round(scoreSimple);
		scoreSimple /= 10;
		scoreSimple += " decillion"
	}
	if(score >= 1000000000000000000000000000000000000){
		scoreSimple = "You Win!"
	}
	document.getElementById("points").innerHTML = scoreSimple;
	cps = basecps + cursorcps;
	if (basecps + cursorcps >= 1000){
		cps = basecps + cursorcps;
		cps /= 100;
		cps = Math.round(cps);
		cps /= 10;
		cps += " thousand";
	}
	if (basecps + cursorcps >= 1000000){
		cps = basecps + cursorcps;
		cps /= 100000;
		cps = Math.round(cps);
		cps /= 10;
		cps += " million";
	}
	if (basecps + cursorcps >= 1000000000){
		cps = basecps + cursorcps;
		cps /= 100000000;
		cps = Math.round(cps);
		cps /= 10;
		cps += " billion";
	}
	if (basecps + cursorcps >= 1000000000000){
		cps = basecps + cursorcps;
		cps /= 100000000000;
		cps = Math.round(cps);
		cps /= 10;
		cps += " trillion";
	}
	if (basecps + cursorcps >= 1000000000000000){
		cps = basecps + cursorcps;
		cps /= 100000000000000;
		cps = Math.round(cps);
		cps /= 10;
		cps += " quadrillion";
	}
	if (basecps + cursorcps >= 1000000000000000000){
		cps = basecps + cursorcps;
		cps /= 100000000000000000;
		cps = Math.round(cps);
		cps /= 10;
		cps += " quintillion";
	}
	if (basecps + cursorcps >= 1000000000000000000000){
		cps = basecps + cursorcps;
		cps /= 100000000000000000000;
		cps = Math.round(cps);
		cps /= 10;
		cps += " sextillion";
	}
	if (basecps + cursorcps >= 1000000000000000000000){
		cps = basecps + cursorcps;
		cps /= 100000000000000000000;
		cps = Math.round(cps);
		cps /= 10;
		cps += " septillion";
	}
	if (basecps + cursorcps >= 1000000000000000000000000){
		cps = basecps + cursorcps;
		cps /= 100000000000000000000000;
		cps = Math.round(cps);
		cps /= 10;
		cps += " octillion";
	}
	if (basecps + cursorcps >= 1000000000000000000000000000){
		cps = basecps + cursorcps;
		cps /= 100000000000000000000000000;
		cps = Math.round(cps);
		cps /= 10;
		cps += " nonillion";
	}
	if (basecps + cursorcps >= 1000000000000000000000000000000){
		cps = basecps + cursorcps;
		cps /= 100000000000000000000000000000;
		cps = Math.round(cps);
		cps /= 10;
		cps += " decillion";
	}
}

function simplifyPrices(){
	for (i = 0; i < buildingcost.length; i++){
		buildingcostsimple[i] = buildingcost[i];
		if(buildingcost[i] >= 1000){
			buildingcostsimple[i] = buildingcost[i];
			buildingcostsimple[i] /= 100;
			buildingcostsimple[i] = Math.round(buildingcostsimple[i]);
			buildingcostsimple[i] /= 10;
			buildingcostsimple[i] += " thousand"
		}
		if(buildingcost[i] >= 1000000){
			buildingcostsimple[i] = buildingcost[i];
			buildingcostsimple[i] /= 100000;
			buildingcostsimple[i] = Math.round(buildingcostsimple[i]);
			buildingcostsimple[i] /= 10;
			buildingcostsimple[i] += " million"
		}
		if(buildingcost[i] >= 1000000000){
			buildingcostsimple[i] = buildingcost[i];
			buildingcostsimple[i] /= 100000000;
			buildingcostsimple[i] = Math.round(buildingcostsimple[i]);
			buildingcostsimple[i] /= 10;
			buildingcostsimple[i] += " billion"
		}
		if(buildingcost[i] >= 1000000000000){
			buildingcostsimple[i] = buildingcost[i];
			buildingcostsimple[i] /= 100000000000;
			buildingcostsimple[i] = Math.round(buildingcostsimple[i]);
			buildingcostsimple[i] /= 10;
			buildingcostsimple[i] += " trillion"
		}
		if(buildingcost[i] >= 1000000000000000){
			buildingcostsimple[i] = buildingcost[i];
			buildingcostsimple[i] /= 100000000000000;
			buildingcostsimple[i] = Math.round(buildingcostsimple[i]);
			buildingcostsimple[i] /= 10;
			buildingcostsimple[i] += " quadrillion"
		}
		if(buildingcost[i] >= 1000000000000000000){
			buildingcostsimple[i] = buildingcost[i];
			buildingcostsimple[i] /= 100000000000000000;
			buildingcostsimple[i] = Math.round(buildingcostsimple[i]);
			buildingcostsimple[i] /= 10;
			buildingcostsimple[i] += " quintillion"
		}
		if(buildingcost[i] >= 1000000000000000000000){
			buildingcostsimple[i] = buildingcost[i];
			buildingcostsimple[i] /= 100000000000000000000;
			buildingcostsimple[i] = Math.round(buildingcostsimple[i]);
			buildingcostsimple[i] /= 10;
			buildingcostsimple[i] += " sextillion"
		}
		if(buildingcost[i] >= 1000000000000000000000000){
			buildingcostsimple[i] = buildingcost[i];
			buildingcostsimple[i] /= 100000000000000000000000;
			buildingcostsimple[i] = Math.round(buildingcostsimple[i]);
			buildingcostsimple[i] /= 10;
			buildingcostsimple[i] += " septillion"
		}
		if(buildingcost[i] >= 1000000000000000000000000000){
			buildingcostsimple[i] = buildingcost[i];
			buildingcostsimple[i] /= 100000000000000000000000000;
			buildingcostsimple[i] = Math.round(buildingcostsimple[i]);
			buildingcostsimple[i] /= 10;
			buildingcostsimple[i] += " octillion"
		}
		if(buildingcost[i] >= 1000000000000000000000000000000){
			buildingcostsimple[i] = buildingcost[i];
			buildingcostsimple[i] /= 100000000000000000000000000000;
			buildingcostsimple[i] = Math.round(buildingcostsimple[i]);
			buildingcostsimple[i] /= 10;
			buildingcostsimple[i] += " nonillion"
		}
		if(buildingcost[i] >= 1000000000000000000000000000000000){
			buildingcostsimple[i] = buildingcost[i];
			buildingcostsimple[i] /= 100000000000000000000000000000000;
			buildingcostsimple[i] = Math.round(buildingcostsimple[i]);
			buildingcostsimple[i] /= 10;
			buildingcostsimple[i] += " decillion"
		}
	}
	for (i = 0; i < upgradecost.length; i++){
		upgradecostsimple[i] = upgradecost[i];
		if(upgradecost[i] >= 1000){
			upgradecostsimple[i] = upgradecost[i];
			upgradecostsimple[i] /= 100;
			upgradecostsimple[i] = Math.round(upgradecostsimple[i]);
			upgradecostsimple[i] /= 10;
			upgradecostsimple[i] += " thousand";
		}
		if(upgradecost[i] >= 1000000){
			upgradecostsimple[i] = upgradecost[i];
			upgradecostsimple[i] /= 100000;
			upgradecostsimple[i] = Math.round(upgradecostsimple[i]);
			upgradecostsimple[i] /= 10;
			upgradecostsimple[i] += " million"
		}
		if(upgradecost[i] >= 1000000000){
			upgradecostsimple[i] = upgradecost[i];
			upgradecostsimple[i] /= 100000000;
			upgradecostsimple[i] = Math.round(upgradecostsimple[i]);
			upgradecostsimple[i] /= 10;
			upgradecostsimple[i] += " billion"
		}
		if(upgradecost[i] >= 1000000000000){
			upgradecostsimple[i] = upgradecost[i];
			upgradecostsimple[i] /= 100000000000;
			upgradecostsimple[i] = Math.round(upgradecostsimple[i]);
			upgradecostsimple[i] /= 10;
			upgradecostsimple[i] += " trillion"
		}
		if(upgradecost[i] >= 1000000000000000){
			upgradecostsimple[i] = upgradecost[i];
			upgradecostsimple[i] /= 100000000000000;
			upgradecostsimple[i] = Math.round(upgradecostsimple[i]);
			upgradecostsimple[i] /= 10;
			upgradecostsimple[i] += " quadrillion"
		}
		if(upgradecost[i] >= 1000000000000000000){
			upgradecostsimple[i] = upgradecost[i];
			upgradecostsimple[i] /= 100000000000000000;
			upgradecostsimple[i] = Math.round(upgradecostsimple[i]);
			upgradecostsimple[i] /= 10;
			upgradecostsimple[i] += " quintillion"
		}
		if(upgradecost[i] >= 1000000000000000000000){
			upgradecostsimple[i] = upgradecost[i];
			upgradecostsimple[i] /= 100000000000000000000;
			upgradecostsimple[i] = Math.round(upgradecostsimple[i]);
			upgradecostsimple[i] /= 10;
			upgradecostsimple[i] += " sextillion"
		}
		if(upgradecost[i] >= 1000000000000000000000000){
			upgradecostsimple[i] = upgradecost[i];
			upgradecostsimple[i] /= 100000000000000000000000;
			upgradecostsimple[i] = Math.round(upgradecostsimple[i]);
			upgradecostsimple[i] /= 10;
			upgradecostsimple[i] += " septillion"
		}
		if(upgradecost[i] >= 1000000000000000000000000000){
			upgradecostsimple[i] = upgradecost[i];
			upgradecostsimple[i] /= 100000000000000000000000000;
			upgradecostsimple[i] = Math.round(upgradecostsimple[i]);
			upgradecostsimple[i] /= 10;
			upgradecostsimple[i] += " octillion"
		}
		if(upgradecost[i] >= 1000000000000000000000000000000){
			upgradecostsimple[i] = upgradecost[i];
			upgradecostsimple[i] /= 100000000000000000000000000000;
			upgradecostsimple[i] = Math.round(upgradecostsimple[i]);
			upgradecostsimple[i] /= 10;
			upgradecostsimple[i] += " nonillion"
		}
		if(upgradecost[i] >= 1000000000000000000000000000000000){
			upgradecostsimple[i] = upgradecost[i];
			upgradecostsimple[i] /= 100000000000000000000000000000000;
			upgradecostsimple[i] = Math.round(upgradecostsimple[i]);
			upgradecostsimple[i] /= 10;
			upgradecostsimple[i] += " decillion"
		}
	}
}

setInterval(updateTitle,1000);