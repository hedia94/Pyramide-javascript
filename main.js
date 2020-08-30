function bonjour(report){
    var x=prompt('"Salut, bienvenue dans ma super pyramide ! Combien détages veux-tu ? "'+report+'"?');
    if (x < 25){
        
        for (var i=1;i<=x;i++){
            console.log("#".repeat(2*i-1));
        }
    
    }
    
    
        
    
    else{
        alert("il faut un numéro <25 svp");
    }
}
