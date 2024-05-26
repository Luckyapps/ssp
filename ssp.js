//1: Schere |2: Papier |3: Stein

var winningConditions = [
    [1,2,0], [2,3,0], [3,1,0], //p1 wins standard game
]; //[Cond1, Cond2, indx of winner]

var token = [
    {
        name: "BLANK",
        emoji: "BLANK"
    },
    {
        name: "Schere",
        emoji: "✂️"
    },
    {
        name: "Papier",
        emoji: "📜"
    },
    {
        name: "Stein",
        emoji: "🪨"
    }
]

function startGame(){
    var result = runGame(getTokenId(document.getElementById("p1_in").value));
    updateUI(result);
}

function translateToken(id, type){
    if(id && type){
        return token[id][type];
    }else if(!id && !type){
        return undefined;
    }else{
        return {
            toName: ()=>{
                return token[id].name;
            },
            toEmoji: ()=>{
                return token[id].emoji;
            }
        }
    }
}

function getTokenId(inp){
    for(i=0; i<token.length; i++){
        if(inp == token[i].name || inp == token[i].emoji){
            return i;
        }
    }
    return undefined;
}

function runGame(p1, p2){ //Handle I/O and Bots
    if((p1 || p2) || (p1 && p2)){
        var botChoice = random(1,3);
        if(!p1){ //Wenn nur p2
            var result = getResult(botChoice, p2);
            return [botChoice, p2, result];
        }else if(!p2){ //Wenn nur p1
            var result = getResult(p1, botChoice);
            return [p1, botChoice, result];
        }else{ //Wenn beide
            result = getResult(p1, p2);
            return [p1, p2, result];
        }
    }else{
        return false;
    }
}

function getResult(p1, p2){ //Get Raw Game results
    var winner = false;
    winningConditions.forEach((condition)=>{
        if(condition[0] == p1 && condition[1] == p2){ //Universal answer, if winningConditions contains all possibilities
            winner = condition[2] + 1; //Winner1
        }else if(condition[0] == p2 && condition[1] == p1){ //Addition to handle lazyness at winning Conditions
            winner = 2;
        }
    });
    return winner;
}


function random(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }