function initBotGame(){
    document.getElementById("Bswitch").classList.add("mS_selected");
    document.getElementById("Mpswitch").classList.remove("mS_selected");
}

function initMpGame(){
    alert("Lokaler Multiplayer nicht verfügbar");
    /*document.getElementById("Mpswitch").classList.add("mS_selected");
    document.getElementById("Bswitch").classList.remove("mS_selected");*/
}

window.addEventListener("load", ()=>{
    document.getElementById("p1_in").addEventListener("change", ()=>{
        if(getTokenId(document.getElementById("p1_in").value) != undefined){
            document.getElementById("p1_out").innerHTML = translateToken(getTokenId(document.getElementById("p1_in").value)).toEmoji();
        }
    })
})

function updateUI(result){
    console.log(result);
    document.getElementById("p2_out").innerHTML = translateToken(result[1]).toEmoji();
    if(result[2] == false){
        document.getElementById("p1_result").innerHTML = "🤝";
        document.getElementById("p2_result").innerHTML = "🤝";
    }else if(result[2] == 1){
        document.getElementById("p1_result").innerHTML = "🥳";
        document.getElementById("p2_result").innerHTML = "😭";
    }else{
        document.getElementById("p1_result").innerHTML = "😭";
        document.getElementById("p2_result").innerHTML = "🥳";
    }
}