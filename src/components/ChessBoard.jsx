import { Chessboard } from "react-chessboard"
import { useChessGame } from '../utils/chessLogic'

export default function ChessBoard() {
  const { game, probabilities, onDrop } = useChessGame()

  return (
    <div className="relative">
      <Chessboard 
        position={game.fen()}
        onPieceDrop={onDrop}
        boardWidth={560}
        customBoardStyle={{
          borderRadius: '4px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
      />
      {probabilities && (
        <div className="absolute bottom-2 right-2 bg-white p-2 rounded shadow-lg">
          Move Confidence: {probabilities.current}%
        </div>
      )}
    </div>
  )
}