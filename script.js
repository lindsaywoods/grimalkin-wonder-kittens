const predictions = [
"a bird in the sky is a meal in yr belly yu have yet to catch. now is yr chance.", 

"as yu may count on mice running from my magnificence, so yu may count on this", 

"throw a fish into the ocean and it will swim away.  throw a fish to me and i will eat it.  it is certain.",

"indeed.  keep yr claws sharp and soon you shall achieve victory",

"it is as a window in summer. outlook is sunny.",

"sometimes yu are the countertop.  sometimes yu are the glass and sometimes yu are the paw.  dont be the glass.  dont be the countertop.  be the paw.",

"i dont care about this problem.  try again later.  or dont",

"some things are not meant for tiny human brains.  be content with yr lack of knowledge.",

"some answers will only come to yu in the dead of night.  wait until everyone else in yr home is asleep.  race flat out from room to room, careening wildly into furniture.  repeat as necessary.",

"take a nap, then try again",

"yu are looking for a mouse in the sky and a bird on the ground.  cease yr foolishness.",

"many truths can be found in the entrails of a mouse.  signs point to no.",

"even the most fierce housecat cannot defeat the vaccuum cleaner.  outlook not so good.",

"unruffle yr fur and the answer will come to you.",

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

    
    // on click, reveals whole form
    $("#clickhidden").click(function (e) {
        e.preventDefault();
        $("#hiddenarea").toggle();
        // $("#myForm").show();
    });
    
    $("#clickhidden").click(function(e){
        e.preventDefault();
        $(".wouldyou").addClass("hidden");
        $(".headercontent").toggle();
    });



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
        function askagain (){
            $("#myForm").show();

        };

        if (question !== ""){
        // hides the form once it gets submitted
        const hideform = $("#myForm").hide();
        
        // hides large whole family footer image
        $(".familyall").toggle();
        // $(".smallfamily").toggle();


        // puts prediction on the page alongside the question
            $(".results").html(`
        <p class = "question questioncard fade-in-fwd">${question}</p>
        <p class = "prediction questioncard fade-in-fwd ${predictionStyle}"> ${getPrediction}</p>
        <button class="fade-in-fwd askagain ${askagain}" id="askagain">ask another?</p>
        `);
    

    }

    // on click, resets form 
    $("#askagain").on("click", function(e){
        e.preventDefault();
        $("#myForm").show();
    });

    // hides results
    $("#askagain").on("click", function (e){
        e.preventDefault(e);
        $(".results").html("");

    });
        
    });
    
});

