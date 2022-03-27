function printSquareMatrix(size) {
    size <= 20;
    var mat = Array.from(Array(size), () => new Array(size));
    for (var i = 0; i <= size - 1; i++) {
        for (var j = 0; j < size - 1; j++) {
          mat[i][j] = '*';
        }
    mat[i][j] = '*';
    }
  return mat;
}

    const nums = ['10', '17', '5', '42', '44', '31'];
    br=0;
    var sum = 0;
    for( var i = 0; i < elmt.length; i++ ){
        sum += parseInt( nums[i], 10 ); 
    }
    var avg = sum/nums.length;
    document.write( "The sum of all the elements is: " + sum + " The average is: " + avg );

    function Minmaxnum(){
        var max_of_array = Math.max.apply(Math, nums);
        var min_of_array = Math.min.apply(Math, nums);

            return max_of_array, min_of_array;
    }


    x; //asign value for x
    let txt='';
    for (i=0; i<x; i++){
        txt += x[i] + ' ';
    }
    document.getElementById("till1").innerHTML = txt;