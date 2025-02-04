import { useState } from 'react'
import ChessBoard from './components/ChessBoard'
import GameControls from './components/GameControls'
import { useChessGame } from './utils/chessLogic'

export default function App() {
  const { game, probabilities, onDrop, setGame } = useChessGame()

  const handleReset = () => {
    setGame(new Chess())
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Bayesian Chess
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <ChessBoard />
          
          <div className="mt-6">
            <GameControls 
              onReset={handleReset}
            />
          </div>
        </div>

        <footer className="mt-8 text-center text-secondary">
          <p>Created by Mir Mohammad Masum</p>
        </footer>
      </div>
    </div>
  )
}