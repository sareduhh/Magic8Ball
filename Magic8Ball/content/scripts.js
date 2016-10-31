function getAnswers()
{
    var num = Math.floor((Math.random() * 13) + 1);
    var answers = [ 'May the force be with you.', 'You are a Wizard, Harry.', 'Nope.', "It's a trap!", "I don't feel like it.", 'Try again later.', 'You are being annoying.', 'Oh! Snap.', 'These are not the droids you are looking for.', 'Expecto Patronum!', 'Never mind.', 'Ask a different question.', 'Stop asking stupid questions.', ];
    document.getElementById("magic").innerHTML = answers[num -1]
}


