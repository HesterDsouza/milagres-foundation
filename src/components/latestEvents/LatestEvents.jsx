import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./latestEvents.css"
import { faIndianRupeeSign, faLocationDot, faPhone, faTriangleExclamation, faTrophy } from "@fortawesome/free-solid-svg-icons"
import { faCalendarDays, faClock } from "@fortawesome/free-regular-svg-icons"

const LatestEvents = () => {
  return (
    <section className="latest-event">
      <h2>Latest Events</h2>
      <div className="event-content">
        {/* <div className="event-images">
          <img src="/images/latest-event-1.jpg" alt="Latest Event Image 1" />
          <img src="/images/latest-event-2.jpg" alt="Latest Event Image 2" />
        </div> */}
        <div className="event-info">
          <h3>Hockey Tournament 2025</h3>
          <p>
            <strong>Milagres Foundation, Pune</strong> is organizinng an exciting a one-day hockey tournament on  
            <strong>April 6, 2025</strong>, at SVD Ground, Pune.  
            This event aims to bring together hockey enthusiasts and 
            foster sportsmanship, teamwork, and unity. Join us for a day 
            filled with thrilling matches and competitive spirit!
          </p>
          <p>
            <strong><FontAwesomeIcon className="bullet-icon" icon={faLocationDot} />Venue:</strong>SVD Ground, Pune, Maharashtra  
            (Beside Christ the King Church, Sainikwadi)  
          </p>
          <p>
            <strong><FontAwesomeIcon className="bullet-icon" icon={faClock} /> Time:</strong> 8:00 AM - 4:30 PM  
          </p>
          <p>
            <strong><FontAwesomeIcon className="bullet-icon" icon={faIndianRupeeSign} /> Registration Fee:</strong> ₹2001/- per team  
          </p>
          <p>
            <strong><FontAwesomeIcon className="bullet-icon" icon={faCalendarDays} /> Registration Deadline:</strong> April 3, 2025  
          </p>
          <section className="prizes">
            <strong><FontAwesomeIcon className="bullet-icon" icon={faTrophy} /> Prizes:</strong>
            <div className="cash-prizes">
              <p><strong>1st Prize:</strong>₹10,000</p> 
              <p><strong>2st Prize:</strong>₹5,000</p>
            </div>
          </section>
          <div className="info-group">
            <section>
              <strong><FontAwesomeIcon className="bullet-icon" icon={faPhone} /> Contact for Registration:</strong>  
              <ul>
              <li>Mr. Alban: 9975838045</li>
              <li>Mr. Pravin Xalxo: 8805670689</li>
              <li>Br. John Fernandes: 9422026832</li>
              <li>Mr. Ranjeet Kullu: 8999683915</li>
              </ul>
            </section>
            <section>
              <strong><FontAwesomeIcon className="bullet-icon" icon={faTriangleExclamation} /> Important Rules:</strong>  
              <ul>
              <li>Each team must have 6 players.</li>
              <li>Jersey and hockey sticks are mandatory.</li>
              <li>Goalkeeper&apos;s kit/helmet is compulsory.</li>
              <li>Re-entry allowed only till 1:00 PM.</li>
              <li>Referee&apos;s decision is final.</li>
              <li>Alcohol consumption is strictly prohibited.</li>
              <li>A player can participate in only one team.</li>
              <li>One army player is allowed per team.</li>
              <li>Penalty push will be given for fouls inside the D-area.</li>
              <li>Match timing will be decided by the organizers.</li>
              </ul>
            </section>
          </div>
          <p className="additional-event-disclaimer">
            This tournament is a social activity meant to encourage 
            participation, skill-building, and healthy competition. 
            Players must maintain fair play and discipline at all times.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LatestEvents