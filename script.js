// text is input by a user
// on 'submit' the question disappears
// on 'submit' a random response is generated
// randomize by index?
// user can tweet their advice?
    // include the question?
// user can send their advice to themselves?
    // include the question?
// user can go again

const predictions = [
"a bird in the sky is a meal in your belly you have yet to catch. now is your chance.", 

"as you may count on mice running from my magnificence, so you may count on this", 

"throw a fish into the ocean and it will swim away.  throw a fish to me and i will eat it.  it is certain.",

"indeed.  keep your claws sharp and soon you shall achieve victory",

"it is as a window in summer. outlook is sunny.",

"sometimes you are the countertop.  sometimes you are the glass and sometimes you are the paw.  dont be the glass.  dont be the countertop.  be the paw.",

"i dont care about this problem.  try again later.  or dont",

"some things are not meant for tiny human brains.  be content with your lack of knowledge.",

"some answers will only come to you in the dead of night.  wait until everyone else in your home is asleep.  race flat out from room to room, careening wildly into furniture.  repeat as necessary.",

"take a nap, then try again",

"you are looking for a mouse in the sky and a bird on the ground.  cease your foolishness.",

"many truths can be found in the entrails of a mouse.  signs point to no.",

"even the most fierce housecat cannot defeat a vaccuum cleaner.  outlook not so good.",

"unruffle your fur and the answer will come to you.",

]

const predictionStyles = [
    "prediction-1",
    "prediction-2",
    "prediction-3",
    "prediction-4",
    "prediction-5",
    "prediction-6",
    "prediction-7",
    "prediction-8",
    "prediction-9",
    "prediction-10",
    "prediction-11",
    "prediction-12",
    "prediction-13",
    "prediction-14",

];

function getRandomIndex(array){
    const randomElement = Math.floor(Math.random() * array.length);
    return randomElement;
}

$(function(){
    $("form").on("submit", function(e){
        //removing default browser behavior ex refresh
        e.preventDefault();

        // 'question' is equal to whatever gets typed into the input
        let question = $("textarea").val();

        // clears the input field
        $("textarea").val("");

        //generates random prediction using reusable function (getRandom...)
        const randomIndex = getRandomIndex(predictions);

        //get prediction text from array 'predictions'
        const getPrediction = predictions[randomIndex];

    
        // get prediction style class from array 'predictionStyles'
        const predictionStyle = predictionStyles[randomIndex];
        console.log(randomIndex);
        console.log(question);

        // gives the user an option to ask again

        // const askagain = function(){
        //     $("#myForm").show();
        //     console.log("hello?");
        // };

        function askagain (){
            $("#myForm").show();
            console.log("what is goingon");

        }

        
             


        if (question !== ""){
        // hides the form once it gets submitted
        const hideform = $("#myForm").hide();

        // puts prediction on the page alongside the question
        $(".results").html(`
        <p class = "question">${question}</p>
        <p class = "prediction ${predictionStyle}"> ${getPrediction}</p>
        <button class="askagain ${askagain}" id="askagain"></p>
        `);
    }

    $("#askagain").on("click", function(e){
        e.preventDefault();
        $("#myForm").show();
        $(".results").hide();
        console.log("do not have high hopes for this");
    });

        
        
    });

});