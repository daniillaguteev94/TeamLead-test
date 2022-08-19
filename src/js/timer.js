import $ from "jquery"; 
const time = $('.seconds');
  
timerDecrement();

function timerDecrement() {
  setTimeout(function() {
    const newTime = time.text() - 1;
    
    time.text(newTime);
    
    if(newTime > 0) timerDecrement();
  }, 10000);
}