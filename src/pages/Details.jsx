import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCryptoDetails, getCryptoHistory } from '../services/cryptoAPI'; 
import ChartComponent from '../components/ChartComponent'; 

const Details = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [period, setPeriod] = useState('1');

  useEffect(() => {
    const fetchCryptoDetails = async () => {
      const data = await getCryptoDetails(id);
      setCrypto(data);
    };

    fetchCryptoDetails();
  }, [id]);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod); 
  };

  if (!crypto) return <div>Chargement...</div>;

  return (
    <div className="details-container">
      <div className="details-left">
        <div className="details-header">
          <img src={crypto.image.large} alt={crypto.name} className="crypto-image" />
          <div>
            <h2 className="crypto-name">
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </h2>
            <p className="crypto-rank">Rang: #{crypto.market_cap_rank}</p>
          </div>
        </div>
        <div className="crypto-price">
          <h1>${crypto.market_data.current_price.usd.toLocaleString()}</h1>
        </div>
        <hr className="divider" />
        <div className="crypto-stats">
          <p>
            Cap.Boursière: <strong>${crypto.market_data.market_cap.usd.toLocaleString()}</strong>
          </p>
          <p
            className={
              crypto.market_data.price_change_percentage_24h > 0
                ? "positive"
                : "negative"
            }
          >
            % 24h: {crypto.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>
      </div>
      <div className="details-right">
        <div className="button-group">
          {['1', '7', '30', '365', 'max'].map((p) => (
            <button
              key={p}
              className={p === period ? 'active' : ''}
              onClick={() => handlePeriodChange(p)}
            >
              {p === '1' ? '1D' : p === '7' ? '1W' : p === '30' ? '1M' : p === '365' ? '1Y' : 'Tout'}
            </button>
          ))}
        </div>
        <ChartComponent cryptoId={id} period={period} />
      </div>
    </div>
  );
};

export default Details;
