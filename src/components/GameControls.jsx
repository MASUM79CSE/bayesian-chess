import { ArrowPathIcon, TrophyIcon } from "@heroicons/react/24/solid"

export default function GameControls({ onReset, onUndo }) {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={onReset}
        className="bg-accent text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition"
      >
        <TrophyIcon className="h-5 w-5" />
        New Game
      </button>
      <button
        onClick={onUndo}
        className="bg-secondary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-600 transition"
      >
        <ArrowPathIcon className="h-5 w-5" />
        Undo Move
      </button>
    </div>
  )
}