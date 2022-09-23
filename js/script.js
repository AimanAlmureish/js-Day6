// Array
const arr = [1, 2, 3, 4, 5, 6];

for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        // console.log(key);
    }
}

for (const iterator of arr) {
    // console.log(iterator);
}

// While
let x = ["foo", 1, 2, 3];
let z = 0;
while (z <= x.length) {
    z++;
    // console.log(`we found ${x}`);
}

// Object

const obj = { name: "foo", value: "bar", type: "string" };

for (const i in obj) {
    if (Object.hasOwnProperty.call(obj, i)) {
        const element = obj[i];

        if (element == "bar" || element == "foo") {
            // console.log(element);
            continue;
        }
        // break;
    }
}

// APIS
// try {

// } catch (error) {
//     console.log(error);
// }

// const fetchText = async() => {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json();
//     console.log(data);
//     data.map((item) => {
//         console.log(item);
//         let element = document.createElement("p");
//         element.innerHTML = `${item.title} id is ${item.id}`;
//         let div = document.querySelector(".parent");
//         div.appendChild(element);
//     });

//     // return data;
// };

// fetchText();

const fetchTextUsingWholeCard = async() => {
    let response = await fetch(
        "https://api.unsplash.com/photos/?client_id=9kXWhW-MbYaFvCwNfj3ZkI7_sQef-0Y7bddaBFrfL9U"
    );
    let data = await response.json();
    console.log(data);
    let newData = data.map((item) => {
        return `<div class="parent"><img src="${item.urls.thumb}" alt="${item.title}" /><p>${item.user.username}</p></div>`;
        // console.log(item);
        // let element = document.createElement("img");
        // element.src = `${item.urls.thumb}`;
        // let div = document.querySelector(".parent");
        // div.appendChild(element);
    });
    document.querySelector(".div").innerHTML = newData.join("");

    // return data;
};

fetchTextUsingWholeCard();