import { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

const ListView = ({openModal}) => {
  const store = useSelector((store) => store);
  const [itemOffset, setItemOffset] = useState(0);

  // sayfa başına eleman sayısını yaz.
  // ilk eleman ve sayfada tutacağı eleman
  const itemsPerPage = 10;
  // gösterilecek aralığı .son elemanı hesaplama
  const endOffset = itemOffset + itemsPerPage;
  // nerden nereye gösterilecek
  const currentItems = store?.flights.slice(itemOffset, endOffset);
  // toplam kaç saytfa old hesaplama
  const pageCount = Math.ceil(store?.flights.length / itemsPerPage);
  //
  const handlePageClick = (event) => {
    // gösterilecek yeni eleman hesaplama
    const newOffset = (event.selected * itemsPerPage) % store?.flights.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="list-page">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <th>İd</th>
          <th>Kuyruk Kodu</th>
          <th>Enlem</th>
          <th>Boylam</th>
        </thead>

        <tbody>
          {currentItems.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={()=> openModal(flight.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        className="pagination"
        activeClassName="active"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        nextLabel="ileri >"
        previousLabel="geri <"
        pageRangeDisplayed={1}
      />
    </div>
  );
};

export default ListView;
