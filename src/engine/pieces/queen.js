import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const possibleLocations = [];
        const currentRow = board.board[currentSquare.row];
        const upperBound = board.board.length;
        const lowerBound = -1;

        for (let x = 0; x < board.board.length; x++) {
            const possibleSquare = Square.at(currentSquare.row, x);

            if (!currentSquare.equals(possibleSquare)) {
                possibleLocations.push(possibleSquare);
            }
        }

        for (let x = 0; x < currentRow.length; x++) {
            const possibleSquare = Square.at(x, currentSquare.col);

            if (!currentSquare.equals(possibleSquare)) {
                possibleLocations.push(possibleSquare);
            }
        }

        for (let x = 0; x < board.board.length; x++) {
            const newSquare = new Square.at(currentSquare.row + x + 1, currentSquare.col + x + 1);

            if (newSquare.row < upperBound && newSquare.col < upperBound) {
                possibleLocations.push(newSquare);
            }
        }

        for (let x = 0; x < board.board.length; x++) {
            const newSquare = new Square.at(currentSquare.row + x + 1, currentSquare.col - x - 1);

            if (newSquare.row < upperBound && newSquare.col > lowerBound) {
                possibleLocations.push(newSquare);
            }
        }

        for (let x = 0; x < board.board.length; x++) {
            const newSquare = new Square.at(currentSquare.row - x - 1, currentSquare.col + x + 1);

            if (newSquare.row > lowerBound && newSquare.col < upperBound) {
                possibleLocations.push(newSquare);
            }
        }

        for (let x = 0; x < board.board.length; x++) {
            const newSquare = new Square.at(currentSquare.row - x - 1, currentSquare.col - x - 1);

            if (newSquare.row > lowerBound && newSquare.col > lowerBound) {
                possibleLocations.push(newSquare);
            }
        }
        return possibleLocations;
    }
}
