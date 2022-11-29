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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                backgroundColor: 'white',
                padding: '50px',
            }}>
                <h4 style={{
                    color: '#111'
                }}>{message}</h4>
                <div style={{
                    display: 'flex', alignItems:'center', color:'black'
                }}>
                    <button onClick={() => onDialog(true)}
                    style={{
                        backgroundColor:'red',
                        color:'white',
                        padding: '10px',
                        width: "100px",
                        marginRight: '4px',
                        border: 'none',  
                        borderRadius: '8px'
                    }}>Yes</button>
                    <button onClick={() => onDialog(false)}
                    style={{
                        backgroundColor:'blue',
                        color:'white', 
                        padding: '10px',
                        width: "100px",
                        marginLeft: '4px', 
                        borderColor: 'blue',
                        borderRadius: '8px'
                    }}>No</button>
                </div>

            </div>
        </div>
    )
}

export default Dialog