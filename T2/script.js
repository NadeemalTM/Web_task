document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the height, weight, and radius values
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let radius = document.getElementById('radius').value;

    // Container for shapes
    let container = document.getElementById('shapesContainer');
    container.innerHTML = ''; // Clear previous content


    // If height is provided, draw a square (using height as both sides)
    if (height) {
        let square = document.createElement('div');
        square.style.width = height + 'px';
        square.style.height = height + 'px';
        square.classList.add('square');
        container.appendChild(square);
    }


    // If radius is provided, draw a circle
    if (radius) {
        let circle = document.createElement('div');
        let diameter = radius * 2;
        circle.style.width = diameter + 'px';
        circle.style.height = diameter + 'px';
        circle.classList.add('circle');
        container.appendChild(circle);
    }

    
});
