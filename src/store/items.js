import store from './configureStore';

//ACTION TYPES
const ITEM_ADDED = 'itemAdded';
const ITEM_REMOVED = 'itemRemoved';
const ITEM_UPDATED = 'itemUpdated';

//ACTION CREATORS
export const itemAdded = description => ({
  type: ITEM_ADDED,
  payload: {
    description,
  },
});

export const itemUpdated = id => ({
  type: ITEM_UPDATED,
  payload: {
    id,
  },
});

export function itemRemoved(id) {
  store.dispatch({
    type: ITEM_REMOVED,
    payload: {
      id: id,
    },
  });
}

//REDUCERS
let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === ITEM_ADDED)
    return [
      ...state,
      {
        id: lastId++,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === ITEM_REMOVED)
    return state.filter(item => item.id !== action.payload.id);
  else if (action.type === ITEM_UPDATED)
    return state.map(item =>
      item.id !== action.payload.id ? item : { ...item, resolved: true }
    );

  return state;
}
