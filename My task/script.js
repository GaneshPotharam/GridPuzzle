$(document).ready(function() {
  $(".jumbotron").css({ height: "700px" });
 
});

$("button").click(function() {
  let gridSize = $(".selection option:selected").val();
  console.log("gridSize", gridSize);
  setGrid(gridSize);
});

$("input:file").on("change", function() {
  let read = new FileReader();
  read.onload = function(e) {
    $(".base").css({
      "background-image": "url(" + e.target.result + ")",
      "background-size": "cover",
      "opacity":"0.5"
    });
  }
  read.readAsDataURL($(this)[0].files[0]);
});

let setGrid = function(gridSize = 4) {
    console.log(gridSize);
    let percentage = 100 / (gridSize - 1);
    for (let i = 0; i < gridSize * gridSize; i++) {
        console.log(percentage);
        let xpos = (percentage * (i % gridSize)) + '%';
        let ypos = (percentage * Math.floor(i / gridSize)) + '%';
        let div = $('<div class="pieces"></div>').css({
            'background-image': 'url(images/qutub-minar.jpg)',
            'background-size': (gridSize * 100) + '%' ,
            'background-position': xpos + ' ' + ypos,
            'width': 500 / gridSize,
            'height': 500 / gridSize
        });
        $('.base').append(div);
    }
       $('.base').randomize();
};

























$.fn.randomize = function (selector) {
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();
    $parents.each(function () {
        $(this).children(selector).sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).remove().appendTo(this);
    });
    return this;
};



