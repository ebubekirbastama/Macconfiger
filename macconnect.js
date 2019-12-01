var sayilar = new Array("sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç","sıfır", "bir", "iki", "üç");
var syhmhz = new Array();
for (var i = 0; i < sayilar.length; i++) 
{
  document.getElementById("mac").value = sayilar[i];
  document.getElementsByClassName("submit")[1].click();
  syhmhz.push(document.getElementsByClassName('messageBox')[0].innerText);
}

for (var j = 0; j < syhmhz.length; j++) 
{
  document.write(syhmhz[j].toString()+"<br>");
}

//Sleep Function....
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }

}
//Sleep Function..

