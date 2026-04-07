/*
    title: code to plotter output design
    author: almyre, with tweaks by Lena MK
    date: April 2026
*/ 

var w, h
var cnv
var leftmargin, rightmargin, topmargin, bottommargin, actualheight, actualwidth, penwidth
var sourcecode
var font
var fSize = 12
var res=42
var xoff=0.0
var xinc=0.0001
var textx,textspeed,texty,begin,end,nbindex
var textMargin, maxTextWidth, viewCode  

function preload() {
    font = loadFont("../../fonts/FreeMono.otf");
    sourcecode = loadStrings('dataCleaning_notebookExcerpt.js');
}
function setup() {
    //getpng()
    getsvg();
    viewCode = 1
    //changePage()
    centerCanvas();
    angleMode(DEGREES);
    textWrap(WORD);
    colorMode(HSB, 360, 100, 100, 250);
    textMargin = Math.floor(96*10/25.4)
    console.log(typeof(textMargin))
    maxTextWidth = Math.floor(96*250/25.4)
    console.log("max text width", maxTextWidth)
    
}
/*
function changePage() {
    imgbtn = createButton(`Page change`);
    placebtn(1);
    imgbtn.mouseClicked(function change(){
        console.log(viewCode)
        if (viewCode == 1)
            viewCode = 2
        else
            viewCode = 1
    });
    redraw()
}
    */
function getsvg() {
    //A3
    w=Math.floor(96*297/25.4)
    h=Math.floor(96*420/25.4)
    cnv = createCanvas(w, h, SVG).mousePressed(savesvg);
    imgbtn = createButton("save svg");
    placebtn(0);
    imgbtn.mouseClicked(savesvg);
}

function getpng() {
    //A3
    w=Math.floor(96*297/25.4)
    h=Math.floor(96*420/25.4)

    cnv = createCanvas(w, h);
    imgbtn = createButton("save png");
    placebtn();
    imgbtn.mouseClicked(savepng);
}

function centerCanvas() {
    var x = (windowWidth - w) / 2;
    var y = 0//(windowHeight - h) / 2;
    cnv.position(x, y);
}

function placebtn(count) {
    var x = (windowWidth - w) / 2;
    var y = (windowHeight - h + count * 80) / 2;
    imgbtn.position(x - 200, y + h / 2 + 42)
}


function savepng() {
    save("clean.png");
}

function savesvg() {
    save("clean.svg");
}



function draw() {
    background(0, 0, 100)
    noFill()
    stroke(0,100,100)
    writecode(0, 113)
    //writecode(113, sourcecode.length)
    noLoop()
}


function writecode(start, end) {
    var x, y, loc
    x = textMargin
    y = Math.floor(96*30/25.4)
    stroke(0,0,0)
    fill(0,0,0)
    textSize(fSize)
    textFont(font)
    var sourceCodeSection= sourcecode.slice(start, end)
    console.log(sourcecode)
    
    for (let b in sourceCodeSection) {
        loc=sourceCodeSection[b]

        if (textWidth(loc) > maxTextWidth){
            text(loc,x, y, maxTextWidth, 100)
            //never more than two lines so this is ok
            y += fSize+5
        }
        else
            text(loc, x, y, maxTextWidth, 100)
        
        y += fSize
    }
}