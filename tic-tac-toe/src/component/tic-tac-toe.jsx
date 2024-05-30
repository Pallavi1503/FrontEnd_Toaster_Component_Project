import useTictacToe from '../hooks/useTictacToe';
import './tic-tac-toe.css';

const Tictactoe=()=>{
     const {board,handleClick,reset,getStatusMessage}=useTictacToe();

    return(
        <>
        <div>
        <button onClick={()=>reset()} className='reset'>Reset Your Game</button>
         </div>
         <div className='winner'>
            <h3>{getStatusMessage()}</h3>
         </div>
         <div className="tictactoe">
            {
                board.map((b,index)=>{
                    return (<button key={index} 
                        className="button" 
                        onClick={()=>handleClick(index)}
                        disabled={b!==null}
                        >{b}</button>)
                })
            }
        </div>
         </>
       
    
    )
}

export default Tictactoe;