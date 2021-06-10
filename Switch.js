let day = 'monday'           
switch(day){
    case 'monday':
        console.log("7 am");
        break;                   //if we dont give break it prints all output but if the day is sat or sunday iy doest because they are at last but monday it is starting soo after case is satisfied it just fall so we should give a break 
    case 'tuesday':
    case 'wednesday':
    case 'Thursday':
        console.log("8 am");   //if the statement is same multiple cases we cann write all together and write it once
        break;
    case 'Friday':
        console.log("8:30am");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("9 am");
        break;
    default:
        console.log("slepp");  //if the case is not in given data then we use default ex:day='holiday'
     
}