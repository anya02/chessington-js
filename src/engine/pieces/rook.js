import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        const possibleLocations = [];
        const currentRow = board.board[currentSquare.row];
        let possibleSquare;

        for (let x = 0; x < board.board.length; x++) {
            possibleSquare = Square.at(currentSquare.row, x);

            if (!currentSquare.equals(possibleSquare)) {
                possibleLocations.push(possibleSquare);
            }
        }

        for (let x = 0; x < currentRow.length; x++) {
            possibleSquare = Square.at(x, currentSquare.col);

            if (!currentSquare.equals(possibleSquare)) {
                possibleLocations.push(possibleSquare);
            }
        }
        return possibleLocations;
        }
    }