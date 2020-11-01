leaderboards();
function submit() {
    let name = $("#username").text();
    let score = $("#final_score").text();
    let url = `https://jl-memory-game.herokuapp.com/insert_score?name=${name}&score=${score}`
    fetch(url)
    .then(response => response.json())
    .then(data => console.log('success'));
    leaderboards();
}

function leaderboards() {
    let url = `https://jl-memory-game.herokuapp.com/retrieve_score`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.results.length);
        $("leaderboards").empty();
        for (i = 0; i < data.results[0].length; i++){
            $("leaderboards").append("<li>" + data.results[i] + "</li>")
        }
    })
    .catch(error => console.log(error));
}