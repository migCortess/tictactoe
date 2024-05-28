import { Square } from './Square.jsx'

export function WinnerModal ({ winner, resetGame }:any) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó:'

  return (
    <section className='winner'>
      <div className='text'>
        <h2 className='text-xl text-skin-primary font-bold mb-2'>{winnerText}</h2>

        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <button className='bg-violet-100 hover:active:bg-violet-600 rounded-full p-2 ring-4 text-skin-primary hover:active:text-white' onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
