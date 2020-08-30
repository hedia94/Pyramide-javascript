function bonjour(report){
    var x=prompt('"Salut, bienvenue dans ma super pyramide ! Combien détages veux-tu ? "'+report+'"?');
    if (x < 25){
        
        var width = (2 * x) -1; // Always the case.
        var midpoint = Math.floor(width / 2); // Middle of pyramid.
        let level = ''; // will be reset each level loop
    
        for(var i = 0; i < x; i++) { // Looping through levels
            level = '';
            for(var j = 0; j < width; j++) {
                if(j < midpoint-i || j > midpoint+i) {
                    level += '.';
                } else {
                    level += '#';
                }
            }
            console.log(level);
        }
    }
    
    
        
    
    else{
        alert("il faut un numéro <25 svp");
    }
}
