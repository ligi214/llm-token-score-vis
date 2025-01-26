let leftBoundary = document.getElementById(`token-0`).getBoundingClientRect().left

d3.selectAll('.token')
    .style('margin-left', function(d, i) {
        let el = document.getElementById(`token-${i}`)
        if (!el.classList.contains("left-space-token")) {return "0px";}
        let left = el.getBoundingClientRect().left
    
        // console.log(i, left, leftBoundary, (left <= leftBoundary + 0.5))
        if (left <= leftBoundary + 0.5) return "0px"
        else return "5px"
    })



document.addEventListener("scores", function(event) {
    scores = event.scores
    score_type = event.score_type
    score_scale = event.score_scale

    let mktColorScale = d3.scaleLinear().domain([0,score_scale]).range(["#0000ff00", "#0000ff80"])
    let atPosColorScale = d3.scaleLinear().domain([0,score_scale]).range(["#0000ff00", "#0000ff80"])
    let atNegColorScale = d3.scaleLinear().domain([-score_scale,0]).range(["#ff000080", "#ff000000"])

    d3.selectAll('.token')
        .style('background-color', function(d, i) {
            let score = scores[i]
            if (score_type == "mkt") return mktColorScale(score)
            else if (score_type == "at") {
                if (score > 0) return atPosColorScale(score)
                else return atNegColorScale(score)
            }
        })
})