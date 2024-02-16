let totalprice = 0;
let cardCount = 0;
const addToCard = document.querySelectorAll('.add-btn');

for (const card of addToCard) {
    card.addEventListener('click', function (e) {

        // get card title and price
        const cardTitle = e.target.parentElement.childNodes[1].innerText;
        const cardPrice = e.target.parentNode.childNodes[3].childNodes[1].innerText;

        // Check budget grater than coust otherwise stop the function (validation)
        const budget = document.getElementById('budget').innerText;
        if (budget < parseInt(cardPrice)) {
            alert('You need more money')
            return;
        }

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

        // Mark the selected card and disable the button
        e.target.parentNode.parentNode.style.backgroundColor = 'cornflowerblue';
        e.target.setAttribute('disabled', true);

        // calculate total price
        const price = parseInt(cardPrice);
        totalprice += price;
        setinnerText('total-cost', totalprice);

        // check budget
        const updatedBudget = parseInt(budget) - price;
        setinnerText('budget', updatedBudget)

    })
}

function grandTotal(vehicle) {
    if (vehicle == 'bus') {
        const busPrice = totalprice + 100;
        setinnerText('grand-total', busPrice)
    }
    else if (vehicle == 'train') {
        const busPrice = totalprice - 200;
        setinnerText('grand-total', busPrice)
    }
    else if (vehicle == 'flight') {
        const busPrice = totalprice + 500;
        setinnerText('grand-total', busPrice)
    }
}