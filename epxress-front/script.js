let btn = document.querySelector("#button");
let root = document.getElementById("root")
root.style.display = "flex"
root.style.flexWrap = "wrap"
root.style.gap = "25px"

btn.addEventListener("submit", (e) => {
    e.preventDefault();
    root.innerHTML = "";
    (e.target.root.value);
})

btn.addEventListener("click", () => {
    fetch("http://localhost:3333/api/cars", {
        method: "GET",
    })  .then((res) => res.json())
        .then((res) => {
            res.map((car) => {
                let newCard = document.createElement("div");
                newCard.innerHTML = `<div class="card" style="width: 18rem;">
                <img src="${car.Image}" class="card-img-top" alt="zurag">
                <div class="card-body">
                    <h5 card="card-title">${car.model}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>`
              root.appendChild(newCard);
            });
        })
        // .catch((e) => console.log("e: ", e))
});

