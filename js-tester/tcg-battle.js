const TCGBattle = (opponentDeck, deck) => {
    const opponentCards = opponentDeck.split(' ').map(Number);
    const playerCards = deck.split(' ').map(Number);
    let rounds = 0;
    while (opponentCards.length > 0 && playerCards.length > 0) {
        rounds++;
        const opponentCard = opponentCards.shift();
        const playerCard = playerCards.shift();
        if (opponentCard > playerCard) {
            opponentCards.push(opponentCard, playerCard);
        } else if (playerCard > opponentCard) {
            playerCards.push(playerCard, opponentCard);
        }
    }

    if (opponentCards.length === 0 && playerCards.length === 0) {
        return 'Nul';
    } else if (opponentCards.length === 0) {
        return 'Gagnant';
    } else {
        return 'Perdant';
    }
};

module.exports = TCGBattle;


console.log(TCGBattle("2 30 27", "9 38 1")); // Gagnant
console.log(TCGBattle("1 2 3", "3 2 1")); // Nul
console.log(
    TCGBattle(
        "35 27 10 4 33 14 38 7 20 39 35 31 13 25 23 7 6 25 41 11 19 32 26 30 15 29 28 24 40 16 18 39 42 16 38 31 3 19 32 26 3 9 33 29 35 12 2 6 6 32",
        "35 26 30 31 10 39 2 2 2 30 32 22 23 40 18 32 33 38 16 4 11 42 16 18 22 14 23 40 8 38 7 15 4 13 24 4 19 13 26 38 22 9 6 31 38 40 2 29 24 30"
    )
); // Perdant
console.log(
    TCGBattle(
        "35 7 1 18 22 8 11 32 37 25 31 15 9 42 15 37 37 18 8 20 20 36 16 39 5",
        "42 20 27 11 11 13 23 24 3 13 33 21 14 4 40 14 35 26 6 27 23 4 30 17 2"
    )
); // Nul

console.log(TCGBattle("42 25 12 3", "25 42 13 4")); // Gagnant

console.log(TCGBattle("12 24 42 6", "10 6 42 20")); // Perdant