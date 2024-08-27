export function Box(props) {
    const boxStyle = {
      border: "2px solid gray",
      borderRadius: "10px",
      padding: "10px",
      marginBottom: "10px",
      width: "350px",
    };
  
    return (
      <>
        <div style={boxStyle}>
          <h2>{props.item} card's h2</h2>
          <h3>{props.item} card's h3</h3>
        </div>
      </>
    );
  }