for(let i=0;i<20;i++){
let b=document.createElement("div");
b.className="bubble";
b.style.left=Math.random()*100+"%";
b.style.width=b.style.height=(20+Math.random()*40)+"px";
b.style.animationDuration=(5+Math.random()*6)+"s";
document.body.appendChild(b);
}

function startSite(){
document.getElementById("bgMusic").play();
nextPage(2);
}

function nextPage(num){
document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById("page"+num).classList.add('active');
}

function checkPass(){
let pass=
n1.value+n2.value+n3.value+n4.value;

if(pass==="0118"){
nextPage(3);
}else{
alert("Wrong Password ❤️");
}
}

function openLetter(){
document.getElementById("popup").style.display="flex";
typeLetter();
}

let msg=`Hi mikaela,

i regret to inform you that you have accidentally gained a fan… and also a part-time programmer apparently 😭 don’t worry, i’m a very low-maintenance fan. no screaming, no banners… just quietly existing and randomly doing code like ??? why am i like this but seriously, you’re really cool. like if there was a ranking system, you’d be at the top, and i’d be somewhere in the background debugging my life and hoping it compiles also i don’t know why but i keep ending up doing code for you like it’s my side quest or something. not complaining tho, it’s kinda funny at this point. 10/10 would debug again 👍 this is not a confession or anything dramatic btw. just me acknowledging that you’ve got main character energy while i’m out here writing code and pretending i know what i’m doing and hey, if you ever need someone to debug your problems, i’ll always be here—right behind you, ready to help anyway congrats on being awesome. no action needed from your side (unless you need more code… which, let’s be honest, i’ll probably do anyway) — Dexuzzzzzzzzzz`;

let i=0;

function typeLetter(){
document.getElementById("typed").innerHTML="";
i=0;

let typing=setInterval(()=>{
if(i<msg.length){
document.getElementById("typed").innerHTML+=msg.charAt(i);
i++;
}else{
clearInterval(typing);
}
},40);
}

function askMemories(){
document.getElementById("popup").style.display="none";
document.getElementById("question").style.display="flex";
}

let size=1;

function growYes(){
size+=0.3;
document.getElementById("yesBtn").style.transform="scale("+size+")";
}

let index=0;
let totalSlides=document.querySelectorAll("#slides img").length;

function moveSlide(n){
index+=n;
if(index>=totalSlides) index=0;
if(index<0) index=totalSlides-1;
document.getElementById("slides").style.transform=
"translateX(-"+(index*100)+"%)";
}

setInterval(()=>{
if(document.getElementById("page4").classList.contains("active")){
moveSlide(1);
}
},3000);

function openGallery(){
document.getElementById("galleryBox").style.display="flex";
}

function closeGallery(){
document.getElementById("galleryBox").style.display="none";
}