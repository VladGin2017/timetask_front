import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    return (
    <div className='main-page'>
      <button onClick={() => alert(localStorage.getItem('token'))}>
        Узнать Токен
      </button>
    </div>
  );
}

export default HomePage;