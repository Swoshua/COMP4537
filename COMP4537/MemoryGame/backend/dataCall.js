async function submit() {
    let name = document.getElementById("name").value
    let urlParams = new URLSearchParams(window.location.search)
    let score = urlParams.get("score")
    let url = `https://jl-memory-game.herokuapp.com/insert_score?name=${name}&${score}`
    let res = await fetch(url)
    return res.json()
}

async function leaderboards() {
    let url = `https://jl-memory-game.herokuapp.com/retrieve_score`;
    let res = await fetch(url);
    console.log(res);
    return res
}