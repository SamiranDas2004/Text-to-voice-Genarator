let speech=new SpeechSynthesisUtterance();
let button=document.querySelector('button');
let textarea=document.querySelector('textarea');

let voices=[];
let voiceselect= document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    voices.forEach((voice,i)=>(voiceselect.options[i]=new Option(voice.name,i)));
};

voiceselect.addEventListener("change",()=>{
    speech.voice=voices[voiceselect.value];
})

button.addEventListener('click',()=>{
    speech.text=textarea.value;
    window.speechSynthesis.speak(speech);
});