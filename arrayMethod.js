let data = [1, 2, 3, 4, 5, 6, 7, 8, 1, 5, 1, 1];

let duplicateFound = false;

for (let i = 0; i < data.length; i++) {
    let num = data[i];


    let first = data.indexOf(num);

    let last = data.lastIndexOf(num);

    if (first !== last) {
        console.log("Duplicate:", num);
        duplicateFound = true;
    }
}

if (duplicateFound) {
    console.log("found duplicate in array");
} else {
    console.log("no duplicate in array");
}
