var canvas= new fabric.Canvas('myCanvas');
player_x= 10;
player_y=10;
block_img_width=30;
block_img_height=30;
var player_object=" ";
var block_img_object=" ";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_x,left:player_y
        });
        canvas.add(player_object);

    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_x,left:player_y
        });
        canvas.add(block_img_object);
    });
    
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
if(e.shiftKey && keyPressed=='80'){
    console.log("p and shift pressed together")
    block_img_width=block_img_width+10;
    block_img_height=block_img_height+10;
document.getElementById("current_width").innerHTML=block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;
}            
if(e.shiftKey && keyPressed=='77') 
{
    console.log("m and shift pressed together")
    block_img_width=block_img_width-10;
    block_img_height=block_img_height-10;
document.getElementById("current_width").innerHTML=block_img_width;
document.getElementById("current_height").innerHTML=block_img_height;
}            
if(keyPressed=='38'){
up();
console.log("up");
}
if(keyPressed=='40'){
    down();
    console.log("down");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
        }
        if(keyPressed=='37'){
            left();
            console.log("left");
            }
            if(keyPressed=='87'){
                new_image('hulk_legs.png');
                console.log("w");
                }
                if(keyPressed=='71'){
                    new_image('thor_left_hand.png');
                    console.log("g");
                    }
                    if(keyPressed=='76'){
                        new_image('ironman_right_hand.png');
                        console.log("l");
                        }
                        if(keyPressed=='84'){
                            new_image('ironman_face.png');
                            console.log("t");
                            }
                            if(keyPressed=='82'){
                                new_image('spiderman_legs.png');
                                console.log("r");
                                }
                                if(keyPressed=='89'){
                                    new_image('spiderman_face.png');
                                    console.log("y");
                                    }
                                    if(keyPressed=='68'){
                                        new_image('hulk_body.png');
                                        console.log("d");
                                        }
                                        if(keyPressed=='85'){
                                            new_image('thor_right_hand.png');
                                            console.log("u");
                                            }
                                            if(keyPressed=='67'){
                                                new_image('ironman_legs.png');
                                                console.log("c");
                                                }
            
            
                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}
function left(){
    if (player_y>=0)
    {
     player_y = player_y - block_img_height;
     console.log("block image height = " + block_img_height);
     console.log("When UP pressed, X = " + player_x + ", Y = " + player_y);
     canvas.remove(player_object);
     player_update();
 }   
}
function right(){
    if(player_y<=850){
        player_y=player_y + block_img_height;
        console.log("block image height = " + block_img_height);
        console.log("When DOWN pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }   
   }
   function up(){
    if(player_x>0){
        player_x=player_x - block_img_width;
        console.log("block image width = " + block_img_width);
        console.log("When LEFT pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }   
   }
   function down(){
    if(player_x<=500){
        player_x=player_x + block_img_width;
        console.log("block image width = " + block_img_width);
        console.log("When RIGHT pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }   
   }
   