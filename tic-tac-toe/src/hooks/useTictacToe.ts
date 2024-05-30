import React, { useState } from "react";

const initialBoard=()=>Array(9).fill(null);

const useTictacToe=()=>{
    const [board,setBoard]=useState(initialBoard());
    const [isXturn,setIsXturn]=useState(true)
    
    const WINNING_PATTERNS=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6]
    ]

    const calculateWinner=(board)=>{
        for(let i=0;i<WINNING_PATTERNS.length;i++){
            const [a,b,c]=WINNING_PATTERNS[i];
            if(board[a] && board[a]===board[b] && board[a]===board[c]){
                return board[a];
            }
            
            return null;
        }
    }

    const getStatusMessage=()=>{
        const winner=calculateWinner(board);
        if(winner) return `Yeppeeee! Winner is ${winner}`;
        if(!board.includes(null)) return `It's a Tie`;
        return `Player ${isXturn?'X':'O'}'s turn`;
    }

    const handleClick=(id)=>{
        const winner=calculateWinner(board)
        console.log(winner)
        const newBoard=[...board]
        if(winner || board[id]) return;
         newBoard[id]=isXturn?'X':'O'
         setBoard(newBoard)
         setIsXturn(!isXturn)
        
    }

    const reset=()=>{
      setBoard(initialBoard())
      setIsXturn(true)
    }

    return {board,handleClick,reset,getStatusMessage}
}

export default useTictacToe;