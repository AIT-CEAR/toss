function change() {
  document.getElementById("head").innerHTML = "All the best..!!";
  document.querySelector("button").innerHTML = "Tossing..";
  document.querySelector("img").style.display="none";
  document.getElementById("timer").style.display = "block";
  var a = 4;
  var x = setInterval(function() {
    a = a - 1;
    document.getElementById("timer-val").innerHTML = a;
    if (a === 0) {
      clearTimeout(x);
      document.getElementById("timer").style.display = "none";
      showphoto();
    }
  }, 700);
}

function showphoto(){
  var r=Math.floor(Math.random()*6)+1;
  if(r%2!==0){
    document.querySelector("img").style.display="block";
    document.getElementById("head").innerHTML = "Tails..!!";
    document.querySelector("img").setAttribute("src","front.jpg");
  }
  else{
    document.querySelector("img").style.display="block";
    document.getElementById("head").innerHTML = "Heads..!!";
    document.querySelector("img").setAttribute("src","back.jpg");
  }
  document.querySelector("button").innerHTML = "Try Again";
}
