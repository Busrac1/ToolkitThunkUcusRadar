import { useEffect, useState } from "react"
import Header from "./components/Header"
import MapView from "./pages/MapView"
import ListView from "./pages/ListView"
import { useDispatch } from "react-redux"
import { getFlights } from "./redux/actions/flightActions"
import SideDetail from "./components/SideDetail"


function App() {
const [showMapView, setShowMapView]= useState(true)
const [showDetail, setShowDetail] = useState(false);
const [detailId, setDetailId]= useState();

const dispatch= useDispatch();

useEffect(()=> {
  dispatch(getFlights());
}, []);

const openModal= (id) => {
    // detayı gösterilecek uçakları state aktarma
   setDetailId(id) ;
  //  modalı açar- ekranı
   setShowDetail(true)
}
  return (
 <>
<Header/>

<div className="view-buttons">
  <button 
  className={showMapView ? "active": ' '}
   onClick={() => setShowMapView(true)}>
    Harita Görünümü
  </button>

  <button 
  className={!showMapView ? "active" : ' '} 
  onClick={() => setShowMapView(false)}>
     Liste Görünümü
  </button>

</div>
 {/* koşullu renderlama yap */}
 {/* eğer true ise mapview değilse listitview ekrana yazdır */}

     {showMapView ? (
       <MapView openModal={openModal} /> 
       ) : (
       <ListView openModal={openModal}/> 
       )}
     {showDetail && 
     <SideDetail
      detailId={detailId}
      setShowDetail={setShowDetail} />}
 </> 
  )
}

export default App
