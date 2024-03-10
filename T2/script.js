document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let radius = document.getElementById('radius').value;

    
    let container = document.getElementById('shapesContainer');
    container.innerHTML = ''; 

    if (height) {
        let square = document.createElement('div');
        square.style.width = height + 'px';
        square.style.height = height + 'px';
        square.classList.add('square');
        container.appendChild(square);
    }


    
    if (radius) {
        let circle = document.createElement('div');
        let diameter = radius * 2;
        circle.style.width = diameter + 'px';
        circle.style.height = diameter + 'px';
        circle.classList.add('circle');
        container.appendChild(circle);
    }

    
});
