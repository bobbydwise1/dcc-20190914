/*
This problem was asked by Google.

A knight's tour is a sequence of moves by a knight on a chessboard such that all squares are visited once.

Given N, write a function to return the number of knight's tours on an N by N chessboard.
*/



$(document).ready(function() {

  $('#form1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    input1 = parseInt(input1)
    input2 = $('#input-2').val()
    input2 = parseInt(input2)
    console.log(input1, input2)
    $('#output-1').text(input1,input2)
  })

});
