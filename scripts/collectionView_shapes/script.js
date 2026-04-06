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
    fill('white')

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

    
                switch(data[current].classification){
                    case "Art":
                        square(i * square_size, j*square_size, square_size)
                        break;
                    case "Map":


                        break;
                    case "Painting":

                        break;
                    case "Photograph":

                        break;
                    case "Print":

                        break;
                    case "Archive":

                        break;
                    case "Object/Artifact":

                        break;
                    case "Textile":

                        break;
                    case "Jewelry":

                        break;
                    case "Clothing/Dress/Costume":

                        break;
                    case "Coin":

                        break;
                    case "Basket":

                        break;
                    case "Glassware":

                        break;
                    case "Ceramic":

                        break;
                    case "Publication":

                        break;
                    case "Audio Recording":

                        break;
                    case "Sculpture":

                        break;
                    case "Drawing":

                        break;
                    case "Book":

                        break;
                    default: 
                    
                } 


                
            }
        }

    pop();
}