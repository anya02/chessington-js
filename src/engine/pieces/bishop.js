import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        let possibleSquares = [];
        const upperBound = board.board.length;
        const lowerBound = -1;

        for (let x = 0; x < board.board.length; x++) {
            const newSquare = new Square.at(currentSquare.row + x + 1, currentSquare.col + x + 1);

            if (newSquare.row < upperBound && newSquare.col < upperBound) {
                possibleSquares.push(newSquare);
            }
        }

        for (let x = 0; x < board.board.length; x++) {
            const newSquare = new Square.at(currentSquare.row + x + 1, currentSquare.col - x - 1);

            if (newSquare.row < upperBound && newSquare.col > lowerBound) {
                possibleSquares.push(newSquare);
            }
        }

        for (let x = 0; x < board.board.length; x++) {
            const newSquare = new Square.at(currentSquare.row - x - 1, currentSquare.col + x + 1);

            if (newSquare.row > lowerBound && newSquare.col < upperBound) {
                possibleSquares.push(newSquare);
            }
        }

        for (let x = 0; x < board.board.length; x++) {
            const newSquare = new Square.at(currentSquare.row - x - 1, currentSquare.col - x - 1);

            if (newSquare.row > lowerBound && newSquare.col > lowerBound) {
                possibleSquares.push(newSquare);
            }
        }

      return possibleSquares;
    }
}