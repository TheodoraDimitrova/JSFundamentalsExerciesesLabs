function lastDayOfMount(input) {
    let year = input[2];
    let mount = input[1] ;
    //let date = input[0] ;
    let d = new Date(year, mount-1);
    d.setDate(0);//0 will result in the last day of the previous month
   // console.log(d);
   console.log(d.getDate());

}


lastDayOfMount([13, 12, 2004]);

//[13, 12, 2004]
//[17, 3, 2002]