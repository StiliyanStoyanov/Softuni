function createCard(arr) {
    function createCard(card, suit) {
        const VALID_CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const VALID_SUITS = {
            'S': "\u2660", // ♠
            'H': "\u2665", // ♥
            'D': "\u2666", // ♦
            'C': "\u2663", // ♣
        };
        if (VALID_CARDS.indexOf(card) < 0 || !VALID_SUITS.hasOwnProperty(suit)) {
            throw new Error("Invalid card or suit!")
        }
        return {
            toString: function () {
                return card + VALID_SUITS[suit]
            }
        };
    }

    for (let i = 0; i < arr.length; i++) {
        let end = arr[i].length - 1;
        let card = arr[i].substring(0, end);
        let suit = arr[i][end];
        try {
            arr[i] = createCard(card, suit);
        }
        catch (e) {
            console.log('Invalid card: ' + arr[i]);
            return
        }
    }
    console.log(arr.join(' '))
}

createCard(['AS', '10D', 'KH', '2C']);