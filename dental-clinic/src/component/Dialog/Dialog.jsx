import {RiErrorWarningFill} from 'react-icons/ri'

function Dialog({ message, onDialog }) {
    

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
                width: '400px',
                flexDirection: 'column',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                backgroundColor: 'white',
                
            }}>
                <div style={{
                    color: '#111',  
                    backgroundColor: '#D2D7D3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: "center",   
                }}>
                    <div style={{
                    color: '#25373D',
                    fontSize: '16px',
                    padding: '5px',
                    fontWeight: 'bold'
                }}>Confirm</div>
                <button onClick={() => onDialog(false)}
                style={
                    {
                        width: '10%',   
                        padding: '5px',
                        backgroundColor: 'red',
                        border: 'none',
                        color: 'white'
                    }
                }>
                    x
                </button>
                </div>
                <div style={{
                        padding: '24px',
                        width: '400px',
                         
                    }}>
                    <div >
                        <RiErrorWarningFill style={{
                        height: '44px',
                        width: '44px',
                        color: '#4387B5'
                    }}/> 
                        <span style={{
                        color: '#111',                       
                    }}> {message}</span>
                    </div>
                    </div>
                <div style={{
                    display: 'flex', alignItems:"end", color:'black', justifyContent: 'end'
                }}>
                    <button onClick={() => onDialog(true)}
                    style={{
                        padding: '10px',
                        width: "80px",
                        alignItems: 'center',
                        margin: '4px',
                        border: '#4387B5 3px solid',
                        borderRadius: '8px'
                    }}>OK</button>
                    <button onClick={() => onDialog(false)}
                    style={{
                        padding: '10px',
                        width: "80px",
                        alignItems: 'center',
                        margin: '4px', 
                        border: '#8199A3 2px solid',
                        borderRadius: '8px'
                    }}>Cancel</button>
                </div>

            </div>
        </div>
    )
}

export default Dialog