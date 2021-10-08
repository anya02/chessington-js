import Player from '../player';
import Piece from './piece';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    
    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);

        if (this.player === Player.WHITE) {

            if (this.moveCounter < 1) {
                return [Square.at(currentSquare.row + 1, currentSquare.col), Square.at(currentSquare.row + 2, currentSquare.col)];
            }

            return [Square.at(currentSquare.row + 1, currentSquare.col)]
        }

        if (this.player === Player.BLACK) {
            if (this.moveCounter < 1) {
                return [Square.at(currentSquare.row - 1, currentSquare.col), Square.at(currentSquare.row - 2, currentSquare.col)];
            }

            return [Square.at(currentSquare.row - 1, currentSquare.col)]
        }
    }
}
