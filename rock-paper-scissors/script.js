let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let youScore = document.querySelector("#youScore");
let comScore = document.querySelector("#comScore");
let youScoreValue = 0;
let compScoreValue = 0;


const imageInput = document.querySelector(".input_image_container input");
const imageUploadButton = document.querySelector(".input_image_container button");
const userImage = document.querySelector(".user div img");
const mainPart = document.querySelector(".game_container");
const imageContainer = document.querySelector(".input_image_container");

imageUploadButton.addEventListener("click",() => {
     const file = imageInput.files[0];
     if(file && (file.type == "image/jpeg" || file.type == "image/jpg" || file.type == "image/png" || file.type == "image/webp")){
       const url = URL.createObjectURL(file);
       userImage.src = url;
        mainPart.style.display = "inline";
        imageContainer.style.display = "none";
     }else{
        alert("Please! Upload Your Image");
     }
});




function draw(){
    msg.innerText="Match was draw!";
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        console.log("you",userChoice);
        compGen(userChoice);
    })
});

const compGen = (userChoice) => {
    let genValue = ["rock","paper","scissors"];
    let genKey = Math.floor(Math.random() * 3);
    let compChoice = genValue[genKey];


    if(userChoice == compChoice )
        {
            draw();
        }else{
            let userWin = true;
            
            if(userChoice == "rock")
                {
                    //comp choice paper,scisscors
                    userWin = (compChoice == "paper" )? false : true;
                }else if(userChoice == "paper")
                    {
                        //com choice rock, scissors
                        
                        userWin = (compChoice == "scissors") ? false : true;

                    }else if(userChoice == "scissors")
                        {
                            //comp choice rock , paper
                            userWin = (compChoice == "rock") ? false : true;
                        }
                        showWin(userWin,userChoice,compChoice);
        }
}
function showWin(win,you,comp)
{
        if(win == true)
            {
                youScoreValue++;
                youScore.innerText = youScoreValue;
                msg.innerText = `You won ! you chose \"${you}\" and vasu chose \"${comp}\" `;
            }else {
                compScoreValue++;
                compScore.innerText = compScoreValue;
                msg.innerText = `You lost ! you chose \"${you}\" and vasu chose \"${comp}\"`;
            }
}

/* dark - mode */

let darkMode = document.querySelector(".change-mode");
let body = document.querySelector("body");
let headerSection = document.querySelector(".header-section")
let dark = true;

darkMode.onclick = () => {
    if(dark)
    {
        darkMode.innerText = "White Mode";
        darkMode.style.color = "white";
        darkMode.style.backgroundColor = "black";
        dark=false;
    }else{
        darkMode.innerText = "Dark Mode";
        darkMode.style.color = "black";
        darkMode.style.backgroundColor = "white";
         dark=true;
    }
    body.classList.toggle("darkBody");
    choices.forEach((choice) => {
        choice.classList.toggle("whiteHover");
    });
    msg.classList.toggle("pinkColor");
    headerSection.classList.toggle("pinkColor");
};

// console.log(headerSection)
