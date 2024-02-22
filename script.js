function work(sumFactKpi, sumKpi) {
    var workIndex = Math.round((sumFactKpi/sumKpi)*100)/100; //index
    var workDayInTheWeek = 20; //day
    var workTimeInDay = 480; //min
    var newWorkingTime = Math.floor(workTimeInDay*workIndex); //min
    var freeDay = Math.floor((workTimeInDay-newWorkingTime)*workDayInTheWeek/workTimeInDay);
    
    if (freeDay>0){
        return "Congratulations! You have " + freeDay + " extra free day!";
    }
    else {
        return "Your new working day is " + Math.floor(newWorkingTime / 60) + " hours " + newWorkingTime % 60 + " minutes";
    }
   
}
    console.log(work(48, 50));