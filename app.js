// api bilan ishlash
// let ul = document.querySelector(".ul");
// console.log(ul);
// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     data.map((user) => {
//       ul.innerHTML += `
//             <ul>
//                 <li> <b>Name</b> ${user.name}</li>
//                 <li> <b>Gmail</b> ${user.email}</li>
//                 <li> <b>Phone</b> <a href="tel:${user.phone}"> ${user.phone}</a>
//                 <li> <b>Phone</b> <a href="malito:${user.email}"> ${user.email}</a>
//             </ul>
//             </br>
//             `;
//     });
//   })
//   .finally((final) => console.log(`loading delete`))
//   .catch((err) => {
//     console.log(err);
//   });
// api bilan ishlash part-1 //

// api bilan ishlash part-2 izlab topamiz//<
// function izlaTop() {
//   let ul = document.querySelector(".ul");
//   let input = document.querySelector(".input");
//   ul.innerHTML = "";
//   fetch(`https://reqres.in/api/users?page=2`)
//     .then((res) => res.json())
//     .then(({ data }) => {
//       data.map((user) => {
//         if (user.first_name == input.value) {
//           ul.innerHTML += `
//                 <div class = "find">
//                     <img src="${user.avatar} "/>
//                     <div class = "parent-h2">
//                         <h2> <b>Familiya.</b> ${user.last_name}</h2>
//                         <h2> <b>Ismi.</b> ${user.first_name}</h2>
//                         <h2> <b>Email.</b> ${user.email}</h2>
//                     </div>
//                 </div>
//             `;
//         }
//       });
//     });
// }
// api bilan ishlash part-2 izlab topamiz // >

// api bilan ishlash part-3 izlab topamiz//<
// const data = {
//   page: 2,
//   per_page: 6,
//   total: 12,
//   total_pages: 2,
//   data: [
//     {
//       id: 7,
//       email: "michael.lawson@reqres.in",
//       first_name: "Michael",
//       last_name: "Lawson",
//       avatar: "https://reqres.in/img/faces/7-image.jpg",
//     },
//     {
//       id: 8,
//       email: "lindsay.ferguson@reqres.in",
//       first_name: "Lindsay",
//       last_name: "Ferguson",
//       avatar: "https://reqres.in/img/faces/8-image.jpg",
//     },
//     {
//       id: 9,
//       email: "tobias.funke@reqres.in",
//       first_name: "Tobias",
//       last_name: "Funke",
//       avatar: "https://reqres.in/img/faces/9-image.jpg",
//     },
//     {
//       id: 10,
//       email: "byron.fields@reqres.in",
//       first_name: "Byron",
//       last_name: "Fields",
//       avatar: "https://reqres.in/img/faces/10-image.jpg",
//     },
//     {
//       id: 11,
//       email: "george.edwards@reqres.in",
//       first_name: "George",
//       last_name: "Edwards",
//       avatar: "https://reqres.in/img/faces/11-image.jpg",
//     },
//     {
//       id: 12,
//       email: "rachel.howell@reqres.in",
//       first_name: "Rachel",
//       last_name: "Howell",
//       avatar: "https://reqres.in/img/faces/12-image.jpg",
//     },
//   ],
//   support: {
//     url: "https://reqres.in/#support-heading",
//     text: "To keep ReqRes free, contributions towards server costs are appreciated!",
//   },
// };

// function getUsers() {
//   const ul = document.querySelector(".ul");
//   const ism = prompt("ism yozing");
//   console.log(ism);
//   data.data.map((item) => {
//     console.log(item);
//     if (item.first_name == ism) {
//       ul.innerHTML += `
//             <img src="${item.avatar}" alt=""/>
//             <h1> <b>Ismi</b> ${item.first_name} <b>Familiya</b> ${item.last_name} <b>Email</b> ${item.email} </h1>
//             `;
//     }
//   });
// }
// getUsers();
// api bilan ishlash part-3 izlab topamiz//>

// function getUsers() {
//   const replace1 = document.querySelector(".ul")
//   let ism = prompt("ism");
//   fetch("https://reqres.in/api/users?page=2")
//     .then((res) => res.json())
//     .then(({ data }) => {
//       data.map((item) => {
//         if (item.first_name == ism) {
//           replace1.innerHTML += `
//                     <div class="replace">
//                         <img src="${item.avatar}" alt=""/>
//                         <h1> <b>Ismi</b> ${item.first_name} <b>Familiya</b> ${item.last_name} <b>Email</b> ${item.email} </h1>
//                     </div>
//             `;
//         }
//       });
//     });
// }
// getUsers();

// function getUsers (){
//     let ul = document.querySelector("ul")
//     fetch("https://reqres.in/api/users?page=2")
//     .then((res) => res.json())
//     .then((data) => {
//         data.map((item) => {
//             if(item.id % 2){
//                 ul.innerHTML += `
//                 <ul>
//                     <img src="${item.avatar}" alt=""/>
//                     <h1> <b>Ismi</b> ${item.first_name} <b>Familiya</b> ${item.last_name} <b>Email</b> ${item.email} </h1>
//                 </ul>
//                      `
//             }
//         })
//     })

//  }
