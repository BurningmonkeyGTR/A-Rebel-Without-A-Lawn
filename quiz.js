function checkAnswers(){
    console.log("enter function")
    const element = document.getElementById("quizForm");
    let resultDiv = document.createElement("div");
    let score = 0
    let quiz = document.forms.quiz.elements;
    let answer1 = quiz.q1.value
    let answer2 = quiz.q2.value
    let answer3 = quiz.q3.value
    let answer4 = quiz.q4.value
    if (answer1 == "notAtAll"){
        score = score + 1
    }
    else if (answer1 == "aLittle"){
        score = score + 2
    }
    else if (answer1 == "aLot"){
        score = score + 3
    }
    else if (answer1 == "topPriority"){
        score = score + 4
    }
    if (answer2 == "notAtAll"){
        score = score + 1
    }
    else if (answer2 == "aLittle"){
        score = score + 2
    }
    else if (answer2 == "Easily"){
        score = score + 3
    }
    else if (answer2 == "LoveThem"){
        score = score + 4
    }
    if (answer3 == "notAtAll"){
        score = score + 1
    }
    else if (answer3 == "aLittle"){
        score = score + 2
    }
    else if (answer3 == "aLot"){
        score = score + 3
    }
    else if (answer3 == "loveThem"){
        score = score + 4
    }
    if (answer4 == "no"){
        score = score + 1
    }
    else if (answer4 == "yes"){
        score = score + 0
    }
    if (score <= 4){
        resultDiv.innerHTML = "<img src=\"vegPatch.jpg\" alt=\"A photo of a vegetable patch\"><br><p>You should replace your lawn with a vegetable patch<br><br>Photo by <a href=\"https://unsplash.com/@sigmund?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Sigmund</a> on <a href=\"https://unsplash.com/photos/green-plant-on-brown-soil-hlC6OwRSQFs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a></p>";
    }
    else if (score <= 8){
        resultDiv.innerHTML = "<img src=\"shrubbery.jpg\" alt=\"a shrubbery\"><br><p>You should replace your lawn with a shrubbery</p><br><br><p>Photo by <a href=\"https://unsplash.com/@anniegavin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Annie Gavin</a> on <a href\"https://unsplash.com/photos/a-garden-filled-with-lots-of-different-types-of-flowers-MJwb8dEQmr0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a>";
    }
    else if (score <= 12){
        resultDiv.innerHTML = "<img src=\"background.jpg\" alt=\"a photo of a forest\"><br><p>You should replace your lawn with trees</p>";
    }
    else if (score == 13){
        resultDiv.innerHTML = "<img src=\"pond.png\" alt=\"A pond in a forest\"><br><p>You should replace your lawn with a pond<br><br>Photo by <a href=\"https://unsplash.com/@johnnyboylee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Johnny Briggs</a> on <a href=\"https://unsplash.com/photos/a-pond-surrounded-by-trees-in-the-middle-of-a-forest-7CdNNvijw9E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash\">Unsplash</a></p>";
    }
    element.remove();
    document.getElementById("answer").appendChild(resultDiv);
}