
var title = document.getElementsByClassName('title')[0];
var score = document.getElementsByClassName('score')[0];
var btn = document.getElementsByClassName('btn')[0];
var play = document.getElementsByClassName('play')[0];
var restart = document.getElementsByClassName('restart')[0];
var i = 10;
var s = 0;
var t = 10;
var k = 0;
function display() {
    play.onclick = function() {
        btn.style.background = 'rgb(255, 208, 0)';
        play.style.display = 'none';
        var timer = setInterval(function(){
            if(i>0){
                i-=0.01; 
                i = i.toFixed(2);
                title.innerHTML = i+' '+'s';
            }else{
                clearInterval(timer);
                clearInterval(timer2);
                restart.style.display = 'block';
                btn.style.background = 'rgb(17, 255, 0)';
            }
        },t)
        restart.onclick = function(){
            restart.style.display = 'none';
            i = 10;
            s = 0;
            title.innerHTML = i+' '+'s';
            score.innerHTML = s;
            play.style.display = 'block';
            btn.style.background = 'red';
            display();
        }
        btn.onclick = function(){
            s++;
        }
        var timer2 = setInterval(function(){
            score.innerHTML = s;
        },1)
    }
    title.innerHTML = i+' '+'s';
    score.innerHTML = s;
}
display();

