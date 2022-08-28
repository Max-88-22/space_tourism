let navElements = document.querySelector(".planets-nav__container").children;

function resetCurrentPage() {
    for (let i = 0; i < navElements.length; i++) {
        const e = navElements[i];
        console.log(e.firstElementChild.classList.remove("current-page"));
    }
}

async function planetActivation(e) {
    e.preventDefault();
    e.stopPropagation();
    resetCurrentPage()
    let planetImage = document.getElementById("planet-image")
    let planetName = document.getElementById("planet-name")
    let planetDescription = document.getElementById("planet-description")
    let planetDistance = document.getElementById("planet-distance")
    let planetTravelTime = document.getElementById("planet-travel-time")
    let res = await fetch("./scripts/data.json");
    let data = await res.json();
    let planetsData = await data.destinations;
    planetsData.forEach(elm => {
        if (e.target.id == elm.name && e.target.matches("a")) {
            planetImage.src = elm.images.webp
            planetImage.alt = elm.name
            planetName.innerText = elm.name
            planetDescription.innerText = elm.description
            planetDistance.innerText = elm.distance
            planetTravelTime.innerText = elm.travel
            e.target.classList.add("current-page")
        }
    });
}


document.getElementById("planets-nav").addEventListener("click", planetActivation);