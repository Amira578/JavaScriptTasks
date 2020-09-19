
//if- else tasks
let question= prompt('What is the "official" name of JavaScript?', '');
function conditionTask1(){
    if (question == 'ECMAScript') {
        alert('Right!');
      } else {
        alert("You don't know? ECMAScript!");
      }
 
}
conditionTask1();  

let number=prompt("please Write a number","");

function conditionTask2(){
    if (number>0){
        alert("1");
    }
    else if (number<0){
        alert("-1");
    }
    else {
        alert("0");
    }
    
}
conditionTask2()


function conditionTask3(){
    let result= (a + b < 4);
    result ? "below ": "over" ;
    alert(result);
}
conditionTask3();

function conditionTask4(){
    let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
}

//            logical operations tasks // 

 let age= prompt("Enter the age please","");
 function logical1(){
if (age>=14 && age <=90){
    alert("age between 14 & 90");
}
else{
    alert("age not in range");
}

 }

 function logical2(){
    if (!(age >= 14 && age <= 90)); // 1st 
    if (age < 14 || age > 90);// 2nd
 }

 let login = prompt ("Who's there!","");
 function logical3(){

    if (login=="Admin"){
         let password= prompt("password please!","");

         if (password=="TheMaster"){
             alert("welcome");
         }
         else if (password=="" || password==null){
             alert ("cancelled");
         }
         else{
             alert("Wrong password");
         }
    

    }
    else if (login == ""|| login==null){
        alert("Canceled");
    }
    else{
        alert("I don’t know you");
    }

 }
//      Switch Tasks    //

    function switchTask1(){
if(browser=="Edge"){
    alert( "You've got the Edge!" );
}
else if (browser=="Chrome"||browser=="Firefox"|| browser=="Safari"|| browser=="Opera"){
    alert( 'Okay we support these browsers too' );
}
else{
    alert( 'We hope that this page looks ok!' );
}

    }

    function switchTask2(){
        let a = +prompt('a?', '');

        switch (a) {
            case 0:
                alert( 0 );
                break;
            case 1:
                alert(1);
                break;
            case 2:
            case 3:
                alert( '2,3' );
                break;
        }
    }