import './App.css'
import useNotification from './hooks/use-notification'

function App() {
  const buttonStyle={
    padding:'10px',
    margin:'10px',
    display:'flex',
    width:'190px'  
  }
  //custom hook -useNotification(position)
  const {NotificationComponent,triggerNotification}=useNotification('top-right')
  return (
    
      <div>
      <h1>Welcome! Please click on each button to see the different types of Notifications (Toaster)</h1>
      <div className='buttons'>
      <button onClick={()=>triggerNotification({
        type:"success",
        message:"Notification displayed successfully",
        duration:5000,
        id:'1'
      })}
      className='success' style={buttonStyle}>
        Success Notification
      </button>
      <button onClick={()=>triggerNotification({
        type:"info",
        message:"Information Notification being displayed",
        duration:5000,
        id:'2'
      })}
      className='info' style={buttonStyle}>
        Information Notification
      </button>
      <button onClick={()=>triggerNotification({
        type:"error",
        message:"Error Notification being displayed",
        duration:5000,
        id:'3'
      })}
      className='error' style={buttonStyle}>
        Error Notification
      </button>
      <button onClick={()=>triggerNotification({
        type:"warning",
        message:"Warning Notification being displayed",
        duration:5000,
        id:'4'
      })}
      className='warning' style={buttonStyle}>
        Warning Notification
      </button>
      </div>
      {NotificationComponent}
      </div>
    
  )
}

export default App
