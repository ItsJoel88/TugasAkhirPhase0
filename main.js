var userScoreSpan = document.getElementById('user-score')
var compScoreSpan = document.getElementById('comp-score')
var userScore = 0
var compScore = 0
var score = document.querySelector('.score')
var fireElement = document.getElementById('fire')
var earthElement = document.getElementById('earth')
var waterElement = document.getElementById('water')
var windElement = document.getElementById('wind')
var fireAudio = new Audio('fire.mp3')
var earthAudio = new Audio('earth.mp3')
var waterAudio = new Audio('water.mp3')
var windAudio = new Audio('wind.mp3')
function audioFunction(letter){
    if(letter==='fire'){
        fireAudio.play()
    }else if(letter==='earth'){
        earthAudio.play()
    }else if(letter==='water'){
        waterAudio.play()
    }else if(letter==='wind'){
        windAudio.play()
    }
}
function inputName(){
    var person = prompt("Please enter your name");
    if (person != null) {
    document.getElementById("user-input").innerHTML =
    person.toUpperCase()
    }
}
function computerElement(){
    var element = ['fire','earth','water','wind']
    var random = Math.floor(Math.random()*4)
    return element[random]
}
function menang(){
    userScore+=1
    userScoreSpan.innerHTML=userScore
    compScoreSpan.innerHTML=compScore
}
function kalah(){
    compScore+=1
    compScoreSpan.innerHTML=compScore
    userScoreSpan.innerHTML=userScore
}
function battle(element){
    var computer = computerElement()
    switch(element + computer){
        case "firewind":
        case "windearth":
        case "earthwater":
        case "waterfire":
            menang();
            break;
        case "windfire":
        case "earthwind":
        case "waterearth":
        case "firewater":
            kalah();
            break;
        default:
            break;        
    }
}
function main(){
    fireElement.addEventListener('click',function(){
        battle('fire')
    })

    earthElement.addEventListener('click',function(){
        battle('earth')
    })

    waterElement.addEventListener('click',function(){
        battle('water')
    })

    windElement.addEventListener('click',function(){
        battle('wind')
    })
}

