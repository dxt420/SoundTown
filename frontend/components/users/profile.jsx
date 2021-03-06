import React from "react";
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBarBrowseContainer from '.././nav_bar/nav_bar_browse_container';
import SubNav from '.././sub_nav/sub_nav';
import UploadedSong from './uploadedsong';
import CommentShowContainer from '../comment/comment_show_container';


class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageFile: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  handleSubmit(e) {
    const file = e.target.files[0];
    this.setState({ imageFile: file});

    const { updateBanner} = this.props;
    const imgData  = new FormData();
    if (this.state.songFile) {
      songData.append("user[image]", this.state.imageFile);
    }
    updateBanner(songData).then( action => {
      this.props.history.push(`/users/${this.props.currentUser.id}`);
    });
  }

  render() {
    const user_songs = this.props.songs.map((song,idx) => {

    if (song.author_id === this.props.currentUser.id) {
      return(
          <UploadedSong
            key={song.id}
            song={song}
            num={idx + 1}
            deleteSong={this.props.deleteSong}
            />
        );}
    });
    return (
      <div className="mainPageContainer">
        <NavBarBrowseContainer />
        <div className="UserContainer">
          <div className="UserBanner" style={ {backgroundImage: `url(${this.props.currentUser.banner_img_url})`} }>
            <p className="Name">{this.props.currentUser.username}</p>
          </div>

          <div className="UserProfileContent">
            <div className="UserSongs">
              <div className="Header">
                <h1>Your Uploads <i className="fas fa-upload"></i>

</h1>
                </div>
              <ul className="SongList">
                {user_songs}
              </ul>
            </div>

            <div className="UserComments">
              <div className="Header">
                <h1>Your Comments <i className="far fa-comment"></i>

</h1>
                </div>

              <CommentShowContainer />
            </div>
          </div>




        </div>

    </div>
    );
  }
}

export default withRouter(Profile);
