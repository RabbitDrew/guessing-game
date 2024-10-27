class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.currentGuess = 0;
    }

    // Устанавливаем диапазон
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    // Делаем предположение (середина диапазона)
    guess() {
        this.currentGuess = Math.ceil((this.min + this.max) / 2);
        return this.currentGuess;
    }

    // Если предположение больше ответа, сдвигаем верхнюю границу
    lower() {
        this.max = this.currentGuess;
    }

    // Если предположение меньше ответа, сдвигаем нижнюю границу
    greater() {
        this.min = this.currentGuess;
    }
}

module.exports = GuessingGame;
