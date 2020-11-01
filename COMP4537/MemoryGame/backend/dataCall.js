function submit() {
    let name = $("#username").text();
    let score = $("#final_score").text();
    let url = `https://jl-memory-game.herokuapp.com/insert_score?name=${name}&score=${score}`
    fetch(url)
    .then(response => response.json())
    .then(data => console.log('success'));
}

function leaderboards() {
    let url = `https://jl-memory-game.herokuapp.com/retrieve_score`;
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}