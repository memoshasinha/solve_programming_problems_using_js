
function random(floor, ceiling) {
    return Math.random() * (ceiling - floor + 1) + floor;
}

function shuffle(arrayToBeShuffled) {
    if (arrayToBeShuffled.length === 0) return new Error("Array cannot be of Zero length");
    else if (arrayToBeShuffled.length === 1) return arrayToBeShuffled;

    for (let indexWeAreChoosingFor = 0; indexWeAreChoosingFor < arrayToBeShuffled.length; indexWeAreChoosingFor++) {
        const randomChoiceIndex = random(indexWeAreChoosingFor, arrayToBeShuffled.length - 1);

        if (randomChoiceIndex !== indexWeAreChoosingFor) {
            const valueAtIndexWeChoseFor = arrayToBeShuffled[indexWeAreChoosingFor];
            arrayToBeShuffled[indexWeAreChoosingFor] = arrayToBeShuffled[randomChoiceIndex];
            arrayToBeShuffled[randomChoiceIndex] = valueAtIndexWeChoseFor;
        }
    }
    return arrayToBeShuffled;
}
module.exports = shuffle;