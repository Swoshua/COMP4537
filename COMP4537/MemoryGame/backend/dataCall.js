async function submit() {
    let name = document.getElementById("name").value
    let urlParams = new URLSearchParams(window.location.search)
    let score = urlParams.get("score")
    let url = `https://jl-memory-game.herokuapp.com/insert_score?name=${name}&${score}`
    let res = await fetch(url)
    return res.json()
}

function leaderboards() {
    let url = `https://jl-memory-game.herokuapp.com/retrieve_score`;
    fetch(url)
    .then(response => console.log(response.json()))
    .then(data => console.log(data))
    .catch(error => console.log(error));
}