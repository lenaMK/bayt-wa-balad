var data, importedObject, classifications, importedClassifications
var margins
var squares, square_size, square_x, square_y
var colorScheme

function preload() {
    importedObject = loadJSON("../../data/MPP_API_cleanData.json")
    importedClassifications = loadJSON("../../data/classifications.json")
}



function setup() { 
    colorMode(HSB, 360, 100, 100, 250);
    angleMode(DEGREES)
    createCanvas(windowWidth, windowHeight); 

    data = Object.values(importedObject)
    classifications = Object.values(importedClassifications)


    margins = 50
    squares = Math.floor(Math.sqrt(data.length))

    if (windowHeight > windowWidth )
        square_size = Math.floor((windowWidth - margins * 2) / squares)
    else
        square_size = Math.floor((windowHeight - margins * 2)/ squares)

    square_x = (windowWidth - margins - square_size * squares) / 2
    square_y = (windowHeight - - margins- square_size * squares) / 2
    noLoop()
}





function draw(){
    background('white')
    stroke('black')
    noFill()
    
    push();
        translate(square_x, square_y)
        colorScheme = []
        classifications.forEach(d => colorScheme.push({
            name: d,
            color: color(random(0, 260), random(50, 100), random(50, 100))
        }))

        for (let i = 0; i < squares; i++ ){
            for (let j = 0; j < squares; j++){
                var current = i* squares + j

                var width = square_size-25
                var x = i * square_size
                var y = j * square_size
                console.log(data[current].catNb)
                switch(data[current].classification){
                    
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
                        line(x + 10, y + 40, x + width, y + 40)
                        line(x + 10, y + 45, x + width, y + 45)
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
        }

    pop();
}