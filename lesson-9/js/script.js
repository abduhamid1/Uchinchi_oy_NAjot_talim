//

const fruits = ["Apple", "Mango", "Avocado", "Cherry", "Pomegranate","orang"];
const names = ['abduhamid', 'Johon ', 'lola', 'Jek'];

function logger(item, index, arr) {
    console.log(item,arr[index+1]);
}

fruits.forEach(logger);
names.forEach(logger)