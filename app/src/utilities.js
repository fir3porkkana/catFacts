const selectRandom = (allFacts) => {
    let factList = []
    let i = 0;
    while (i < 5) {
        const index = Math.floor(Math.random() * Math.floor(allFacts.length))
        if (!factList.includes(allFacts[index])) {
            factList.push(allFacts[index])
            i++;
        }
    }
    return factList
}

module.exports = selectRandom

