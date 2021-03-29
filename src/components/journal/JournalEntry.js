import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">

      <div 
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://wallup.net/wp-content/uploads/2018/10/04/55929-outer-space-galaxies-planets.jpg)'
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un nuevo día
        </p>
        <p className="journal__entry-content">
          Aperiam maxime vero iste optio voluptatibus atque alias quo.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>

      </div>

    </div>
  )
}
