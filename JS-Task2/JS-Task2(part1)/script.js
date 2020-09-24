
//-------------Day0: Data Types---------//

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    let sum;
    sum= parseInt( secondInteger) + firstInteger; 

    console.log(sum);
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(parseFloat(secondDecimal)+firstDecimal);
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString+secondString);
}

//-----------Day1: Arithmetic Operators----------//

function getArea(length, width) {
    if (length<1 || width<1 || length >1000 || width>1000){
        return undefined;
    }
    let area;

    // Write your code here
    area = length*width;
    return area;
}

function getPerimeter(length, width) {
    if (length<1 || width<1 || length >1000 || width>1000){
        return undefined;
    }
    let perimeter;
    // Write your code here
      perimeter = 2*length + 2*width;
    return perimeter;
}


//-----------Day1: Functions----------//

function factorial(n){
    if(n==1){
        return 1;
    }

else{
    return n*(factorial(n-1));
    }
}

//-----------Day1: Let & Const----------//

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI=Math.PI;
 let r=parseFloat(readLine());
    
    // Print the area of the circle:
    let area = PI * Math.pow(r,2);
    console.log(area);
    // Print the perimeter of the circle:
    let perimeter= 2* PI*r;
    console.log(perimeter);
}

//-----------Day2: Conditional Statements: If-Else----------//

function getGrade(score) {
    let grade;
    // Write your code here
    if (score>25 && score<=30){
        grade='A'
    }
    else if(score>20 &&score<=25){
        grade='B'
    }
    else if(score>15 &&score<=20){
        grade='C'
    }
    else if(score>10 &&score<=15){
        grade='D'
    }else if(score>5 &&score<=10){
        grade='E'
    }
    else if(score>0 &&score<=5){
        grade='F'
    }
    return grade;
}

//-----------Day2: Conditional Statements: Switch----------//


function getLetter(s) {
    let letter;
    // Write your code here
    switch(s[0]){
        case 'a':
        case 'e':
        case 'o':
        case 'i':
        case 'u':
        letter='A';
        break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        letter="B";
        break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        letter ="C";
        break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 'v':
        case 't':
        case 'w':
        case 'x': 
        case 'y':
        case 'z' :
        letter="D";
        break;



    }
    
    return letter;
}






