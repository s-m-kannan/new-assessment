import React, { CSSProperties } from "react";
import confirmedImage from "../images/images.jpg";

function Confirm() {
    const confirmationMessage = "Thanks for your order! It has been confirmed.";

    const imageStyle: CSSProperties = {
        width: "200px", // Adjust the width as needed
        height: "auto", // Maintain aspect ratio
        marginBottom: "20px",
        marginTop: "50px", // Add spacing below the image
        borderRadius: "50%", // Make the image round
      };

    const containerStyle: CSSProperties = {
        textAlign: "center", // Center align content
        border: "2px solid #ccc", // Border styling
        padding: "20px", // Padding around the content
        borderRadius: "10px", // Optional: Add border radius for rounded corners
        maxWidth: "500px", // Optional: Set a maximum width for the container
        margin: "0 auto", // Optional: Center the container horizontally
        marginTop:"100px",
        backgroundColor:'#E8E3CF',
    };

    return (
        <div style={containerStyle}>
            <img src={confirmedImage} alt="Confirmation" style={imageStyle} />
            {/* <p>{confirmationMessage}</p> */}
            <h1>Thanks for latte </h1>
            <h2>Have a coffee and enjoy that warm hug in a cup</h2>
        </div>
    );
}

export default Confirm;
