



$(document).ready(function(){

     document.getElementById("reset").disabled = true;
     var win = false;



    $("#choose").click(function(){
        player = $("#first").val();
        turn(player);

    });


    function turn(player){
        $("#whoseTurn").empty();
        $("#whoseTurn").append("Turn: " + player);

    }

    $(".box").on("click",function(){

        if(win){
            alert("You can't keep playing after someone has won you fool");
        }else {


            console.log(this);
            if ($(this).find('img').length) {
                return false;
            }

            $(this).html("<img width='75px' height='75px' src= " + player + ".png>");
            if (player == "x") {
                player = "o";
                turn(player);
            } else {
                player = "x";
                turn(player);
            }
            checkWin();
        }
    });
    $("#reset").click(function(){

       $(".box").empty();
       $("#win").html("");
       win = false;


    });

    function checkWin() {
        //console.log($("#1 > img")[0].src);
        console.log($("#2 > img").length);

        //horizontal
        if ($("#1 > img").length != 0 && $("#2 > img").length != 0 && $("#3 > img").length != 0) {

            if (($("#1 > img")[0].src == $("#2 > img")[0].src ) && ($("#2 > img")[0].src == $("#3 > img")[0].src)) {
                if (player == "x") {
                    player = "o";
                } else {
                    player = "x";
                }
                $("#win").append("Game Over: Player " + player + " wins.");
                document.getElementById("reset").disabled = false;
                win = true;
                return false;
            }
        }

        if ($("#4 > img").length != 0 && $("#5 > img").length != 0 && $("#6 > img").length != 0) {

            if (($("#4 > img")[0].src == $("#5 > img")[0].src ) && ($("#5 > img")[0].src == $("#6 > img")[0].src)) {
                if (player == "x") {
                    player = "o";
                } else {
                    player = "x";
                }
                $("#win").append("Game Over: Player " + player + " wins.");
                document.getElementById("reset").disabled = false;
                win = true;
                return false;


            }
        }

        if ($("#7 > img").length != 0 && $("#8 > img").length != 0 && $("#9 > img").length != 0) {

            if (($("#7 > img")[0].src == $("#8 > img")[0].src ) && ($("#8 > img")[0].src == $("#9 > img")[0].src)) {
                if (player == "x") {
                    player = "o";
                } else {
                    player = "x";
                }
                $("#win").append("Game Over: Player " + player + " wins.");
                document.getElementById("reset").disabled = false;
                win = true;
                return false;


            }
        }
        //vertical
        if ($("#1 > img").length != 0 && $("#4 > img").length != 0 && $("#7 > img").length != 0) {

            if (($("#1 > img")[0].src == $("#4 > img")[0].src ) && ($("#4 > img")[0].src == $("#7 > img")[0].src)) {
                if (player == "x") {
                    player = "o";
                } else {
                    player = "x";
                }
                $("#win").append("Game Over: Player " + player + " wins.");
                document.getElementById("reset").disabled = false;

                win = true;
                return false;
            }
        }

        if ($("#2 > img").length != 0 && $("#5 > img").length != 0 && $("#8 > img").length != 0) {

            if (($("#2 > img")[0].src == $("#5 > img")[0].src ) && ($("#5 > img")[0].src == $("#8 > img")[0].src)) {
                if (player == "x") {
                    player = "o";
                } else {
                    player = "x";
                }
                $("#win").append("Game Over: Player " + player + " wins.");
                document.getElementById("reset").disabled = false;
                win = true;
                return false;


            }
        }

        if ($("#3 > img").length != 0 && $("#6 > img").length != 0 && $("#9 > img").length != 0) {

            if (($("#3 > img")[0].src == $("#6 > img")[0].src ) && ($("#9 > img")[0].src == $("#9 > img")[0].src)) {
                if (player == "x") {
                    player = "o";
                } else {
                    player = "x";
                }
                $("#win").append("Game Over: Player " + player + " wins.");
                document.getElementById("reset").disabled = false;
                win = true;
                return false;


            }
        }
        //diagonal
        if ($("#1 > img").length != 0 && $("#5 > img").length != 0 && $("#9 > img").length != 0) {

            if (($("#1 > img")[0].src == $("#5 > img")[0].src ) && ($("#5 > img")[0].src == $("#9 > img")[0].src)) {
                if (player == "x") {
                    player = "o";
                } else {
                    player = "x";
                }
                $("#win").append("Game Over: Player " + player + " wins.");
                document.getElementById("reset").disabled = false;
                win = true;
                return false;


            }
        }

        if ($("#3 > img").length != 0 && $("#5 > img").length != 0 && $("#7 > img").length != 0) {

            if (($("#3 > img")[0].src == $("#5 > img")[0].src ) && ($("#5 > img")[0].src == $("#7 > img")[0].src)) {
                if (player == "x") {
                    player = "o";
                } else {
                    player = "x";
                }
                $("#win").append("Game Over: Player " + player + " wins.");
                document.getElementById("reset").disabled = false;
                win = true;
                return false;


            }
        }
        //tie
        if ($("#1 > img").length != 0 && $("#2 > img").length != 0 && $("#3 > img").length != 0 && $("#4 > img").length != 0 &&
            $("#5 > img").length != 0 && $("#6 > img").length != 0 && $("#7 > img").length != 0 && $("#8 > img").length != 0 &&
            $("#9 > img").length != 0) {
            if ($("#win").html() == "") {
                $("#win").append("Great. It's a tie. Now nobody is happy.");
                document.getElementById("reset").disabled = false;
            }
        }
        return true;

    }
});