        //1
// let car={
//     manufacturer:"bmw",
//     year:2010,
//     model:'e60',
//     averageSpeed:120
// }
// function showCar(){
//     alert(car.manufacturer)
//     alert(car.model)
//     alert(car.year)
//     alert(car.averageSpeed)
// }
// function destination(distance){
//
//     let drivetime=distance/car.averageSpeed;
//     let braek=0;
//
//     let roadtime=drivetime;
//     while (roadtime>4){
//         braek++;
//         roadtime-=4;
//     }
//     let total=drivetime+braek;
//     alert('total time= '+total.toFixed(2)+' braek='+braek+' drive time= '+drivetime.toFixed(2));
//
//
//
//
// }
// showCar()
//
// let distance=Number(prompt("enter kilometers:"));
// destination(distance);
        //2
let PrintMachine={
    sizeType:8,
    colorType:'black',
    familyType:"small",

    Print:function (txt){
            alert('size type:'+this.sizeType+'\n'+
                'color:'+this.colorType+'\n'+
                'color:'+this.familyType+'\n'+
                'text'+ txt
            );

        }
};
let txt=prompt("Enter your text:");




setTimeout(()=>PrintMachine.Print(txt), 5000);



