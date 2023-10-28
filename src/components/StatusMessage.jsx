const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;

  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          Player <span className="text-green">X</span> and Player{' '}
          <span className="text-orange">O</span> Tied!!
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next Player Is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }

    return null;
  };
  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
