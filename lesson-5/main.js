// misol1
// let n = 10;
// let arr = []
// for (let i = 0; i <= n; i++) {
//     arr[i] = i

// }
// console.log(arr);
// misol2

// let n = 10;
// let arr = []
// for (let i = 0; i <= n; i++) {
//     arr[i] = Math.pow(2, i)

// }
// console.log(arr);

// misol3
// let n = 10;
// let arr = [];
// for (let i = 0; i <= n; i++) {
//     console.log((i + 1) * i / 2);
// }

// let n = 10;
// let arr = [];
// for (let i = 1; i <= n; i++) {
//     arr[i] = i;
//     console.log(arr[i]);

// }

// misol4
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// let num = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//         sum = sum - arr[i]
//         console.log(sum);
//     } else {
//         num = num + arr[i]
//         console.log(num);
//     }
// }

// amalyot
// const ten = []
// let n = 10;
// for (let j = 0; j < n; j++) {
//     ten[j]

//     for (let e = 0; e < 10; e++) {

//     }
//     console.log(ten);

// }


// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr);
// }

const names = ['names'];
//names.push("Abduhamid") //oxiridan qo'shadi
//names.pop() //oxiridan olib tashlaydi
//names.unshift('Dosmurod'); //boshidan qoshdi
//names.shift(); //boshidan olib tashlaydi
// name[0] = "Abduhamid";
// name[1] = "Bekmurod";
// name[2] = "Rasul";
// name[3] = "Muhammadamin";

// const meva = ['olma', 'nok', 'bexi', 'olcha', 'banan', 'o\'rik', 'shoptoli', 'sabzi'];
// const copy = meva.slice(0, 1); //nusxalab olamiz
// const cap = meva.splice(4, 2); //kesib olad olamiz(0,3)desak shularnioladi()(4,3)desaok 4 kiyin 3 ta oladi 4 ni
// console.log(copy);
// console.log(cap);
// console.log(meva);



// let arr = "string";
// console.log(arr.toUpperCase()); // hammasi katta harif
// console.log(arr.toLowerCase()); //hammasi kichik harif
// console.log(arr.trim().length); // bosh joylarni olib tashlaydi
// console.log(arr.substring(7));//bular ichidago hariflarni olib beradi (0,5)gacha esa orasidagi hariflarni olib beradi
// console.log(arr.replace('s','n')); hariflarni joyini almashtiradi
// css qoshish

let btn = document.querySelector("button");
let box = document.querySelector(".box");

// box.textContent="ok"
// box.innerHTML="ok"




// btn.addEventListener('click', function () {
//         box.style.backgroundColor = "red";
//         box.style.width = "300px";
//         box.style.height = "300px";
//     }
// )
box.style.cssText='width:200px;height:200px;background:black;'
console.log(btn);
console.log(btn.id);
console.log(btn.title);
console.log(btn.type);