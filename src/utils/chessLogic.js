import { Chess } from 'chess.js'
import { useState } from 'react'

export function useChessGame() {
  const [game, setGame] = useState(new Chess())
  const [probabilities, setProbabilities] = useState({ current: 85 })

  function onDrop(sourceSquare, targetSquare) {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q',
      })

      if (move === null) return false
      
      // Bayesian probability calculation placeholder
      const newProbability = Math.max(probabilities.current - 5, 50)
      setProbabilities({ current: newProbability })

      setGame(new Chess(game.fen()))
      return true
    } catch {
      return false
    }
  }

  return {
    game,
    probabilities,
    onDrop,
    setGame,
  }
}