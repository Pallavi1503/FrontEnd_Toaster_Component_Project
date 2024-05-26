import {  useState } from "react"
import Notification from "../components/notification"

const useNotification=(position='top-right')=>{
    const [notification,setNotification]=useState([])
    let timer
    const triggerNotification=(notificationProps)=>{
        clearTimeout(timer)
        setNotification([...notification,notificationProps]);
       timer=setTimeout(()=>{
            setNotification([])
        },notificationProps.duration)
    }

    const NotificationComponent=notification?(
        <div className={`${position}`}>
            {notification.map((note)=>
                (<Notification key={note.id} {...note}/>)
            )}
        </div>
    ):null

    return {NotificationComponent,triggerNotification}
};

export default useNotification;