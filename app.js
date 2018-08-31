window.onload = function(){
    var funkyFunctions = {
        salsa: function (){
        var danceMoves = [3,2,1,5,6];
        var stepNum = 0;
        for (var i = 0; i<danceMoves.length ; i++){
        stepNum = stepNum + danceMoves[i];
        }
        

        return(stepNum);
        },
        chickenDance: function(){
        var clucksNum = 0;
        for(var i = 0 ; i<5; i++){
        clucksNum = clucksNum + 5;
        }


        var Chicken = {
        funky1: function(){
       clucksNum =clucksNum + 10;
        return(clucclucksNum);
        },
        funky2:function(){
        return(Chicken.funky1());
        }
        }
        return(chicken.funky2());
        },
        shuffle: function(){
        var type = ['melbourne' , 'electronic' , 'hardstyle']
        var myShuffle = {
        type: type[0],
        isPopular: true,
        numClasp: 300

        };
        if(myShuffle.isPopular === true){
        return(myShuffle.numClasp);
        }
        }

       
    }
    console.log(funckyFunctions.salsa(), funckyFunctions.chickenDance(), funckyFunctions.shuffle());
}