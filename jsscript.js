
$(document).ready(() => {
    var colourPallete = ["red", "green", "blue", "yellow", "orange", "purple", "pink"];
    const $gridContainer = $(".grids");
    var gridWidth;
    var cellDimension;
    var max = 1;
    var opacity = 0;

    $("#solidButton").click(function () {
        onHoverNormal();
    });

    $("#trailButton").click(function () {
        onHoverTrail();
    });

    $("#opacityButton").click(function () {
        onHoverOpacity();
    });

    $("#randomButton").click(function () {
        onHoverRandom();
    });

    $("#refreshButton").click(function () {
        $(".cells").css({
            "background-color": "white",
            "opacity" : "1"
        });
    });
    
    

    function addCss()
    {
        $(".cells").css({
            "width" : cellDimension,
            "height" : cellDimension
        });

    }

    function onHoverNormal()
    {
        ClearAndPrompt();
        $(".cells").mouseenter(function () {
            $(this).css("background-color", "red");
        });
    }

    function onHoverRandom ()
    {
        ClearAndPrompt();
        $(".cells").mouseenter(function () {
            $(this).css("background-color", colourPallete[Math.floor(Math.random() * colourPallete.length)]);
        });
    }

    function onHoverTrail()
    {
        ClearAndPrompt();
        $(".cells").hover(function(){
            $(this).css("background-color", "black");
        }, function(){
            $(this).animate({"background-color" : "white"}, 500);
        });
    }

    function onHoverOpacity()
    {
        ClearAndPrompt();
        $(".cells").mouseenter(function () {
            $(this).css({
                "background-color": "black",
                "opacity" : (opacity = opacity + 0.1 ) % max
            });
        });
    }

    function ClearAndPrompt()
    {
        $(".cells").remove();
        gridWidth = prompt("How many cells wide", 10);
        cellDimension = (600/gridWidth) - 2; // -2 for the 1px border on each side
        for ( var i = gridWidth*gridWidth; i != 0; i--)
        {
            $gridContainer.append($("<div>", {"class": "cells"}));
        }
        addCss();
    }


});