import React from 'react';

const Header = ({ money, total }) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        backgroundColor: 'lightblue',
      }}
    >
      {total > 0 && total !== 0 && (
        <div>
          <p>Harcayacak {money - total} $ paranız kaldı</p>
        </div>
      )}{' '}
      {total === 0 && (
        <div>
          <p>Harcamak için {money} $ paranız var</p>
        </div>
      )}{' '}
      {money - total === 0 && (
        <div>
          <p>Paranız bitti</p>
        </div>
      )}
    </div>
  );
};

export default Header;
