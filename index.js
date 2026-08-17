const monthname = document.getElementById("m");
const dayname = document.getElementById("dy");
const datename = document.getElementById("dt");
const yearname = document.getElementById("y");

const date = new Date();

// const month = date.getMonth();
// monthname.innerHTML = date.toLocaleString("en",{
//     month : "long",
// });




datename.innerText = date.getDate();

yearname.innerText = date.getFullYear();

const month = date.getMonth();
monthname.innerText = date.toLocaleString("en",{
    month : "long",
})

const day = date.getDay();
dayname.innerText = date.toLocaleString("en",{
    weekday : "long",
});
