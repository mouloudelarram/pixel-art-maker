// Select color input
/***************add click events to all cells********************/
function addClickEventToCells() 
{
    // on color selection return color:
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++)
    {
        cells[i].addEventListener("click", function (event) 
        {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });

        //if i doubleclick time  the color will Disappears;

        cells[i].addEventListener("dblclick", function (event) 
        {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = "#FFFFFF";
        });
    }
}

// Select size input
/********************get height and width************************/
function formSubmission() 
{
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// When size is submitted by the user, call makeGrid()

/************************************main fonction***************/
document.getElementById('sizePicker').onsubmit = function () 
{
    formSubmission();
};



function makeGrid(height, width) 
{ 
// Your code goes here!

    const colorPicker = document.getElementById("colorPicker");
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    // loop over each row
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        // loop for each cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid into table element
    table.innerHTML = grid;

    // Add click event to grid cells once the table grid has been created
    addClickEventToCells();
}
makeGrid(5, 5);//default 5*5;











/******************************************************   hard way    **********************************************************/


/*
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) { 

// Your code goes here!
  var html = "";
  for(var i = 0; i < height; i++){
    html += "<tr>";
    for(var j = 0; j < width; j++){
      html += "<td></td>";
    }
    html += "</tr>";
  }
  $("#pixelCanvas").html(html);
}

$(function(){
  var height, width;
  $("#sizePicker").on('submit', function(event){
     height = $("#inputHeight").val();
     width = $("#inputWidth").val();
    //console.log(height, width);
    event.preventDefault();
    makeGrid(height, width);
  });
  $("#pixelCanvas").on('click', 'td', function(){
    var color = $("#colorPicker").val();
    //console.log($(this).css("background-color"));
    if($(this).css("background-color") == "#FFFFFF" || $(this).css("background-color") == "rgba(0, 0, 0, 0)" || $(this).css("background-color") == "rgb(255, 255, 255)") {
      $(this).css("background-color", color);
    } else {
      $(this).css("background-color", "#FFFFFF");
    }
  })


});
*/




