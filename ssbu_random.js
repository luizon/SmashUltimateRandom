///////////////////////////////////////////////////////////////////////
/// VARIABLES
///////////////////////////////////////////////////////////////////////
var character = [
	"MARIO", 
	"DONKEY KONG", 
	"LINK", 
	"SAMUS", 
	"DARK SAMUS", 
	"YOSHI", 
	"KIRBY", 
	"FOX", 
	"PIKACHU", 
	"LUIGI", 
	"NESS", 
	"CAPTAIN FALCON", 
	"JIGGLYPUFF", 
	"PEACH", 
	"DAISY", 
	"BOWSER", 
	"ICE CLIMBERS", 
	"SHEIK", 
	"ZELDA", 
	"DR. MARIO", 
	"PICHU", 
	"FALCO", 
	"MARTH", 
	"LUCINA", 
	"YOUNG LINK", 
	"GANONDORF", 
	"MEWTWO", 
	"ROY", 
	"CHROM", 
	"MR. GAME & WATCH", 
	"META KNIGHT", 
	"PIT", 
	"DARK PIT", 
	"ZERO SUIT SAMUS", 
	"WARIO", 
	"SNAKE", 
	"IKE", 
	"SQUIRTLE (POKÉMON TRAINER)", 
	"IVYSAUR (POKÉMON TRAINER)", 
	"CHARIZARD (POKÉMON TRAINER)", 
	"DIDDY KONG", 
	"LUCAS", 
	"SONIC", 
	"KING DEDEDE", 
	"OLIMAR", 
	"LUCARIO", 
	"R.O.B.", 
	"TOON LINK", 
	"WOLF", 
	"VILLAGER", 
	"MEGA MAN", 
	"Wii Fit TRAINER", 
	"ROSALINA & LUMA", 
	"LITTLE MAC", 
	"GRENINJA", 
	"BRAWLER (Mii FIGHTER)", 
	"SWORDFIGHTER (Mii FIGHTER)", 
	"GUNNER (Mii FIGHTER)", 
	"PALUTENA", 
	"PAC-MAN", 
	"ROBIN", 
	"SHULK", 
	"BOWSER JR.", 
	"DUCK HUNT", 
	"RYU", 
	"KEN", 
	"CLOUD", 
	"CORRIN", 
	"BAYONETTA", 
	"INKLING", 
	"RIDLEY", 
	"SIMON", 
	"RICHTER", 
	"KING K. ROOL", 
	"ISABELLE", 
	"INCINEROAR",
	
	// DLC
	"PIRANHA PLANT",
	
	// FIGHTER PASS
	"JOKER", 
	"HERO", 
	"BANJO & KAZOOIE", 
	"TERRY", 
	"BYLETH",
	
	// FIGHTER PASS 2
	"MIN MIN",
	"STEVE"
];
var root = "https://raw.githubusercontent.com/luizon/SmashUltimateRandom/master/"
var cont = 0;
var actual_img;

///////////////////////////////////////////////////////////////////////
/// Objetcts
///////////////////////////////////////////////////////////////////////
var h1_character;
var btn;
var img_thumbnail = (function() {
	return document.getElementById("img_thumbnail");
})();
var incoming_character_name = {
	top: ["30px", "0px"],
	opacity: [0, 1],
	easing: 'ease',
};

img_thumbnail.addEventListener("animationend", alTerminarLaAnimacion, true);
function alTerminarLaAnimacion(event) {
	if(event.type != "animationend")
		return;
	if(img_thumbnail.classList[0] == "outcoming_thumbnail") {
		img_thumbnail.classList.remove("outcoming_thumbnail");
		img_thumbnail.src = actual_img;
		img_thumbnail.classList.add("incoming_thumbnail");
	}
}


///////////////////////////////////////////////////////////////////////
/// functions
///////////////////////////////////////////////////////////////////////
var randomize = (n) => {
	let randomNumber = Math.random()*character.length;
	let index = Math.floor(randomNumber);
	if(!isNaN(n))
		index = n;
	h1_character.innerHTML = character[index];
	img_thumbnail.alt = character[index] + " thumbnail.";
	//img_thumbnail.src = root + "small_thumbnails/" + index + ".png";
	cont++;
	if(cont >= 69) {
		h1_character.innerHTML = "KOKÚN";
		img_thumbnail.alt = "kokun";
		img_thumbnail.src = "https://www.uokpl.rs/fpng/d/161-1615013_goku-dragonball-dragonballz.png";
		cont = 0;
	}
	actual_img = root + "thumbnails_600px/" + index + ".png";
	let load_img = document.createElement("img");
	load_img.src = actual_img;
	h1_character.animate(incoming_character_name, 1000);
	if(img_thumbnail.classList.length > 0) {
		img_thumbnail.classList.remove("incoming_thumbnail")
		img_thumbnail.classList.remove("outcoming_thumbnail")
	}
	img_thumbnail.classList.add("outcoming_thumbnail");
};

function loadImages() {
	for(let i=0; i<character.length; i++) {
		var img_tmp;
		img_tmp = document.createElement("img");
		img_tmp.src = root + i + ".png";
	}
}

///////////////////////////////////////////////////////////////////////
/// IIFE
///////////////////////////////////////////////////////////////////////
;(function() {
	h1_character = document.getElementById("h1_character");
	btn = document.getElementById("btn_randomize");
	btn.onclick = randomize;
	
	h1_character.animate(incoming_character_name, 1000);
})();
