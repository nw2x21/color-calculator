const prompt = require('prompt-sync')();

let option = Number(prompt("Enter [1] for color construction. Enter [2] for color deconstructio: "));

if (option === 4){
    const colormix1 = Number(prompt ("Enter first primary color: [1]-red [2]-blue [3]-yellow "));
    const colormix2 = Number(prompt ("Enter second primary color: [1]-red [2]-blue [3]-yellow "));
    const colormixsum = (Number);
        if (colormixsum === 3 ) {
            console.log( "This color combination makes purple! ");
            }else if (colormixsum === 4){
                console.log( "This color combination makes orange! ");
            }else if (colormixsum === 5){
                console.log( "This color combination makes grean! ");
            }else if (colormixsum > 5 || colormixt < 1) {
                console.log ("error");
            }

}else if (option === 2){
        const colmix = Number(prompt ("Enter first primary color: [4]-purple [5]-orange [6]-green "));
        const colmixanswer = (Number);
            if (colmixanswer === 4){
                    console.log (" This color deconstructed makes a combination of red and blue" );
                }else if   (colmixanswer === 5){
                    console.log ("This color deconstructed makes a combination of red and yellow" );                 
                }else if (colmixanswer === 6){
                    console.log (" This color deconstructed makes a combination of blue and yellow" );
                }else if (colmixanswer > 5 || colmixanswer < 3)
                    console.log ("error");
            }   