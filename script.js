// 1) Even or Odd

const oddEven = (num) =>{
    if(num % 2==0 ){
        return ("Even")
    }
    else{
        return ("Odd")

    };
}

let check = oddEven(7);
console.log(check)

// -----------------------------------------------------------

// 2) Result Evaluator — Pass or Fail

function passOrFail(studentMark){
    if (studentMark>100){
            console.log("INVALD MARKS")
            return null
        }
    
    else{
        if (studentMark>=50){
            return "PASS"
        }
        else{
            return "FAIL"
        }
    }
}

let evaluateResult = passOrFail(499);
console.log(evaluateResult);

// ---------------------------------------------------------------

// 3) Maximum Finder — Largest of Three Numbers

const maxFinder = (num1,num2,num3) =>{

    if (num1 > num2){
        return (`${num1} is greater`)
    }
    else if (num2 > num3){
        return (`${num2} is greater`)
    }
    else if (num3 > num1){
        return (`${num3} is greater`)
    }
    else{
        return "please make sure three numbers"
    }

}

let findmax = maxFinder(9,9,8);
console.log(findmax);

// -------------------------------------------------------------------

// 4) Accumulator — Sum from 1 to N 

function accumulator(number){
    let total =0 ;
    while(number>0){
        total+=number
        number--
    
    }
    return total
}

let sumToN = accumulator(10);
console.log(sumToN);

// --------------------------------------------------------------

// 5) Multiplication Table Generator 

function multiTable(num){
    for (let i=1 ; i<=10; i++){
        console.log(`${num}*${i}=${num*i}`);
    }
}

multiTable(1); // if we store function-calling in variable give undefine, because useing console. 

// ------------------------------------------------------------------


// 6) Digit Counter — Number Length Finder

const digiCounter = (number) =>{
    let count = 0;
    while(number>0){                   // condition only satisfied only code run
        number= Math.floor(number/10); // remove last digit by floor division
        count = count +1 ;             // increase count and get result
    
    }return count
    }

let counter = digiCounter(1);
console.log(counter);

// ----------------------------------------------------------------------
    

// 7) Number Reverser


function numReverse(input){
    let reverse = 0;                        // initial variable  = 0 

    while(input>0){                         // loop

        let degit = input % 10;             // get last value by modulo operator (12345 % 10 = 5)
        reverse = reverse* 10 + degit;      // updating reverse variable
        input=Math.floor(input/10)          // remove last digit by floor division

    }
    return reverse;
}

let reverseNumber = numReverse(12345);
console.log(reverseNumber);

// ---------------------------------------------------------------------------

// 8) Factorial Engine  

const factorialOfNumber = (number) =>{
    let result = 1 ;                  // initial vaule 1 
    while (number>0){                 // condition 
        result = number*result;       // store the value (5*4*3*2*1) = 120
        number-=1                     // dicrease the value
    }
    return result

}
let fact = factorialOfNumber(5);
console.log(fact);

// ---------------------------------------------------------------------

// 9) Prime Validator

function primeOrNot(num){

    if (num <=1){
        return "not prime"
    }

    let i = 2 ;          // start with 2 because 1 is possible factor
    while (i<num){
        if (num % i === 0){       //  if condition 0 is not prime
            return "not prime";
            i++ ;                 // increase num  to before value for check 

        }
        else{
            return "prime";       // prime = (only divide 1 and itself )
        } 
                           
    }
    }
   

let result = primeOrNot(10);
console.log(result);

// ------------------------------------------------------------------

// 10) Pattern Builder — Star Triangle 

const pattern = () =>{
    for (let i = 1; i <=5;i++){ // ouside loop like rows
        let printer = ""

        for(let j =1 ; j<=i; j++){  // inside loop like columns
            printer += "* "          // string adding

        }

        console.log(printer)

    }
}

let printPattern = pattern(5);
console.log(printPattern);







