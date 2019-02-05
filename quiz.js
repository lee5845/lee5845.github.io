function checkAnswer()
{
    var score=0;
    var feedback=[];
    var Q1Answer = document.quiz.a1.value;
    var Q2Answer = document.quiz.a2.value.toLowerCase();

    if (Q1Answer === '13, 21, 34, 55')
    {
        score++;
        feedback.push("Correct!")
    }
    else
    {
        feedback.push("was incorrect! The correct answer is, 13, 21, 34, 55!")
     }

    if (Q2Answer === "hoffman estates high school")
    {
        score++;
        feedback.push("Correct!")
    }
    else
    {
        feedback.push("was incorrect! The correct answer is, Hoffman Estates High School!")
    }

    if (document.quiz.a3.value === 't')
    {
        score++;
        feedback.push("Correct!")
    }
    else
    {
        feedback.push("was incorrect! The correct answer is true!")
    }
    if (document.quiz.a4.value === 'driving')
    {
        score++;
        feedback.push("Correct!")
    }
    else
    {
        feedback.push("was incorrect! The correct answer is, Driving!")
    }
    if (document.quiz.a5A.checked === true && document.quiz.a5C.checked === true && document.quiz.a5D.checked === true && document.quiz.a5B.checked === false && document.quiz.a5E.checked === false && document.quiz.a5F.checked === false)
    {
        score++;
        feedback.push("Correct!")
    }
    else
    {
        feedback.push("is incorrect! the correct answer is, A C and D! ")
    }

    if (document.quiz.a6A.checked === false && document.quiz.a6B.checked === true && document.quiz.a6C.checked === false && document.quiz.a6D.checked === true && document.quiz.a6E.checked === false && document.quiz.a6F.checked === true && document.quiz.a6H.checked === true && document.quiz.a6G.checked === false)
    {
       score++;
       feedback.push("Correct")
    }
    else
    {
        feedback.push("was incorrect! The correct answer is, B, D, F, H!")
    }
        alert(score), alert(feedback);
    var results = "You got" + " " + score + " " + "correct!" + " " + "#1" + " " + feedback[0] + " " + "#2" + " " + feedback[1] + " " + "#3" + " " + feedback[2] + " " + "#4" + " " + feedback[3] + " " + "#5" + " " + feedback[4] + " " + "#6" + " " + feedback[5];
    /*var percentage = score.substr(score/6 * 100);
    var finalScore = "You scored" + " " + percentage + "%" + "!";
    */
    return results;
}
