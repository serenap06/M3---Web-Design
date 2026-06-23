const netflixRows = document.querySelectorAll(".genre-container")

function scrollTrack(track, distance) {
    track.scrollLeft += distance
}

function setupRowSliders(row) {
    const track = row.querySelector(".netflix-swiper")
    const btnLeft = row.querySelector(".btn-left")
    const btnRight = row.querySelector(".btn-right")

    btnRight.addEventListener("click", () => {
        scrollTrack(track, 500)
    });

    btnLeft.addEventListener("click", () => {
        scrollTrack(track, -500)
    });
}

for (const row of netflixRows) {
    setupRowSliders(row)
}