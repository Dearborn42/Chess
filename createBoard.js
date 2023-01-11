var c = document.getElementById("board");
var ctx = c.getctx("2d");


let board = Array(8)
for (var i = 0; i < board.length; i++) {
  board[i] = new Array(8);
}
console.log(board);

class Piece{
    constructor(type){
        this.type = type;
    }
    pawn(){
        if(this.type == "pawn"){

        }
    }
}



function drawBoard(){
    ctx.beginPath();
    for(let x=0; x<600; x+=150){
        for(let y=0; y<600; y+=150){
            ctx.fillStyle = "tan";
            ctx.fillRect(x, y, (c.clientWidth/8), (c.clientWidth/8));
        }
    }
    for(let x=75; x<600; x+=150){
        for(let y=75; y<600; y+=150){
            ctx.fillStyle = "tan";
            ctx.fillRect(x, y, (c.clientWidth/8), (c.clientWidth/8));
        }
    }

    for(let x=0; x<600; x+=150){
        for(let y=75; y<600; y+=150){
            ctx.fillStyle = "grey";
            ctx.fillRect(x, y, (c.clientWidth/8), (c.clientWidth/8));
        }
    }
    for(let x=75; x<600; x+=150){
        for(let y=0; y<600; y+=150){
            ctx.fillStyle = "grey";
            ctx.fillRect(x, y, (c.clientWidth/8), (c.clientWidth/8));
        }
    }
    ctx.stroke();
}
drawBoard();
