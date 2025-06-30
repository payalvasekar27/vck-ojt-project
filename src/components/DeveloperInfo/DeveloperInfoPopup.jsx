// Example structure for a React component (conceptual)
import './DeveloperInfoPopup.css'
function DeveloperInfoPopup({ show, onclose, studentName, studentphotoUrl, uniqueMessage}) {
    if (!show){
        return null;  //Don't render if not visible 
    }
    return (
        <div className="popup-overlay"> {/* Covers the whole screen, usually semi-transparent */}
        <div className="popup-content"> {/* The actual pop-up */}
            <button className="close-button" onClick={onclose}>&times;</button> {/* close button */}
            <img src={studentphotoUrl} alt={`${studentName}'s Photo`} className="student-photo"/>
            <h3 className="popup-title">Developed & Deployed by:</h3>
            <p className="student-name">{studentName}</p>
            <p className="unique-message">{uniqueMessage}</p>
            <button className="ok-button" onClick={onclose}>Got It!</button>  {/* Another close option */}
            </div>
        </div>
    );
}
export default DeveloperInfoPopup;

