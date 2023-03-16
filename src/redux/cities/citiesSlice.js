import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import settings from '../../config/settings';

const axiosGeo = axios.create({
  baseURL: settings.geoURL,
});

const axiosPollution = axios.create({
  baseURL: settings.pollutionURL,
});

const initialState = {
  cities: [
    {
      city: 'London',
    },
    {
      city: 'Beijing',
    },
    {
      city: 'Barcelona',
    },
    {
      city: 'Tokyo',
    },
    {
      city: 'Berlin',
    },
    {
      city: 'Prague',
    },
    {
      city: 'Washington',
    },
    {
      city: 'Boston',
    },
    {
      city: 'Paris',
    },
    {
      city: 'Nairobi',
    },
    {
      city: 'Johannesburg',
    },
    {
      city: 'Manchester',
    },
    {
      city: 'Istanbul',
    },
    {
      city: 'Madrid',
    },
    {
      city: 'Munich',
    },
    {
      city: 'Rome',
    },
    {
      city: 'Athens',
    },
    {
      city: 'Brussels',
    },
    {
      city: 'Kyiv',
    },
  ],
  filteredCities: [],
  error: false,
  isLoading: true,
};

export const getCordinates = createAsyncThunk(
  'cities/getCordinates',
  async (payload, thunkAPI) => {
    try {
      const resp = await axiosGeo.get('/direct', {
        params: {
          q: payload,
          appid: settings.appid,
          limit: 1,
        },
      });
      const { data } = resp;

      return data[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getPollution = createAsyncThunk(
  'cities/getPollution',
  async (payload, thunkAPI) => {
    try {
      const resp = await axiosPollution.get('', {
        params: {
          appid: settings.appid,
          lon: payload.lon,
          lat: payload.lat,
          end: Date.now(),
          start: 1606223802,
        },
      });
      const { data } = resp;

      return { list: data.list.slice(data.list.length - 15, data.list.length), city: payload.name };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    filterCities: (state, { payload }) => {
      const cities = state
        .cities
        .filter((city) => city.city.toLowerCase().includes(payload.toLowerCase()));

      return {
        ...state,
        filteredCities: cities,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCordinates.pending, (state) => ({ ...state, isLoading: true, error: false }))
      .addCase(getCordinates.fulfilled, (state, { payload }) => {
        const cities = state.cities.map((city) => {
          if (city.city === payload.name) {
            return ({
              city: city.city,
              lat: payload.lat,
              lon: payload.lon,
              country: payload.country,
            });
          }

          return city;
        });

        return {
          ...state,
          isLoading: false,
          error: false,
          cities,
          filteredCities: cities,
        };
      })
      .addCase(getCordinates.rejected, (state) => ({ ...state, isLoading: false, error: false }))
      .addCase(getPollution.pending, (state) => ({ ...state, isLoading: true, error: false }))
      .addCase(getPollution.fulfilled, (state, { payload }) => {
        const cities = state.cities.map((city) => {
          if (city.city.toLowerCase() === payload.city.toLowerCase()) {
            return {
              ...city,
              list: payload.list,
            };
          }

          return city;
        });

        return {
          ...state,
          isLoading: false,
          error: false,
          cities,
        };
      })
      .addCase(getPollution.rejected, (state) => ({ ...state, isLoading: false, error: true }));
  },
});

const cityReducer = citySlice.reducer;
export const { filterCities } = citySlice.actions;
export default cityReducer;
