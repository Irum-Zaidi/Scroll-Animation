const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkboxes)

checkboxes()

function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 4


    // This method is useful for determining the viewport coordinates of the cursor or selection inside a text box.
    // The getBoundingClientRect() method in JavaScript is used to retrieve the size of an element and its position relative to the viewport.
    // When called on an element, getBoundingClientRect() returns a DOMRect object that provides information about the size and position of the element, including its width, height, and the distances from the top, bottom, left, and right edges of the viewport.
    
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}