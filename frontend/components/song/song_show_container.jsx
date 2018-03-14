import { connect } from 'react-redux';
import { createSong,fetchSong,fetchSongs } from '../../actions/song_actions';
import { fetchComments } from '../../actions/comment_actions';
import { fetchUser } from '../../actions/user_actions';
import SongShow from './song_show';

const msp = (state, ownProps) => {
const song = state.entities.songs[ownProps.match.params.songId] || {};
const comments = song.comment_ids ? song.comment_ids.map(id => state.entities.comments[id]) : [];
  return({
    song,
    currentUser: state.session.currentUser,
    comments,
    users: state.entities.users
  });
};

const mdp = dispatch => {
  return({
    fetchSong: (id) => dispatch(fetchSong(id)),
    fetchComments: () => dispatch(fetchComments()),
    fetchUser: (id) => dispatch(fetchUser(id))
  });
};

export default connect(
  msp,
  mdp
)(SongShow);
