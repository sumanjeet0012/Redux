const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeReducer = require('../cake/cakeSlice');

const initialState = {
  numOfIcecream: 10,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeReducer.cakeActions.ordered, (state) => {
        state.numOfIcecream--
    });
}
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamSlice = icecreamSlice.actions;