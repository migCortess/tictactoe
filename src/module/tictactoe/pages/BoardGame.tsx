import { useState } from 'react'
import { TURNS } from '../constants.js'
import { resetGameStorage, saveGameToStorage } from '../logic/storage/index.js'
import { checkEndGame, checkWinnerFrom } from '../logic/storage/board.js'
import confetti from 'canvas-confetti';
import { Square } from '../components/Square.js';
import { WinnerModal } from '../components/WinnerModal.js';

function BoardGames () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState<boolean|null>(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index:number) => {
    // no actualizamos esta posición
    // si ya tiene algo
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar aqui partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className='text-center m-2 h-100vh w-100vh '>
      {/* <h1 className='text-xl text-skin-primary font-bold mb-2'>objetivo: ganarle a Bungis</h1> */}
      <button className='bg-violet-100 hover:active:bg-violet-600 rounded-full p-2 ring-4 text-skin-primary hover:active:text-white' onClick={resetGame}>Nuevo juego</button>
      <section className='grid grid-cols-3 gap-4 mt-4 place-content-center justify-center justify-items-center'>
        {
          board.map((square:any, index:number) => {
            return (
                     <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
             
            )
          })
        }
      </section>

      <section className='turn gap-4'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default BoardGames
