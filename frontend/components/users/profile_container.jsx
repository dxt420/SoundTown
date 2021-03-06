import { connect } from 'react-redux';
import { createSong,fetchSong,fetchSongs,deleteSong } from '../../actions/song_actions';
import Profile from './profile';

const msp = (state) => {

  return({
    songs: Object.values(state.entities.songs),
    currentUser: state.session.currentUser
  });
};

const mdp = dispatch => {
  return({
  fetchSongs: () => dispatch(fetchSongs()),
  deleteSong: id => dispatch(deleteSong(id)),
  });
};

export default connect(
  msp,
  mdp
)(Profile);
