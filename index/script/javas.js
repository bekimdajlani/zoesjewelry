function setUpEvents (){
   var text = document.getElementById ("sms");
var button = document.getElementById ("show");
button.onclick = function () {
    
    if(sms.className == "open"){
        //shrink the box
        sms.className = "";
        button.innerHTML = "SHOW MORE";
    }else {
        sms.className = "open";
        button.innerHTML = "SHOW LESS";
        
    }
    
}; 
    var myTimer = document.getElementById("image");
    function showImage (){
        myTimer.className = "appear";
    }
    setTimeout(showImage , 3000);
}

window.onload = function (){
    
    setUpEvents();
};
//setupevents kur ke JS qe duhen gjith elementet e faqes i fut te gjitha tek kz funksioni. faqet jan cascade dhe per siguro e therret ne fund me windows.onload
var colorChanger = document.getElementById("color-changer");
var colors = ["red", "black", "goldenrod", "purple"];
var counter = 0;
function changeColor (){
    if(counter >= colors.length){
        counter = 0;
    }
    colorChanger.style.backgroundColor = colors[counter];
    counter++;
}
var timer = setInterval(changeColor, 3000);
colorChanger.onclick = function(){
    
    clearInterval(timer);
    colorChanger.innerHTML = "na cave riken";
}

var myForm = document.forms.myForm;
myForm.onsubmit = function (){
    if(myForm.name.value == ""){
        message.innerHTML = "shkruj naj gjo shkruj";
        return false;
    }else{
        message.innerHTML ="";
        return true;
    }
    
};
myForm.name.onfocus = function () {
    myForm.name.style.border = "4px solid red";
};
myForm.name.onblur = function () {
    myForm.name.style.border = "1px solid black";
};
