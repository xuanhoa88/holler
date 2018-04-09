import React from 'react';
import { withRouter } from 'react-router';
import { GithubIconLink, LinkedInIconLink } from '../../../footer/icon_links';

class FriendDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleDetails() {
    const chatName = this.props.chatName || "Hello there!";
    if (this.props.showFriendDetails) {
      return (
        <div className="friend-details">
          <div className="friend-details-header">
            <img src="https://i.imgur.com/XSTheUg.png"
              className="friend-details-convo-pic" />

            <span className="friend-details-convo-name">
              {chatName}
            </span>
          </div>

          <div className="annie-links">
            <GithubIconLink />
            <LinkedInIconLink />
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.toggleDetails()}
      </div>
    )
  }
}

export default FriendDetails;
