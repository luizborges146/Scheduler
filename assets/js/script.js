
var in09 = document.getElementById("input09"); 
var in10 = document.getElementById("input10");
var in11 = document.getElementById("input11");
var in12 = document.getElementById("input12");
var in13 = document.getElementById("input13");
var in14 = document.getElementById("input14");
var in15 = document.getElementById("input15");
var in16 = document.getElementById("input16");
var in17 = document.getElementById("input17");


//-----------------Set the timer --------------------------------
var updateTime = function () {
    var currentDate = moment().format("dddd, MMMM DD YYYY");
    var currentTime = moment().format(':mm:ss');
    var currentHour = moment().format('HH');
    $("#timer").text(currentDate + " --\n   " + currentHour + currentTime)
    var timeColor = document.querySelectorAll("input");
    // console.log(timeColor.length);
    // console.log(typeof(currentHour));

    for (var i = 0; i < timeColor.length; i++) {
        console.log(timeColor[i]);
        if ((i + 9) < currentHour) {
            timeColor[i].classList.add("beforeTime");//gray
        } else if (i + 9 == currentHour){
            timeColor[i].classList.add("onTime"); //red
        } else if (i + 9 >= currentHour) {
            timeColor[i].classList.add("afterTime"); //green
        }
    }

 }
updateTime()
setInterval(updateTime, 1000);



/* ---------------------------------------------------------------------------*/


//------ create a function to save the information inside the div

function addInfo() {
    //var input9 = document.getElementById('currentTime');
    //input9.textContent = input.value;
    localStorage.setItem("input09", in09.value); 
}

/* ---------------------------------------------------------*/

function addInfo10(){
    localStorage.setItem("input10", in10.value);
}

function addInfo11(){
    localStorage.setItem("input11", in11.value);
}

function addInfo12(){
    localStorage.setItem("input12", in12.value);
}

function addInfo13(){
    localStorage.setItem("input13", in13.value);
}

function addInfo14(){
    localStorage.setItem("input14", in14.value);
}

function addInfo15(){
    localStorage.setItem("input15", in15.value);
}

function addInfo16(){
    localStorage.setItem("input16", in16.value);
}

function addInfo17(){
    localStorage.setItem("input17", in17.value);
}

function displayMessage() {
    var input09 = localStorage.getItem("input09");
    in09.value = input09;

    var input10 = localStorage.getItem("input10");
    in10.value = input10;

    var input11 = localStorage.getItem("input11");
    in11.value = input11;

    var input12 = localStorage.getItem("input12");
    in12.value = input12;

    var input13 = localStorage.getItem("input13");
    in13.value = input13;

    var input14 = localStorage.getItem("input14");
    in14.value = input14;

    var input15 = localStorage.getItem("input15");
    in15.value = input15;

    var input16 = localStorage.getItem("input16");
    in16.value = input16;

    var input17 = localStorage.getItem("input17");
    in17.value = input17;
}

displayMessage(); //--------------------- this need to be logged after the variable was set 

