// text is input by a user
// on 'submit' the question disappears
// on 'submit' a random response is generated
// randomize by index?
// user can tweet their advice?
    // include the question?
// user can send their advice to themselves?
    // include the question?
// user can go again

const predictions = ["thing", "thing1", "thing2",

"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam deleniti saepe incidunt sunt veritatis molestias mollitia error cumque! Culpa quidem blanditiis necessitatibus ut temporibus!",

"quinns adivcs: Lorem ipsum dqolor sit amet consectetur adipisicing elit. Labore possimus optio obcaecati nesciunt illo dolorem.",


]

function getRandomElementFromArray(array){
    const randomElement = Math.floor(Math.random () * array.length);
    return array [randomElement];
    // console.log("hey girl");
}

$(function(){
    $("form").on("submit", function(e){

        //removing default browser behavior ex refresh
        e.preventDefault();

        
        let question = $("input").val;
        // clears the input field
        $("input").val("");

        //generates random prediction using reusable function (getRandom...)
        const getPrediction = getRandomElementFromArray(predictions);

        if ("input" !== ""){
        // puts the prediction on the page
        $(".results").html(`<p class="prediction"> ${getPrediction}`);

        }
        
    });

});