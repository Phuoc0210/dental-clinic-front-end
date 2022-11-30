import {FaRegCheckCircle} from 'react-icons/fa'
import AnnouncementStyle from './AnnouncementStyle.css'
import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(AnnouncementStyle);

function Announcement({url}) {
    const navigate = useNavigate()
    return (
        <div style={
            {
                position: 'fixed',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: 'rgb(0,0,0,0.5)',

            }
        }>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                backgroundColor: 'white',
                width: "350px",
                padding: '20px',
            }}>
                <FaRegCheckCircle style={{
                    color: 'green',
                    width: '80px',
                    height: '80px',
                    margin: '20px'
                }}/>
                <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: '10px'
                }}>Submit Successfully!</div>
                <div style={{
                    fontSize: '16px',
                    color: 'gray',
                    marginBottom: '50px'
                }}>Thanks for choosing Dr.Strange</div>
                <button onClick={() => (navigate(url))}
                style={{
                    padding: '10px 50px 10px 50px',
                    border: 'none',
                    borderRadius: '50px',
                    backgroundColor: 'rgb(17, 93, 157)',
                    color: 'white',
                    fontWeight: 'bold'
                }}>Done</button>
            </div>
        </div>
    )
}

export default Announcement