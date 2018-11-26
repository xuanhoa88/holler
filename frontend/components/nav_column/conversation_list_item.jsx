import React from 'react';
import { NavLink } from 'react-router-dom';

const ConversationListItem = ({ conv, lastMsg }) => {

  return (
    <NavLink to={`/${conv.id}`}
      className="conversation-list-item"
      activeClassName="active"
    >

      <img src={conv.imageUrl}
        className="conversation-list-item-pic"
        height="50"
        width="50" />

      <main className="conversation-list-item-body">
        <span className="conversation-list-item-convo-name">
          {conv.chatName}
        </span>

        <div className="conversation-list-item-last-msg">
          {lastMsg.body}
        </div>
      </main>
    </NavLink>
  )
}

export default ConversationListItem;
