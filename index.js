let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
let isFirstClick = true

function increment() {
    count += 1
    countEl.textContent = count
}

// function save() {
//  let countStr = count + " - "
//  saveEl.textContent += countStr
//  count = 0
//  countEl.textContent = count
// }

function save() {
    if (isFirstClick) {
        // On the first click, we only append the number (without " - ")
        saveEl.textContent += count
        isFirstClick = false
    } else {
        // On each subsequent click, we add " - " followed by the number
        saveEl.textContent += " - " + count
    }
    // Reset the counter to 0
    count = 0
    countEl.textContent = count
}