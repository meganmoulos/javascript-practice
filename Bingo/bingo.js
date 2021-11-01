window.onload = initAll;
let usedNums = new Array(76);

function initAll() {
    if(document.getElementById){
        document.getElementById("reload").onclick = anotherCard;
        newCard();
    }
        else {
            alert("Your browser does not support this script.");
    }
}

function newCard(){
    for (let i = 0; i < 24; i++){  //will loop 24 times
        setSquare(i);    //passes the value of i into the setSquare() function
    }
}

function setSquare(thisSquare){
    let currentSquare = "square" + thisSquare;
    let colPlace = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];   // give each column a number B:0, I: 1, etc.
    let colBasis = colPlace[thisSquare] * 15;
    let newNum;
    do {
        newNum = colBasis + getNewNum() + 1; 
    } 
    while (usedNums[newNum]);   //if number has been used, it will repeat the loop until an unused number is found

    usedNums[newNum] = true;
    document.getElementById(currentSquare).innerHTML = newNum;
    document.getElementById(currentSquare).className = "";
    document.getElementById(currentSquare).onmousedown = toggleColor;
    }

function getNewNum() {
    return Math.floor(Math.random() * 15);  //random number generator
}

function anotherCard(){
    for(let i = 1; i < usedNums.length; i++){
        usedNums[i] = false;      //so the numbers can be reused
    }
    newCard();
    return false;
}

function toggleColor(evt){
    let thisSquare = evt.target;
    if(thisSquare.className == ""){
        thisSquare.className = "pickedBG";
    }
    else {
        thisSquare.className = "";
    }
    checkWin();   
}

function checkWin(){
    let winningOption = -1;
    let setSquares = 0;
    let winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

    for (let i = 0; i < 24; i++){
        let currentSquare = "square" + i;
        if(document.getElementById(currentSquare).className !=""){
            document.getElementById(currentSquare).className = "pickedBG";
            setSquares = setSquares | Math.pow(2, i);
        }
    }

    for (let i = 0; i < winners.length; i++){
        if((winners[i] & setSquares) === winners[i]){
            winningOption = i;
        }
    }

    if (winningOption > -1){
        for(let i = 0; i < 24; i++){
            if(winners[winningOption] && Math.pow(2, i)){
                currentSquare = "square" + i;
                document.getElementById(currentSquare).className = "winningBG";
            }
        }
    }
}