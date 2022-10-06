# Description

This project applies all the skills learned on week 3 of the Bootcamp, the focus is APIs functions and access user input from the web, also explore templates from BootStrapa and jQuery. 
The scheduler is a system to support the user to create a TODO list, so they can organise their day to work. The timer on the top of the page will help the user to check the current time, and also, the field where the user add the information, will change color according the time.



### Link to the Scheduler: [Scheduler](https://luizborges146.github.io/Scheduler/)

## Installation

N/A

## Usage

* Functionalities:
 * Allow user to add information on the text box.
 * Information will be saved in localStorage, so even if the user reload the page, the information will ramin there.
 * Timer will be displayed at the top of the page
 * The user input field, change color according the time:
        * Gray - represents the past.
        * Red - represents the current time.
        * Green - represents the upcoming time.

 
#### Function below represents the time and also the schedule to change the field color, as the time runs, the field will change color automatically, there is no need for the user to click in the reload page to check the information.
 ```
var updateTime = function () {
    var currentDate = moment().format("dddd, MMMM DD YYYY");
    var currentTime = moment().format(':mm:ss');
    var currentHour = moment().format('HH');
    $("#timer").text(currentDate + " --   " + currentHour + currentTime)
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

 ```


## External support documentation

As part of the process, I used some references to complete the task:

- [Font Awesome](https://fontawesome.com/)<br />
- [W3School](https://www.w3schools.com/)<br />
- [Mozilla](https://developer.mozilla.org)<br />
- [READ.me](https://docs.readme.com/docs/linking-to-pages")<br />
- [GitHub](https://pages.github.com/)<br />
- [Git_cheat_sheet_pdf](https://education.github.com/git-cheat-sheet-education.pdf)<br />
- [BootsStrap](https://getbootstrap.com/docs/4.5/)<br />
- [jQuery](https://jquery.com/)<br />
- [JqueryUi](https://jqueryui.com/)<br />
- [MomentJs](https://momentjs.com/docs/#/displaying/format/)<br />

## Social

[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/luizborges146) [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/https://www.linkedin.com/in/luiz-borges-2377b7142//)

N/A

## License

Please refer to the LICENSE in the repo.
