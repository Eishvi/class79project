var dish=[];
function submit() {
 var name1=document.getElementById("dish1").value;
 var name2=document.getElementById("dish2").value;
 var name3=document.getElementById("dish3").value;
 var name4=document.getElementById("dish4").value;
 dish.push(name1);
 dish.push(name2);
 dish.push(name3);
 dish.push(name4);
document.getElementById("displayname").innerHTML=dish;
document.getElementById("submitbtn").style.display="none";
document.getElementById("sortbtn").style.display="inline-block";
}
function sorting() {
  dish.sort()
  document.getElementById("displayname").innerHTML=dish;
}