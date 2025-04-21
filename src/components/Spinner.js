import React from "react";
import  "./Spinner.css"; // Assuming you have a CSS file for styling
const Spinner = () => {
    return (
        <div className="flex flex-col item-center space-y-2">
          <span className="spinner"></span>
            <p className="text-bgDark text-lg font-semibold">Loading...</p>
        </div>
    )
}                                                           

export default Spinner;