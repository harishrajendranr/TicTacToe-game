import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const[count,setcount] = useState(1)
  const [winner, setwinner] = useState('')
  const [char, setchar] = useState('x')
  const [matrix, setmatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const getbgcolor = (value) => {
    if (value === 'x') return 'yellow'
    if (value === 'o') return 'orange'
    return ''
  }
  const checkwinner = () => {
    //check row
    if (matrix[0][0] && matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2]) {
      setwinner(matrix[0][0] + ' is the winner');
    }
    if (matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2]) {
      setwinner(matrix[1][0] + ' is the winner');
    }
    if (matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2]) {
      setwinner(matrix[2][0] + ' is the winner');
    }
    //check column
    if (matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0]) {
      setwinner(matrix[2][0] + ' is the winner');
    }
    if (matrix[0][1] && matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1]) {
      setwinner(matrix[2][1] + ' is the winner');
    }
    if (matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2]) {
      setwinner(matrix[2][2] + ' is the winner');
    }
    //check diagonal
    if (matrix[0][0] && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
      setwinner(matrix[2][2] + ' is the winner');
    }
    if (matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
      setwinner(matrix[2][0] + ' is the winner');
    }
    if(count === 9)
    {
      setwinner("The match has been drawn")
    }

  }

  const handleclick = (r, c) => {
    if (matrix[r][c]) return
    const tempmatrix = [...matrix];
    tempmatrix[r][c] = char;
    setmatrix(tempmatrix);
    setchar(char === 'x' ? 'o' : 'x')
    setcount(count + 1)
    checkwinner()


  }
  return (
    <div className="app">
      <div className='header aligncenter'>Tic Tac Toe</div>
      <div className='border aligncenter'>
        {!winner && <p>{char} 's turn now</p>}
        <div className='gameboard'>
    
          {
            winner ||
            matrix.map((row, rindex) => (
              <div className='row'>
                {
                  row.map((cell, cindex) =>
                  (
                    <div
                      onClick={() => handleclick(rindex, cindex)}

                      className={`cell aligncenter ${getbgcolor(matrix[rindex][cindex])}`}>{matrix[rindex][cindex]}</div>
                  ))
                }
              </div>
            ))
          }
        </div>
        <button className='restart' onClick={() => {
          setwinner('')
          setmatrix([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
          ])
        }}>Restart game</button>
      </div>
      
    </div>
  );
}

export default App;
