function time(HOUR, MINUTE, PERIOD){
    if(MINUTE < 30 && PERIOD == "PM"){
        console.log("Hey, it's just passed " + HOUR + " " +PERIOD );
    }
    else{
        if(HOUR == 12 && MINUTE > 30 && PERIOD == "AM" ){
            console.log("Hey, its just passed midnight");
        }
        if(HOUR == 11 && MINUTE > 30 && PERIOD == "AM"){
            console.log("Hey, its almost 12 am!");
        }
        if (HOUR == 10 && MINUTE > 30 && PERIOD == "AM"){
            console.log("Hey, its almost 11 am!");
        }
        if(HOUR == 9 && MINUTE > 30 && PERIOD == "AM"){
            console.log("Hey, its almost 10 am!");
        }
        if(HOUR == 8 && MINUTE > 30 && PERIOD == "AM"){
            console.log("Hey, its almost 9 am!");
        }
        if(HOUR == 7 && MINUTE > 30 && PERIOD == "AM"){
            console.log("Hey, its almost 8 am!");
        }
        if(HOUR == 6 && MINUTE > 30 && PERIOD == "AM"){
            console.log("Hey, its almost 7 am!");
        }
        if(HOUR == 5 && MINUTE > 30 && PERIOD == "AM"){
            console.log("Hey, its almost 6 am!");
        }
        if(HOUR == 4 && MINUTE > 30 && PERIOD == "AM"){
            console.log("Hey, its almost 5 am!");
        }
        if(HOUR == 3 && MINUTE > 30 && PERIOD == "AM"){
            console.log("Hey, its almost 4 am!");
        }
        if(HOUR == 2 && MINUTE > 30 && PERIOD == "AM"){
            console.log("Hey, its almost 3 am!");
        }
        if(HOUR == 1 && MINUTE > 30 && PERIOD == "AM"){
            console.log("Hey, its almost 2 am!");
        }
        // for(HOUR = 1; HOUR < 13; HOUR++){
        //     if(MINUTE < 30 ){
        //         console.log("Hey, it's just passed " + HOUR + PERIOD);
        //     }
        //     else if(MINUTE > 30){
        //         console.log("Hey it's almost " + HOUR + 1 + PERIOD);
        //     }
        // }


    }
}

time(1, 50, "PM");