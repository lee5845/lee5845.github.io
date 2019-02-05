function tenToSmall(num1, base2)   //convert a base-10 number to a smaller base
{
    //this function is expecting a number (num) in base 10
    //it will convert the number (num) to value of 'base'
    /* num = 79;   //number to convert
    base = 2;   //destination base
    smallNum ="";   //store remainders here
    */
    var mainN = num1;
    var mainB2 = base2;
    smallNum ="";
    while (mainN > 0)//continue looping while num isn't zero
    {
        smallNum = mainN%mainB2 + smallNum; //3%5 = 2.... % returns remainder
        //setup num for the next iteration of the loop
        mainN = Math.floor(mainN/mainB2);
    }
    return smallNum;
}
function smallToTen(num1, base1)  //convert a small-base number to base-10
{
    /* num = 1101; //13
    base = 2;   //base of 'num' to convert to base 10
    tenNum = 0;   //stores number to be output at the end
    numLength = num.toString().length;  //converts num to a STRING, then counts the number of characters in the string
    //in this case, length of '1101' is 4
    */
    var mainN = num1;
    var mainB = base1;
    var tenNum = 0;
    numLength = mainN.toString().length;
    while (numLength > 0) {
        var denominator = Math.pow(10, (numLength - 1)); // gets denominator of fraction
        // for 1101, denominators will be 1000, 100, 10, 1
        var currentDigit = Math.floor(mainN/denominator); // captures a 1 or a 0 to multiply by 2^numLength
        // above means that 1101/1000 = 1 .... 01/10 = 0 .... 1/1 = 1
        tenNum = tenNum + currentDigit*Math.pow(mainB, (numLength-1));
        // currentDigit*2^3 ... currentDigit*2^2 .... currentDigit*2^1 ... etc
        mainN = mainN % denominator; // reduces num for the next iteration
        // 1101 -> 101 -> 01 -> 1
        numLength--; // decreases the value of numLength by 1... otherwise, will loop infinitely
    }
    return tenNum;
}

function combo(num1, base1, base2)
{
    var cond1 = smallToTen(num1, base1);
    var cond2 = tenToSmall(cond1, base2);
        return cond2;
}



