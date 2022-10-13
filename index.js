const  typed = new Typed(".auto-type",
{
strings: ["Get"],
typeSpeed:150,
backspeed:150,
loop:true,

});
const  typed2 = new Typed(".auto-type2",
{
strings: ["Growth!"],
typeSpeed:150,
backspeed:150,
loop:true,

});
const  typed3 = new Typed(".auto-type3",
{
strings: ["FREE"],
typeSpeed:150,
backspeed:150,
loop:true,

});

const  typed4 = new Typed(".auto-type4",
{
strings: ["Next","Same","Upcoming"],
typeSpeed:150,
backspeed:150,
loop:true,

});

const  typed5 = new Typed(".auto-type5",
{
strings: ["Outsourcing","Outreaching","Outcoming"],
typeSpeed:150,
backspeed:150,
loop:true,

});

const  typed6 = new Typed(".auto-type6",
{
strings: ["Resource","Campagian"],
typeSpeed:150,
backspeed:150,
loop:true,

});
const  typed7 = new Typed(".auto-type7",
{
strings: ["Single Step Away"],
typeSpeed:150,
backspeed:150,
loop:true,

});



let valueDisplays = document.querySelectorAll(".az");
let interval = 10;

valueDisplays.forEach((valueDisplay)=>{
     let startValue = 0;
     let endValue = parseInt(valueDisplay.getAttribute("data-val" ));
     let duration = Math.floor(interval/endValue);
     let counter = setInterval(function(){
          startValue += 1;
          valueDisplay.textContent = startValue;
          if(startValue == endValue){
               clearInterval(counter);
          }
     },duration)
})
