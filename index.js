function writeCards(name, birthday) {
    const myArray = [];
    for (let i = 0; i<name.length; i++){
        const text =
        `Thank you, (name[1]), for the wonderful ${birthday} gift!` ;
        myArray.push(text);
    }
    return myArray;
}
function countDown(number) {
    do {
        console.log(number);
        number--;
    }
    while (number >= 0);
}