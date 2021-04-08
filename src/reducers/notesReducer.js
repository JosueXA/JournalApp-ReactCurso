/*
  {
    notes: [],
    active: null,
    active: {
      id: 'asdadsf46546',
      title: '',
      body: '',
      imageUrl: '',
      date: 15479745465813
    }
  }
*/

const initialState = {
  notes: [],
  active: null
}

export const notesReducer = ( state = initialState, action ) => {

  switch (action.type) {
  
    default:
      return state;
  }

}