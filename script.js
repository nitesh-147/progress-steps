const progress= document.getElementById('progress')
const prev= document.getElementById('prev')
const next= document.getElementById('next')
const circles= document.querySelectorAll('.circle')

let curr=1

next.addEventListener('click', () => {
    curr++

    if(curr > circles.length){
        curr=circles.length
    }
    console.log(curr)
    update();
})

prev.addEventListener('click', () => {
    curr--

    if(curr < 1){
        curr=1
    }
    update();
})

function update(){
    circles.forEach((circle,idx )=> {
        if(idx < curr){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
         
    });
    progress.style.width=(curr-1)*33+'%'
    
    if(curr === 1)
    {
        prev.disabled= true;
    }
    else if(curr === circles.length){
        next.disabled = true;
    }
    else{
        prev.disabled = false
        next.disabled = false
    }
}