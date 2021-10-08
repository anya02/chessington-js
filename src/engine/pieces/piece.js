export default class Piece {
    constructor(player) {
        this.player = player;
        this.moveCounter = 0;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        this.moveCounter++;
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
