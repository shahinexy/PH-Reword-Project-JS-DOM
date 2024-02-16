let totalprice = 0;
let cardCount = 0;
const addToCard = document.querySelectorAll('.add-btn');

for(const card of addToCard){
    card.addEventListener('click', function(){
        // get card title and price
        const cardTitle = card.parentElement.childNodes[1].innerText;
        const cardPrice = card.parentNode.childNodes[3].childNodes[1].innerText;

        // append title & price in cart
        const container = document.getElementById('selected-place-container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = cardTitle;
        const p2 = document.createElement('p');
        p2.innerText = cardPrice;
        li.appendChild(p);
        li.appendChild(p2);
        container.appendChild(li);

        // add to card. card count when select a card
        cardCount += 1;
        setinnerText('cart-count', cardCount);

        // calculate total price
        const price = parseInt(cardPrice);
        totalprice += price;
        setinnerText('total-cost', totalprice);

    })
}