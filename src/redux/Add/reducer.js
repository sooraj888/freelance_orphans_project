const {ADD} = require('./constant');

const initialState = 0;

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return parseInt(state) + parseInt(action.payload);

    default:
      return state;
  }
};
