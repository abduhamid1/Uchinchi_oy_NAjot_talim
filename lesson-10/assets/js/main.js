let body = document.querySelector(".body__wrapper");
window.addEventListener('scroll', () => {
    console.log(window.length);
})
console.log(window);


let travel = [{
        id: Math.round(Math.random() * 1000),
        title: "Buxoro",
        descripton: "lorem ipsum dodlor set amet en length",

        img: "https://picsum.photos/id/11/300/200",
        images: [
            "https://picsum.photos/id/11/300/200",
            "https://picsum.photos/id/12/300/200",
            "https://picsum.photos/id/13/300/200",
        ]

    },
    {
        id: Math.round(Math.random() * 1000),
        title: "sharqobot",
        descripton: "lorem ipsum dodlor set amet en length",

        img: "https://picsum.photos/id/11/300/200",
        images: [
            "https://picsum.photos/id/11/300/200",
            "https://picsum.photos/id/12/300/200",
            "https://picsum.photos/id/13/300/200",
        ]

    },
    {
        id: Math.round(Math.random() * 1000),
        title: "Sirdaryo",
        descripton: "lorem ipsum dodlor set amet en length",

        img: "https://picsum.photos/id/11/300/200",
        images: [
            "https://picsum.photos/id/11/300/200",
            "https://picsum.photos/id/12/300/200",
            "https://picsum.photos/id/13/300/200",
        ]

    }
];

travel.forEach((e, i, a) => {
    let card = document.createElement('div')
    card.classList.add('card'),
        card.classList.add('m-5'),
        card.classList.add('mx-auto'),
        card.classList.add('d-block'),
        card.innerHTML =
        `
        <img src="${e.img}" class='img-fluid'>
        <div class="card-body">
        <h5 class = "card-title">${e.title}</h5>
        <p class=""description>${e.descripton}</p>
        `
    body.appendChild(card);
})


for (let i = 0; i < travel.length; i++) {

    console.log(travel[i])
    card.innerHTML =
        `
        <img src="${travel[i].img}" class='img-fluid'>
        <div class="card-body">
        <h5 class = "card-title">${travel[i].title}</h5>
        <p class="description">${travel[i].descripton}</p>
        </div>
        `
    body.appendChild(card);
}

// for (let i = 0; i < travel.length; i++){
//     console.log(travel[i]);
// }






















// var array = [
//     {
//         "title": "New York Doll",
//         "year": 2005,
//         "categories": [
//             "Documentary",
//             "Music"
//         ],
//         "imdbId": "tt0436629",
//         "imdbRating": 7.9,
//         "runtime": 75,
//         "language": "English",
//         "youtubeId": "jwD04NsnLLg",
//         "summary": "A recovering alcoholic and recently converted Mormon, Arthur \"Killer\" Kane, of the rock band The New York Dolls, is given a chance at reuniting with his band after 30 years.",
//         "smallThumbn ail": "http://i3.ytimg.com/vi/jwD04NsnLLg/hqdefault.jpg",
//         "bigThumbnail": "http://i3.ytimg.com/vi/jwD04NsnLLg/maxresdefault.jpg"
//     },
//     {
//         "title": "Mickey's Magical Christmas: Snowed in at the House of Mouse",
//         "year": 2001,
//         "categories": [
//             "Adventure",
//             "Animation",
//             "Comedy",
//             "Family",
//             "Fantasy"
//         ],
//         "imdbId": "tt0300195",
//         "imdbRating": 6.8,
//         "runtime": 65,
//         "language": "English",
//         "youtubeId": "uCKwHHftrU4",
//         "summary": "After everyone is snowed in at the House of Mouse, Mickey suggests they throw their own Christmas party. Everyone is happy, except for Donald who just isn't in to the Christmas spirit. So Mickey shows a series of cartoons that show just what Christmas is all about. It features a star studded cast of Disney characters from everyone's favorite animated Disney movies.",
//         "smallThumbnail": "http://i3.ytimg.com/vi/uCKwHHftrU4/hqdefault.jpg",
//         "bigThumbnail": "http://i3.ytimg.com/vi/uCKwHHftrU4/maxresdefault.jpg"
//     }

// ];
// array.forEach((e,i,arr) => {
//     card.innerHTML = 
//     `

//         <
//         img src = ""
//     class = "card-img-top"
//     alt = "..." >
//         <
//         div class = "card-body" >
//         <
//         h5 class = "card-title" > ${e.title} < /h5> <
//         p class = "card-text" > Some quick example text to build on the card title and make up the bulk of the card 's content.</p> <
//         a href = "#"
//     class = "btn btn-primary" > Go somewhere < /a> <
//         /div> 
//     `
// })
// console.log(array['title']);
// function logger(item, index, arr) {
//     console.log(item, index, arr);
// }
// logger.foreach(logger)
// array.forEach(element => {

// });





















































// const arr = ["PhP", "NodeJs", "Java", "JAvascript"];
// function logger(item, index, array) {
//     console.log(item,index,\array);
// }
// arr.forEach(logger);