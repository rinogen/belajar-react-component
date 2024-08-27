const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
        >
            {text}
        </button>
    );
};

export default Button;