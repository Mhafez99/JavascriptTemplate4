let gallaryUl = document.querySelectorAll(".gallery .container .shuffle li");
let gallary = document.querySelectorAll(".gallery .imgs-container .box");
let more = document.querySelector(".gallery .more");
gallaryUl.forEach(function (ele) {
    ele.onclick = function () {
        gallaryUl.forEach(function (ele) {
            ele.classList.remove("active");
        });
        this.classList.add("active");
    };
});

gallaryUl[0].addEventListener("click", function () {
    gallary[0].style.display = "initial";
    gallary[1].style.display = "initial";
    gallary[2].style.display = "initial";
    gallary[3].style.display = "initial";
    gallary[4].style.display = "initial";
    gallary[5].style.display = "initial";
    gallary[6].style.display = "initial";
    gallary[7].style.display = "initial";
});
gallaryUl[1].addEventListener("click", function () {
    gallary[0].style.display = "none";
    gallary[1].style.display = "none";
    gallary[2].style.display = "none";
    gallary[3].style.display = "none";
    gallary[4].style.display = "none";
    gallary[5].style.display = "initial";
    gallary[6].style.display = "initial";
    gallary[7].style.display = "initial";
});
gallaryUl[2].addEventListener("click", function () {
    gallary[0].style.display = "initial";
    gallary[1].style.display = "initial";
    gallary[2].style.display = "initial";
    gallary[3].style.display = "none";
    gallary[4].style.display = "none";
    gallary[5].style.display = "none";
    gallary[6].style.display = "none";
    gallary[7].style.display = "none";
});
gallaryUl[3].addEventListener("click", function () {
    gallary[0].style.display = "none";
    gallary[1].style.display = "none";
    gallary[2].style.display = "none";
    gallary[3].style.display = "initial";
    gallary[4].style.display = "initial";
    gallary[5].style.display = "initial";
    gallary[6].style.display = "none";
    gallary[7].style.display = "none";
});
gallaryUl[4].addEventListener("click", function () {
    gallary[0].style.display = "initial";
    gallary[1].style.display = "none";
    gallary[2].style.display = "none";
    gallary[3].style.display = "none";
    gallary[4].style.display = "none";
    gallary[5].style.display = "none";
    gallary[6].style.display = "initial";
    gallary[7].style.display = "initial";
});

console.log(more);

let clone1 = gallary[0].cloneNode(true);
let clone2 = gallary[2].cloneNode(true);

more.addEventListener("click", function () {
    gallary[7].after(clone1);
    gallary[7].after(clone2);
    more.remove();
});


let nameInput = document.querySelector("[name='text']");
let emailInput = document.querySelector("[name='email']");
let telInput = document.querySelector("[name='tel']");
let msgInput = document.querySelector("[name='textarea']");


document.forms[0].onsubmit = function (e) {
    let name = false;
    let email = false;
    let tel = false;
    let msg = false;

    if (nameInput.value !== "" && nameInput.value.length <= 10) {
        name = true;
    }
    if (emailInput.value !== "") {
        email = true;
    }
    if (telInput.value !== "") {
        tel = true;
    }
    if (msgInput.value !== "") {
        msg = true;
    }

    if (name === false || email === false || tel === false || msg === false) {
        e.preventDefault();
    }
};