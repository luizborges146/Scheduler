// var date = moment().format("MM/DD/YYYY");
// var time = moment().format("HH:mm:ss")
// var displayTime =  document.getElementById("timer");


var updateTime = function () {
    var currentDate = moment().format("ddd, MMMM DD YYYY");
    var currentTime = moment().format(':mm:ss');
    var currentHour = moment().format('HH');
    $("#timer").text(currentDate + "    " + currentHour + currentTime)
}
updateTime()
setInterval(updateTime, 1000);

//------ create a function to save the information inside the div

function addInfo1(input) {
    //var input9 = document.getElementById('currentTime');
    //input9.textContent = input.value;
    console.log(input.value);
    localStorage.setItem("inputp", input.value); 
}

