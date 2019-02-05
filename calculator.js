/*
Gameplan

HTML:
(*)  Calculator Window for operations to be shown along with rsult
()  Number buttons for the calculator
()  Operator buttons (+, -, *, etc)
()  '=' button
()  Reset or Clear button
()  optional:   Backspace button??

Javascript:
() function that capture what typed in the calcWindow
() Separate functions that add numbers, subtract numbers, etc.
 */

function calculate(expression)  //ex.   expression is 2+5 or 9*6 or 10/5
{
    //'expression' is a STRING of EVERYTHING in your calculatorWindow
    //Need to extract the first number from 'expression'
    var firstNum = Number(expression.substr(0,1));
    var operator = expression.substr(1,1);
    var secondNum = Number(expression.substr(2,1));

    // 82+11 2+2
    // 01234 012

    if (expression.substr(2,1) === '+')
    {
        firstNum = Number(expression.substr(0,2));
        operator = expression.substr(2,1);
        secondNum = Number(expression.substr(3,2));
    }

    else if (expression.substr(2,1) === '-')
    {
        firstNum = Number(expression.substr(0,2));
        operator = expression.substr(2,1);
        secondNum = Number(expression.substr(3,2));
    }

    else if (expression.substr(2,1) === '*')
    {
        firstNum = Number(expression.substr(0,2));
        operator = expression.substr(2,1);
        secondNum = Number(expression.substr(3,2));
    }

    else if (expression.substr(2,1) === '/')
    {
        firstNum = Number(expression.substr(0,2));
        operator = expression.substr(2,1);
        secondNum = Number(expression.substr(3,2));
    }

    else if (expression.substr(2,1) === '^')
    {
        firstNum = Number(expression.substr(0,2));
        operator = expression.substr(2,1);
        secondNum = Number(expression.substr(3,2));
    }

    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        //call subtractNums, etc.
        return subtractNums(firstNum, secondNum)
    }
    else if (operator === '*')
    {
        return multiplyNum(firstNum, secondNum)
    }
    else if (operator === '/')
    {
        return divideNum(firstNum, secondNum)
    }
    else if (operator === '^')
    {
        return squareNums(firstNum, secondNum)
    }
}

function addNums(p1, p2) //addNums expects 2 parameters... p1 and p2
{
    return p1+p2;
}

function subtractNums(p1, p2)
{
    return p1-p2;
}

function clearNum()
{
    return '';
}

function divideNum(p1, p2)
{
    return p1/p2
}

function multiplyNum(p1, p2)
{
    return p1*p2
}

function squareNums(p1, p2)
{
    return Math.pow(p1, p2)
}
