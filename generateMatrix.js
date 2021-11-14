const generateMatrix = () => {

    const matrixHTML = document.getElementById('matrix');
    const x          = document.getElementById('x').value;
    const y          = document.getElementById('y').value;
    const colors     = document.getElementById("colors").value;
    const btnValue   = document.getElementById('submitBtn').value;
    let colorIndex   = 0;

    var colorArray = 
     ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
      '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    
    if(x > 50 || y > 50){
        alert("Please choose a number smaller than 50 in order to display the board correctly!");
        return;
    }

    if(btnValue > 0){
        matrixHTML.removeChild(matrixHTML.lastChild);
    }

    if(colors > 49){
        alert("The number of colors is too large. Pick one between 1 30")
        return;
    }
    if(colors < 0 || x < 0 || y < 0){
        alert("The values must be positive numbers!");
        return;
    }

    if(x === '' || y === '' || colors === ''){
        alert("Make sure you added all the values!");
        return;
    }else{
        
        let matrix = document.createElement('table');
        matrix.className = matrix;

        for(let i = 0 ; i < x ; i++){

            let tableRow = document.createElement('tr');
            tableRow.className = 'tableRow'

            for(let j = 0 ; j < y ; j++){
                let item = document.createElement('td');
                item.style.background = colorArray[(colorIndex+j)%colors];
                tableRow.append(item);
            }

            colorIndex = colorIndex + 1;
            matrix.append(tableRow);
        }
        matrixHTML.append(matrix);
        document.getElementById('submitBtn').setAttribute("value",1);
    }
}
document.getElementById("mainForm").addEventListener("click", function(event){
    event.preventDefault()
});