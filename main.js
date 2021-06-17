var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start() {

    document.getElementById("ta").innerHTML="";

    recognition.start();
}

recognition.onresult=function(event){

    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("ta").innerHTML=content;
    console.log(content);
    if(content=="Take my selfie"){
        console.log("Taking Selfie");
        speak();
    }
}

function speak() {

    var sty=window.speechSynthesis;
    speakdata="taking Your Selfie in five seconds";
    var das=new SpeechSynthesisUtterance(speakdata);
    sty.speak(das);
    Webcam.attach(cam);
    setTimeout(function(){
        
        Snaping();
        save();
    },5000);

}

var cam=document.getElementById("wc");

Webcam.set({
    
    width:350,
    height:350,
    image_format:'jpeg',
    jpeg_quality:90

});

function Snaping(){

    Webcam.snap(function(dataurl) {
        document.getElementById("Snap").innerHTML='<img id="SELF" src="'+dataurl+'">'
    });

}

function save() {

    link = document.getElementById("link") ;
    image = document.getElementById("SELF") ;
    link.href = image;
    link.click();

}