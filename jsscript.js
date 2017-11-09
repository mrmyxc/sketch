
$(document).ready(() => {
    var colourPallete = ["red", "green", "blue", "yellow", "orange", "purple", "pink"];
    const $gridContainer = $(".grids");
    var gridWidth;
    var cellDimension;
    ClearAndPrompt();


    $("#clearButton").click(function () {
        ClearAndPrompt();
    });

    $("#refreshButton").click(function () {
        $(".cells").css("background-color", "white");
    });
    
    

    function addCss ()
    {
        $(".cells").css({
            "width" : cellDimension,
            "height" : cellDimension
        });

    }

    function onHover ()
    {
        $(".cells").mouseenter(function () {
            $(this).css("background-color", colourPallete[Math.floor(Math.random() * colourPallete.length)]);
        });
    }

    function ClearAndPrompt()
    {
        $(".cells").remove();
        gridWidth = prompt("How many cells wide", 5);
        cellDimension = (600/gridWidth) - 2; // -2 for the 1px border on each side
        for ( var i = gridWidth*gridWidth; i != 0; i--)
        {
            $gridContainer.append($("<div>", {"class": "cells"}));
        }
        addCss();
        onHover();
    }


});