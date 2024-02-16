const addToCard = document.querySelectorAll('.add-btn');
console.log(addToCard);

for(const card of addToCard){
    card.addEventListener('click', function(){
        const cardTitle = card.parentElement.childNodes[1].innerText;
        const cardPrice = card.parentNode.childNodes[3].childNodes[1].innerText;

        const container = document.getElementById('selected-place-container')
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = cardTitle;
        const p2 = document.createElement('p');
        p2.innerText = cardPrice;
        li.appendChild(p)
        li.appendChild(p2)
        container.appendChild(li);

    })
}