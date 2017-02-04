class TicTacToe {
    constructor() {
        this.matrix = new Array();
        for (let i = 0; i < 3; i++) {
            this.matrix[i] = new Array();
        }
        for (let i = 0; i < 3; i++) {
            for (let k = 0; k < 3; k++) {
                this.matrix[i][k] = null;
            }
        }
        this.co = 0;
    }

    getCurrentPlayerSymbol() {
        if (this.co % 2 == 0) {
            return "x";
        } else {
            return "o";
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.co++;
        }
    }

    isFinished() {
        return (this.isDraw() || this.getWinner() != null || this.noMoreTurns());
    }

    getWinner() {
        if (this.checkWin("x")) {
            return "x";
        }
        if (this.checkWin("o")) {
            return "o";
        }
        return null;
    }

    noMoreTurns() {
        return (this.co == 9);
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }

    checkWin(str) {
        var c = 0, k = 0, i = 0;
        for (k = 0; k < 3; k++, c = 0) {
            for (i = 0; i < 3; i++) {
                if (this.matrix[k][i] == str) {
                    c++;
                }
            }
            if (c == 3) {
                return true;
            }
        }

        c = i = k = 0;
        for (; i < 3; i++ , k++) {
            if (this.matrix[k][i] == str) {
                c++;
            }
        }
        if (c == 3) {
            return true;
        }

        c = k = 0;
        i = 2;
        for (; k < 3; i-- , k++) {
            if (this.matrix[k][i] == str) {
                c++;
            }
        }
        if (c == 3) {
            return true;
        }

        c = i = k = 0;
        for (k = 0; k < 3; k++ , c = 0) {
            for (i = 0; i < 3; i++) {
                if (this.matrix[i][k] == str) {
                    c++;
                }
            }
            if (c == 3) {
                return true;
            }
        }

    }
    
}

module.exports = TicTacToe;
