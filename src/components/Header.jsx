import { useSelector } from 'react-redux';

const Header = () => {
  const store = useSelector((store) => store);

  return (
    <header>
      <div>
        <img src="/images.png" alt="Uçuş Logosu" />
        <h2>Uçuş Radarı</h2>
      </div>

      <h4>
        {store.isLoading
          ? 'Uçuşlar Hesaplanıyor...'
          : store.flights
          ? `${store.flights.length} Uçuş Bulundu`
          : 'Uçuş Bulunamadı'}
      </h4>
    </header>
  );
};

export default Header; 