// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Simple Primitives and Complex Primitives ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //Write a program to greet a person given their first and last name.
    // function greeto(firstName, lastName) {
    //     if (firstName && lastName) {
    //         console.log(`Hello, ${firstName} ${lastName}`);
    //     } else{
    //         console.log('Please mention both first and last name');
    //     }
    // }
    // greeto('Jack', 'Reacher');
//--------------------------------------------------------------------------------------------------------------------------------------------- 
        //Write a program to greet a person based on their gender.
        // function gendergreet(_name,gender){
        //     if (gender=='Male'){
        //         console.log(`Hello, Mr.${_name} !`);
        //     }else if (gender=='Female'){
        //         console.log(`Hello Miss, ${_name} !`);
        //     }else if (gender=='Third'){
        //         console.log(`Hello ${_name} !`);
        //     }else {
        //         console.log('Invalid gender!');
        //     }
        // }
        // gendergreet('Terry', 'Attack Helicopter');
// ------------------------------------------------------------------------------------------------------------------------------------
    // //Write a program that counts for 0-20 and prints (using for loop).
    // for (counter=0; counter<=20; counter+=1){console.log(counter);}

// ------------------------------------------------------------------------------------------------------------------------------------
    // Write a program to greet a person given their first and last name.
    // const firstName = "Jack" 
    // const lastName = "Reacher" 
    //     if (firstName && lastName) {
    //         console.log(`Hello, ${firstName} ${lastName}`);
    //     } else{
    //         console.log('Please mention both first and last name');
    //     }
// ------------------------------------------------------------------------------------------------------------------------------------
    // Write a program to greet a person based on their gender.
    // const _name = "Terry"
    // const gender = "Attack helicopter"
    //     if (gender=='Male'){
    //         console.log(`Hello, Mr.${_name} !`);
    //     }else if (gender=='Female'){
    //         console.log(`Hello Miss, ${_name} !`);
    //     }else if (gender=='Third'){
    //         console.log(`Hello ${_name} !`);
    //     }else {
    //         console.log('Invalid gender!');
    //     }
// ------------------------------------------------------------------------------------------------------------------------------------
    // Write a program that counts for 0-20 and prints (using for loop).
    for (counter=0; counter<=20; counter+=1){console.log(counter);}
// ------------------------------------------------------------------------------------------------------------------------------------
//      Write a progam that prints all the even numbers in an array
    // let nos = [21,22,23,24,25,26,89,88]
    // for (x=0; x<nos.length; x+=1){
    //     if (nos[x]%2==0){
    //         console.log(nos[x]);
    //     }
    // }
//---------------------------------------------------------------------------------------------------------------------------------------
// Write a program to print the biggest number in the array
    // let nos = [21,22,23,24,25,26,89,88]
    // let maxnum = 0
    // for (x=0; x<nos.length;x+=1){
    //     if(nos[x]>maxnum){
    //         maxnum = nos[x]
    //     }
    // }
    // console.log(maxnum)
//----------------------------------------------------------------------------------------------------------------------------------------
    // // Write a program to print the smallest number in the array
    // let nos = [21,22,23,24,25,26,89,88]
    // let minnum = nos[0]
    // for (x=0; x<nos.length; x+=1){
    //     if(nos[x]>minnum){
    //         minnum=nos[x]
    //     }
    // }
    // console.log(minnum);
//--------------------------------------------------------------------------------------------------------------------------------------------- 
// Write a program that prints all the male person's first name given a complex object
    // let person = ['Jack', 'Himmat Singh', 'Abby'];
    // let gender = ['Male','Male','Female'];
    // for (x=0;x<person.length;x+=1){
    //     if (gender[x]=='Male'){
    //         console.log(person[x]);
    //     }
    // }
//---------------------------------------------------------------------------------------------------------------------------------------------     
//Write a program that prints every man's (above 40's) name, working as Senior Analyst or Analyst 
    // const allusers = [
    //     {fN:'Jack', gender:'Male',addn:{
    //         job:'Special Investigator', age:38
    //     }},
    //     {fN:'Himmat Singh', gender:'Male',addn:{
    //         job:'Senior Analyst', age:45
    //     }},
    //     {fN:'Abby',gender:'Female'}];

    // for (x=0; x<allusers.length; x+=1){
    //     if (allusers[x].gender=='Male'&& allusers[x].addn.age>40 && (allusers[x].addn.job=='Analyst' || allusers[x].addn.job=='Senior Analyst' ))
    //     {console.log(allusers[x].fN);}
    // }     

//----------------------------------------------------------------------------------------------------------------------------------------
// Intitialize the array indices at extreme ends. Simultaneously, increment the indices and keep them moving towards the opposite ends,
//     until the condition in which the left index being smaller than the right one remains true. 
//     Finally swap them using array destructuring assignment.
    // let nos_ = [21,22,23,24,25,26];
    // let nos1 = [1,3,5,7,9];
    // function RevArray(nos)
    // {for (let l2ri = 0, r2li = nos.length-1; l2ri < r2li; l2ri+=1, r2li-=1) 
    //     {[nos[l2ri],nos[r2li]] = [nos[r2li],nos[l2ri]]}    
    // }
    // console.log("Given Array is : [" + Array(nos_) + "]");
    // RevArray(nos_);
    // console.log("Reversed Array is : [" + Array(nos_) + "]");
//--------------------------------------------------------------------------------------------------------------------------------------------- 
// Write a program that reverses all the numbers in the array