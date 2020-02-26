const selectRandom = (allFacts) => {
    let factList = []
    for (let i = 0; i < allFacts.length; i++) {
        const index = Math.floor(Math.random() * Math.floor(allFacts.length))
        if (!factList.includes(allFacts[index])) {
            factList.push(allFacts[index])
        }

        if (factList.length === 5) {
            break
        }
    }

    if (factList.length === 0) {
        const defaultFact = {
            _id: "58e008ad0aac31001185ed0c",
            text: "The frequency of a domestic cat's purr is the same at which muscles and bones repair themselves.",
            type: "cat",
            user: {
                _id: "58e007480aac31001185ecef",
                name: {
                    first: "Kasimir",
                    last: "Schulz"
                }
            },
            upvotes: 9,
            userUpvoted: null
        }
        factList.push(defaultFact)
    }
    return factList
}

module.exports = selectRandom

