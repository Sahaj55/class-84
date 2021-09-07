canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
R_width=100;
R_height=100;
Rx=10;
Ry=10;

Bimg="mars.jpg";
Rimg="rover.png";

function add(){
Bimg_tag=new Image();
Bimg_tag.onload=uploadbackground;
Bimg_tag.src=Bimg;

Rimg_tag=new Image();
Rimg_tag.onload=uploadRover;
Rimg_tag.src=Rimg;
}


function uploadbackground(){
ctx.drawImage(Bimg_tag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(Rimg_tag,Rx,Ry,R_width,R_height);
    }

    window.addEventListener("keydown", my_keydown);
function my_keydown(e){
key=e.keyCode;
if(key=='38'){
up();
console.log("up")
}
if(key=='40'){
    down();
    console.log("down")
    
    }

    if(key=='37'){
        left();
        console.log("left")
        
        }

        if(key=='39'){
            right();
            console.log("right")
            
            }

}







