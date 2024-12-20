import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { getCryptoList } from '../services/cryptoAPI';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCryptos = async () => {
      const data = await getCryptoList();
      setCryptos(data);
    };

    fetchCryptos();
  }, []);

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      
      <header className="header">
        <SearchBar onSearch={setSearch} />
      </header>
      <div className="crypto-table">
        <div className="table-header">
          <div>#</div>
          <div>Nom</div>
          <div>Prix</div>
          <div>% 24H</div>
          <div>Cap.Boursière</div>
        </div>
        <div className="table-body">
          {filteredCryptos.map((crypto, index) => (
            <div
              key={crypto.id}
              className="table-row"
              onClick={() => navigate(`/details/${crypto.id}`)} 
              style={{ cursor: 'pointer' }} 
            >
              <div>{index + 1}</div>
              <div className="crypto-name">
                <img src={crypto.image} alt={crypto.name} />
                <span>{crypto.name} ({crypto.symbol.toUpperCase()})</span>
              </div>
              <div>${crypto.current_price}</div>
              <div className={crypto.price_change_percentage_24h > 0 ? 'positive' : 'negative'}>
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div>${crypto.market_cap.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;


