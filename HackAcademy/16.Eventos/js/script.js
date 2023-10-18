let mainTitle = document.querySelector("#mainTitle");

mainTitle.addEventListener('click', function (event) {
    console.log(event.target);
    mainTitle.classList.toggle('blueTitle')
});