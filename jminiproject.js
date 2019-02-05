function temperatureBug()
{
    var temperature = document.project1.input1.value;
    if ( temperature > 120 )
    {
        document.getElementById("temp").src = "img/miniprojectseason/texas.png";
        return "Welcome to Texas"
    }
    if (temperature < -30 )
    {
        document.getElementById("temp").src = "img/miniprojectseason/pluto.jpeg";
        return "Congrats, you have reached Pluto"
    }
    if ( temperature >= 70 && temperature <= 120 )
    {
        document.getElementById("temp").src = "img/miniprojectseason/summer.gif";
        return "Summer..." + " " + "BRING" + " " + "ON" + " " + "THE" + " " + "HEAT!!!"
    }
    else if ( temperature >= 50 && temperature <= 69)
    {
        document.getElementById("temp").src = "img/miniprojectseason/spring.gif";
        return "Spring"
    }
    else if ( temperature >= 15 && temperature <= 49)
    {
        document.getElementById("temp").src = "img/miniprojectseason/fall.gif";
        return "Fall"
    }
    else if ( temperature >= -30 && temperature <= 14 )
    {
        document.getElementById("temp").src = "img/miniprojectseason/winter.gif";
        return "Winter"
    }
}

function easteregg()
{
    return "Put in a temperature greater than 120 and a temperature less than -30"
}

function caloriecounter()
{
    var activity=document.getElementById("workList").value;
    var timespent= Number(document.project2.timespent.value);
    var walking = 6;
    var running = 12.5;
    var swimming = 18;
    var bowling = 16;
    var tv = 2;


    if (activity == "walking")
    {
      return "You lost" + " " + walking * timespent + ' ' + "calories";
    }
    else if (activity == "running")
    {
        return "You lost" + " " + running * timespent + ' ' + "calories";
    }
    else if (activity == "swimming")
    {
        return "You lost" + " " + swimming * timespent + ' ' + "calories..." + " " + "I don't know how to swim"
    }
    else if (activity == "bowling")
    {
        return "You lost" + " " + bowling * timespent + ' ' + "calories." + " " + "I hate bowling I don't know why i put this here";
    }
    else if (activity == "tv")
    {
        return "You gained" + " " + tv * timespent + ' ' + "calories..." + " " + "you should probably get up and do something";
    }



}

function assignGrade() {
    var grade = document.project3.input1.value;
    if (grade >= 96) {
        return "A+"
    }
    else if (grade < 96 && grade >= 93) {
        return "A"
    }
    else if (grade < 93 && grade >= 90) {
        return "A-"
    }
    else if (grade < 90 && grade >= 87) {
        return "B+"
    }
    else if (grade < 87 && grade >= 85) {
        return "B"
    }
    else if (grade < 85 && grade >= 82) {
        return "B-"
    }
    else if (grade < 82 && grade >= 77) {
        return "C+"
    }
    else if (grade < 77 && grade >= 73) {
        return "C"
    }
    else if (grade < 75 && grade >= 71) {
        return "C-"
    }
    else if (grade < 71 && grade >= 68) {
        return "D+"
    }
    else if (grade < 68 && grade >= 64) {
        return "D"
    }
    else if (grade < 64 && grade >= 60) {
        return "D-"
    }
    else if (grade < 60 && grade >= 56) {
        return "F+"
    }
    else if (grade < 56 && grade >= 53) {
        return "F"
    }
    else if (grade < 53) {
        return "F-"
    }
}