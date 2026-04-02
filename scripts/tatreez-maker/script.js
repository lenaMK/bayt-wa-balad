var x, y, size

var margins
var grid

function setup(){
    createCanvas(windowWidth, windowHeight); 
    margins = 150

    x = 30
    y = 20

    grid = []
    for (var i = 0; i < x; i++ ){
        var line = []
        for (var j = 0; j < y; j++){
            //instatiate all as black
            line.push(0)
        }
        grid.push(line)
    }
    console.log(grid)

    var sizeX = (windowWidth - margins * 2) / x
    var sizeY = (windowHeight - margins * 2) / y

    if (sizeX < sizeY)
        size = Math.round(sizeX)
    else
        size = Math.round(sizeY)
    
    console.log(size)

    

    noLoop()
}

function mouseClicked(){
    console.log(mouseX, mouseY)

    var indexX = Math.floor((mouseX - margins) / size)
    var indexY = Math.floor((mouseY - margins) / size)

    console.log(indexX, indexY)

    if (grid[indexX][indexY] < 4)
        grid[indexX][indexY]++
    else
        grid[indexX][indexY] = 0

    draw()
}

function draw(){

    

    push();
    translate(margins, margins);
    background('grey')
    
    strokeWeight(1);
    stroke('grey');
    fill('black')

    for (let i = 0; i < grid.length; i++ ){
        for (let j = 0; j < grid[i].length; j++){
            //use color according to grid value
            switch(grid[i][j]){
                case 0 :
                    fill('black')
                    break;
                 
                case 1 :
                    fill('white')
                    break;
                case 2 :
                    fill('red')
                    break;
                case 3 :
                    fill('green')
                    break;
                default:
                    fill('yellow')
            }
            //console.log("["+i * size+", "+j * size+"] : "+grid[i][j])
            square(i * size, j * size, size, random(1,5), random(1,5), random(1,5), random(1,5))
            //text('x', i * size, j * size)
        }
    }
    pop();
}