// function to animate the id=para1 element in a rectangular path
var topOffset=100;
var leftOffset=101;
  function  moveHeading() {
    if (leftOffset<500 && topOffset<500 && leftOffset !=100) {
    $('#kajalPhoto').offset({left: leftOffset});
    leftOffset+=1;
    }
  else if (leftOffset==500 && topOffset<500) {
    $('#kajalPhoto').offset({ top:topOffset });
    topOffset++;
    }
  else if (topOffset==500 && leftOffset>100) {
    $('#kajalPhoto').offset({left:leftOffset});
    leftOffset--;
  }
  else if(leftOffset==100 && topOffset>100) {
      $('#kajalPhoto').offset({top:topOffset});
      topOffset--;
  }
  else {
    topOffset = 100;
    leftOffset = 101;
  }
}
var periodOfCalling=10;
var countClick=0;



function clickHandler(event) {
  setInterval(moveHeading, periodOfCalling);
  countClick++; periodOfCalling--;
  console.log('periodOfCalling is '+periodOfCalling+'countClick is '+countClick);
  if(countClick==3) {
  alert("Buddy you Won!!!");
  countClick=0;
}
}
$('#kajalPhoto').click(clickHandler);
