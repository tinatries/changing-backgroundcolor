let randNum =[0, 0, 0]; 



btn.addEventListener("click", function(){
    for (let i = 0; i < randNum.length; i++) randNum[i] = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = 'rgb(' + randNum[0] + ',' + randNum[1] + ',' + randNum[2] + ')';
    document.getElementsByClassName("rgb-display")[0].innerHTML = "RGB: " + randNum[0] + ', ' + randNum[1] + ', ' + randNum[2];
})
