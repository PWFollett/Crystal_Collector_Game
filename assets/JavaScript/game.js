$(document).ready(function(){

   
    var userNum = 0
    var losses = 0
    var wins = 0
    var scoreMatch = 0
 //   var randonNumber = Math.floor(Math.random()*120)+19;



    function scoreCheck(){
        console.log('user Num', userNum, 'Score Match', scoreMatch);
        if (scoreMatch === userNum) {
            alert('YOU WIN!!!')
            $("#wins").html(wins)
            wins++;
            reset()
        } else if(scoreMatch < userNum) {
            alert('GAME OVER!!!');
            $("#losses").html(losses)
            losses++ ;
            reset()
        }
    }


    function reset() {
        scoreMatch = randomNum(101)+19
        userNum = 0
        $("#scoreMatch").html(scoreMatch)
        $("#totalScore").html(userNum)
    }

    function randomNum(num) {
        return Math.floor(Math.random() * num) + 1 
    }

    function name(num) {
        if(num === 0) {
            return 'red'
        } else if(num === 1) {
            return 'green'
        } else if(num === 2) {
            return 'blue'
        } else if (num === 3) {
            return 'yellow'
        }
    }
        var pics = ['https://www.nicepng.com/png/full/155-1553080_crystals-clipart-red-crystal.png', 'http://clipart-library.com/data_images/101786.png', 'http://images.clipartpanda.com/crystal-clipart-blue-crystal-clipart-1.jpg','https://banner2.kisspng.com/20180503/kbq/kisspng-crystal-yellow-clip-art-5aea8e2c9fc6d7.2414904915253212606545.jpg']

    for(var i =0; i< pics.length; i++) {
        var img = $('<img>')
        img.attr('src', pics[i])
        img.addClass('crystal')
        img.addClass('crystal-' + name(i))
        img.attr('num',randomNum(12))
        $('#picSpot').append(img)
    }

    $(document).on('click','.crystal', function(){
        console.log('you got clicked!!', $(this).attr('num'));
        userNum += parseInt($(this).attr('num'));
        $("#totalScore").html(userNum)    

        scoreCheck();
    })
    reset();
})