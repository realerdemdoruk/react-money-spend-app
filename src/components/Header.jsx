import React from 'react';
import '../App.css';
const Header = ({ money, total }) => {
  return (
    <div className="header">
      {total > 0 && total != 0 && (
        <div>
          <p>Harcayacak {money - total} $ paranız kaldı</p>
        </div>
      )}
      {total === 0 && (
        <div>
          <p>Harcamak için {money} $ paranız var</p>
        </div>
      )}
      {money - total == 0 && (
        <div>
          <p>Paranız bitti</p>
        </div>
      )}
    </div>
  );
};

export default Header;
