export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { bands: state.bands.concat(action.band) }
    case 'DELETE_BAND':
      console.log(action)
      console.log(state.bands.filter(band => band.id != action.payload))
      return {bands: state.bands.filter(band => band.id != action.payload)}
    default:
      return state;
  }
};
