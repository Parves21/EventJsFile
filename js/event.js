const btnOnclik = document.getElementById('card-button');
btnOnclik.onclick = makeRed;
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

const btnOnclik2 = document.getElementById('card-button-2');
btnOnclik2.onclick = makeYellow;
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

const btnOnclik3 = document.getElementById('card-button-3');
btnOnclik3.onclick = makeGreen;
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

const btnOnclick4 = document.getElementById('card-button-4');
btnOnclick4.onclick = makeSky;
function makeSky(){
    document.body.style.backgroundColor = '#87CEEB';
}

function changeUp(){
    const changeUpLine = document.getElementById('description');
    changeUpLine.innerText = 'This is really going to very crazy, Yes its very crazyfull'
}


document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if(text === 'Delete'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }

})

document.getElementById('btn-delete').addEventListener('click', function(){
   const secretInfo = document.getElementById('headerSection');
   secretInfo.style.display = 'none';
})

document.getElementById('comentPush').addEventListener('click', function () {
    const NewTextArea = document.getElementById('textArea');
    const newText = NewTextArea.value;
    const p = document.createElement('p');
    p.innerText = newText;
    const addSomething = document.getElementById('addNew');
    addSomething.appendChild(p);

    NewTextArea.value = '';
})

function newImg(event) {
    event.src = "images/airpod.png"
}
function oldImg(event) {
    event.src = "images/action.png"
}

function doubleClick(){
    document.body.style.backgroundColor = 'white';
}
