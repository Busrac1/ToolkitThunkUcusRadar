import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../helpers/constants";
import axios from "axios";

export const getFlights= createAsyncThunk(
  'flights/getFlights', 
async () => {
//    asenkron
const res = await axios.request(options);

// objeleri dizi yapma
// veriyi işledik
const newData= res.data.aircraft.map((flight)=> ({
  id: flight[0],
  code:flight[1],
  lat: flight[2],
  lng: flight[3]
}));

return newData;
});
