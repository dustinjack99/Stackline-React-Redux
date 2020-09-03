//ACTION TYPES
const FETCH_ITEM = 'FETCH_ITEM';

//ACTION CREATORS
export const fetchItem = () => dispatch => {
  fetch('../../Webdev_data2.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(res => res.json())
    .then(item =>
      dispatch({
        type: FETCH_ITEM,
        payload: item,
      })
    );
};

//REDUCERS
const initialState = {
  item: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEM:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
}
