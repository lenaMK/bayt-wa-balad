var data, importedObject, classifications, importedClassifications
var margins
var squares, square_size
var colorScheme
var w, h
var cnv
var font
var fSize = 12
function preload() {
    importedObject = loadJSON("../../data/MPP_API_cleanData.json")
    importedClassifications = loadJSON("../../data/classifications.json")
    font = loadFont("../../fonts/FreeMono.otf");
}



function setup() { 
    colorMode(HSB, 360, 100, 100, 250);
    angleMode(DEGREES)
    createCanvas(windowWidth, windowHeight); 
    getsvg();
    centerCanvas();
    data = Object.values(importedObject)
    classifications = Object.values(importedClassifications)

    squares = Math.floor(Math.sqrt(data.length)) +1
    square_size = Math.floor((w - 100 *2 )/ squares)

    console.log(w)
    console.log(square_size)
    console.log(squares)

    margins = (w - squares * square_size ) / 2
    console.log(margins)
    noLoop()
}


function getsvg() {
    //A3
    w=Math.floor(96*297/25.4)
    h=Math.floor(96*420/25.4)
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    imgbtn = createButton("save svg");
    
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h) / 2;
    imgbtn.position(x - 200, y + h / 2 + 42)

    imgbtn.mouseClicked(savesvg);
}

function savesvg() {
    save("clean.svg");
}


function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = 0//(windowHeight - h) / 2;
    cnv.position(x, y);
}

function drawShape(classification, x, y, width){
    switch(classification){
                        
        case "Art":
            square(x + 5, y + 5, width)
            break;
        case "Map":
            beginShape();
                vertex(x + 20, y + 15 )
                vertex(x + 20 + width, y + 15)
                vertex(x +  width, y + width - 5)
                vertex(x , y + width - 5)
                vertex(x + 20, y + 15)
            endShape()
            line(x + width / 3 + 20, y + 15, x  + width/3 ,  y + width - 5 )
            line(x + width / 3 * 2 + 20, y + 15, x + width/3*2 ,  y + width - 5 )

            break;
        case "Painting":
            rect(x + 15, y + 5, width-15, width)
            rect(x + 15 + 5, y + 5 + 5, width-15-10, width-10)
            break;
        case "Photograph":
            rect(x + 5, y + 12, width, width-15)
            circle(x + 5 + width/2, y + 6 + width /2, width/2.5)
            break;
        case "Print":
            rect(x + 15, y + 5, width-15, width)
            line(x + 20, y + 10, x + width - 5, y + 10)
            line(x + 20, y + 15, x + width - 5, y + 15)
            line(x + 20, y + 20, x + width - 5, y + 20)
            line(x + 20, y + 25, x + width - 5, y + 25)
            break;
        case "Archive":
            beginShape();
                vertex(x + width / 2, y + 5)
                vertex(x + width, y + width / 2 + 5)
                vertex(x + width / 2, y + width + 5)
                vertex(x, y + width / 2 + 5)
                vertex(x + width / 2, y + 5)
            endShape()

            break;
        case "Object/Artifact":
            square(x + 5, y + 5, width)
            square(x + 15, y + 15, width-20)
            square(x + 25, y + 25, width-40)
            
            break;
        case "Textile":
            square(x + width/6, y +5, width/6)
            square(x + width/6*2, y +5, width/6)
            square(x + width/6*3, y +5, width/6)
            square(x + width/6*4, y +5, width/6)
            square(x + width/6*5, y +5, width/6)

            square(x + width/6, y + width/6 +5, width/6)
            square(x + width/6*2, y + width/6 +5, width/6)
            square(x + width/6*3, y + width/6 +5, width/6)
            square(x + width/6*4, y + width/6 +5, width/6)
            square(x + width/6*5, y + width/6 +5, width/6)

            square(x + width/6, y + width/6*2 +5, width/6)
            square(x + width/6*2, y + width/6*2 +5, width/6)
            square(x + width/6*3, y + width/6*2 +5, width/6)
            square(x + width/6*4, y + width/6*2 +5, width/6)
            square(x + width/6*5, y + width/6*2 +5, width/6)

            square(x + width/6, y + width/6*3 +5, width/6)
            square(x + width/6*2, y + width/6*3 +5, width/6)
            square(x + width/6*3, y + width/6*3 +5, width/6)
            square(x + width/6*4, y + width/6*3 +5, width/6)
            square(x + width/6*5, y + width/6*3 +5, width/6)

            square(x + width/6, y + width/6*4 +5, width/6)
            square(x + width/6*2, y + width/6*4 +5, width/6)
            square(x + width/6*3, y + width/6*4 +5, width/6)
            square(x + width/6*4, y + width/6*4 +5, width/6)
            square(x + width/6*5, y + width/6*4 +5, width/6)

            square(x + width/6, y + width/6*5 +5, width/6)
            square(x + width/6*2, y + width/6*5 +5, width/6)
            square(x + width/6*3, y + width/6*5 +5, width/6)
            square(x + width/6*4, y + width/6*5 +5, width/6)
            square(x + width/6*5, y + width/6*5 +5, width/6)
            break;
        case "Jewelry":
            circle(x + 5 + width/2 - width/5, y + 6 + width /2, width/5)
            circle(x + 5 + width/2, y + 6 + width /2 - width / 5, width/5)
            circle(x + 5 + width/2, y + 6 + width /2, width/5)
            circle(x + 5 + width/2, y + 6 + width /2 + width/5, width/5)
            circle(x + 5 + width/2 + width/5, y + 6 + width /2, width/5)
            break;
        case "Clothing/Dress/Costume":
            beginShape();
                vertex(x + width / 2, y + 5)
                vertex(x + width, y + width  + 5)
                vertex(x, y + width + 5)
                vertex(x + width / 2, y + 5)
            endShape()
            break;
        case "Coin":
            circle(x + 5 + width/2, y + 6 + width /2, width/2)
            text("c", x + width/2 + 2, y + width /2 + 8 )
            
            break;
        case "Basket":
            circle(x + width/2, y + width/2, width/1)
            circle(x + width/2, y + width/2, width/1.2)

            circle(x + width/2, y + width/2, width/3.4)
            break;
        case "Glassware":
            circle(x + width/2 + 5, y + 5, width/3 )
            line(x + width/2 + 5, y +5,  x + width/2 + 5, y + width)
            break;
        case "Ceramic":
            ellipse(x + width/2, y + width/ 2, width, width/3)
            ellipse(x + width/2, y + width/ 2, width /3, width)
            circle(x + width/2, y + width/ 2, width)
            break;
        case "Publication":
            rect(x + 5, y + 12, width, width-15)
            line(x + 10, y + 20, x + width, y + 20)
            line(x + 10, y + 25, x + width, y + 25)
            line(x + 10, y + 30, x + width, y + 30)
            line(x + 10, y + 35, x + width, y + 35)
            break;
        case "Audio Recording":
            beginShape();
                vertex(x +5, y + 15)
                vertex(x + width, y + width / 2 + 5)
                vertex(x + 5, y + width - 5)
                vertex(x + 5, y + 15)
            endShape()
            break;
        case "Sculpture":
            triangle(x + width / 4, y + width/2, x + width/2, y, x + width/4*3, y+width/2)
            triangle(x + width / 4, y + width/2, x + width/2, y + width, x + width/4*3, y+width/2)
            
            break;
        case "Drawing":
            triangle(x, y, x + width/3, y, x + width/6, y+width)
            triangle(x+ width/3, y, x + width/3*2, y, x + width/6 + width/3, y+width)
            line( x + width/6, y + width, x + width/6 + width/3, y+width)

            break;
        case "Book":
            beginShape();
                vertex(x +5 , y + 5 )
                vertex(x + width -10, y + 5)
                vertex(x +  width-10 , y + width - 5)
                vertex(x +5, y + width - 5)
                vertex(x +5, y + 5)
                vertex(x + width - 18, y - 5)
                vertex(x + width -10, y + 5)
            endShape()
            break;
        default: 
            console.log(data[current].classification)
            console.log(data[current])
        
    } 
}

function draw(){
    background('white')
    stroke('black')
    noFill()
    
    push();
        translate(x,200)
        colorScheme = []
        classifications.forEach(d => colorScheme.push({
            name: d,
            color: color(random(0, 260), random(50, 100), random(50, 100))
        }))

        var lastY
        for (let i = 0; i < squares + 1; i++ ){
            for (let j = 0; j < squares + 1; j++){
                var current = i* squares + j

                if (data[current]){
                    var width = square_size-25
                    var x = i * square_size
                    var y = j * square_size
                    //console.log(data[current].catNb)
                    drawShape(data[current].classification, x, y, width)
                    lastY = y
                }
                
            }
        }

        


    pop();


    push();
        
        for (i in classifications){

            if (i < 10) {
                x = i * (square_size+15) + 2
                y = (squares + 3) * square_size + Math.floor(i / 11) * square_size + 200
            }
            else {
                x = (i-10) * (square_size+15) +2
                y = (squares + 3) * square_size + 2 * square_size +200
            }
            
            drawShape(classifications[i], x, y, square_size-25)
            text(classifications[i], x+3, y - 35, square_size)
        }






    pop()
}


