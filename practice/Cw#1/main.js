'use strict';
// let a;
// console.log(a);
//1)function declaration
// function f1(a,b){
//     let str=' '
//     for(let i=0;i<arguments.length;i++){
//         str+=arguments[i]+" ";
//     }
//     console.log(str);
// }
// f1(1,2,3);
// f1(7,8);
// console.log
// //2) function expresions
// let f2= function(a,b){return a+b;};
// console.log(f2(2,3));
//3)arrow function(немає arguments)
// let f3=(a)=>a*a;
// console.log(f3(3))
//
// do {
//     console.log("+");
// }while(false);
// let w=prompt('enter month number');
// switch(w){
//     case '1':
//         alert('January');
//         break;
//         case '2':
//             alert('February');
//             break;
//             case '3':
//                 alert('March');
//                 break;
//                 case '4':
//                     alert('April');
//                     break;
//                     case '5':
//                         alert('May');
//                         break;
//                         case '6':
//                             alert('June');
//                             break;
//                             case '7':
//                                 alert('July');
//                                 break;
//                                 case '8':
//                                     alert('August');
//                                     break;
//                                     case '9':
//                                         alert('September');
//                                         break;
//                                         case '10':
//                                             alert('October');
//                                             break;
//                                             case '11':
//                                                 alert('November');
//                                                 break;
//                                                 case '12':
//                                                     alert('December');
//                                                     break;
//                                                     default:
//                                                         alert('Please enter correct month number');
//                                                         break;
// }
// let first=Number(prompt('enter first number'));
// let second=Number(prompt('enter second number'));
// let symbol=prompt('enter symbol');
// switch(symbol){
//     case '+':
//         let resultp=first+second;
//         alert(resultp);
//         break;
//         case '-':
//             let resultm=first-second;
//         alert(resultm);
//             break;
//             case '*':
//                let resultr=first*second;
//                alert(resultr);
//                break;
//     case '/':
//         if(first==0 && second==0){
//             alert('you can not' );
//         }
//         let resultd=first/second;
//         alert(resultd);
//         break;
//
// }

// let a =Number(prompt('enter first number'));
// let b =Number(prompt('enter second number'));
// alert(a>b ? a:b);
//
// let w=Number(prompt('enter number'));
// alert(w%5===0? "multiple of 5":"not multiple of 5");
// let q =prompt('enter planet');
// alert(q==="earth"|| q==="Earth"? "Hi earthling": " Hi alien");
// const arr = [1,2,3];
// let a=4;
// function f4(arr){
//     arr.push(a)
//     let b=arr[0];
//     arr[0]=a;
//     arr[3]=b;
//     console.log(arr);
//
//
//
// }
// f4(arr)