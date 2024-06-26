/* eslint-disable react/prop-types */
import{AiOutlineCheckCircle,AiOutlineInfoCircle,
    AiOutlineWarning,AiOutlineCloseCircle} from 'react-icons/ai'
import './notification.css';

const iconStyles={marginRight:"10px"}

const icons={
    success:<AiOutlineCheckCircle style={iconStyles}/>,
    info:<AiOutlineInfoCircle style={iconStyles}/>,
    warning:<AiOutlineWarning style={iconStyles}/>,
    error:<AiOutlineCloseCircle style={iconStyles}/>
}

const Notification=({type='info',message,onClose=()=>{}}) => {
    return(
        <div className={`notification ${type}`}>
            {icons[type]}
            {message}
            <AiOutlineCloseCircle color='white' onClick={onClose}/>
        </div>
    )
}

export default Notification;