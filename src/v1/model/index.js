import { action } from 'easy-peasy';


export default {
  path        : null,
  setPath : action( (state,payload) => {
      state.path  = payload;
    }
  ),

};
