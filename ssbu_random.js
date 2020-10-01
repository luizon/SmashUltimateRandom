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
    "MIN MIN"
];
var h1_character;
var btn;
var img_thumbnail;
var root = "https://raw.githubusercontent.com/luizon/SmashUltimateRandom/master/small_thumbnails/"
var incoming_thumbnail = {
  top: ["-50px", "0px"],
  opacity: [0, 1],
  easing: 'ease',
};
var incoming_character_name = {
  top: ["30px", "0px"],
  opacity: [0, 1],
  easing: 'ease',
};
var cont = 0;

var randomize = () => {
    let randomNumber = Math.random()*character.length;
    let index = Math.floor(randomNumber);
    h1_character.innerHTML = character[index];
    img_thumbnail.alt = character[index] + " thumbnail.";
    img_thumbnail.src = root + index + ".png";
    cont++;
    if(cont == 69) {
      h1_character.innerHTML = "KOKÚN";
      img_thumbnail.alt = "kokun";
      img_thumbnail.src = "https://www.uokpl.rs/fpng/d/161-1615013_goku-dragonball-dragonballz.png";
      cont = 0;
    }
    
    animate();
};

function animate() {
    img_thumbnail.animate(incoming_thumbnail, 1000);
    h1_character.animate(incoming_character_name, 1000);
}

function loadImages() {
    for(let i=0; i<character.length; i++) {
        var img_tmp;
        img_tmp = document.createElement("img");
        img_tmp.src = root + i + ".png";
    }
}

;(function() {
    h1_character = document.getElementById("h1_character");
    btn = document.getElementById("btn_randomize");
    img_thumbnail = document.getElementById("img_thumbnail");
    btn.onclick = randomize;
    
    loadImages();
    
    animate();
})();
