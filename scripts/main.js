let rate = document.getElementById("rate-circle");
let result = document.getElementById("result")
let submitBtn = document.getElementById("btn");
let firstCard = document.getElementById("card");
let secondCard = document.getElementById("thank-card")

for(let i=0;i<rate.children.length;i++){
    rate.children[i].addEventListener("click",function(){
        removeAllColor();
        rate.children[i].style.backgroundColor = "hsl(25, 97%, 53%)";
        rate.children[i].style.color = "hsl(0, 0%, 100%)";
        result.innerText = `You selected ${rate.children[i].innerText} out of 5`;
    })
}

submitBtn.addEventListener("click", function(){
    if(result.innerText!==""){
        firstCard.style.display="none";
        secondCard.style.display="block";
    }

})

function removeAllColor(){
for(let i =0;i<rate.children.length;i++){
    rate.children[i].style.backgroundColor = "hsl(216, 12%, 54%, 0.2)";
    rate.children[i].style.color = "hsl(216, 12%, 54%)";
}
}