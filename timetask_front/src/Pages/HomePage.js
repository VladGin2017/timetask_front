import React from 'react';

const HomePage = () => {
    return (
      <>
        <div className='main-page'>
          <button onClick={() => alert(localStorage.getItem('token'))}>
            Узнать Токен
          </button>
        </div>
      </>
  );
}

export default HomePage;