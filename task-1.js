function logItems(array) {
    for (const ar of array) {
        let numberPosition = array.indexOf(ar)+1
        console.log(`${numberPosition}-${ar}`);
    }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
