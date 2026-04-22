
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
    /*
    font = loadFont("../../fonts/FreeMono.otf");
    font_bold = loadFont("../../fonts/FreeMonoBold.otf")
    font_bold_oblique = loadFont("../../fonts/FreeMonoBoldOblique.otf")
    font_oblique = loadFont("../../fonts/FreeMonoOblique.otf")
*/
    }



function setup() { 
    colorMode(HSB, 360, 100, 100, 250);
    angleMode(DEGREES)
    createCanvas(windowWidth, windowHeight); 
    getsvg();
    centerCanvas();


    
    data = Object.values(importedObject)
    classifications = Object.values(importedClassifications)

    squares = 4
    square_size = Math.floor((w -50 )/ squares)

    noLoop()
}


function getsvg() {
    //8.5' x 11'
    w=Math.floor(96*215.9/25.4)
    h=Math.floor(96*279.4/25.4)
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    imgbtn = createButton("save svg");
    
    var x = Math.floor((windowWidth - w) / 2);
    var y = Math.floor((windowHeight - h) / 2);
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
    textStyle(NORMAL);
    background('white')
    stroke('black')
    noFill()

    rect(0, 0, w, h)
    
    push();
        translate(20,40)
        var pageNumber = 7


        for (let i = 0; i < 5; i++ ){
            for (let j = 0; j < squares ; j++){
                
                var current = i* squares + j + pageNumber*20
                
                if (data[current]){
                    
                    var x = j * square_size
                    var y = i * square_size

                    stroke('lightgrey')
                    square(x, y, square_size)
                    //console.log(data[current].catNb)
                    //drawShape(data[current].classification, x, y, width)

                    stroke('black')
                    //textFont(font)
                    text(data[current].classification, x + 5, y + fSize * 2, square_size - 8)

                    textStyle(ITALIC);
                    //textFont(font_bold_oblique)
                    text(data[current].name, x + 5, y+fSize*5, square_size - 8)
                    textStyle(NORMAL);
                    //textFont(font)
                    if (data[current].maker)
                        text(data[current].maker, x + 5, y+fSize*9, square_size - 8)
                    
                    if (data[current].catNb)
                        text(data[current].catNb, x + 5, y + square_size - 20, square_size - 8)
                }
                
            }
        }

        


    pop();

}


