import React from 'react';
import ActionCable from 'actioncable';

class LiveChat extends React.Component {
  constructor(props) {
    super(props);
    this.setUpChatRoom = this.setUpChatRoom.bind(this);
  }

  componentWillMount() {
    const { convId, receiveMessage } = this.props;
    this.setUpChatRoom(convId, receiveMessage);
  }

  setUpChatRoom(convId, receiveMessage) {
    const chatroom = ActionCable.createConsumer("ws://localhost:3001/cable");
    chatroom.subscriptions.create({
      channel: 'ChatChannel',
      room: `chat-${convId}`,
    }, {
      connected: function() {
        console.log("connected");
      },
      disconnected: function() {},
      received: ({ payload }) => {
        console.log("payload", payload);
        receiveMessage(payload)
      },
    });
  };

  render() {
    console.log('livechatprops', this.props);
    const { messages, currentUser, chatUsers } = this.props;

    const displayMessages = messages.map((msg) => {
      let align;
      if (msg.senderId === currentUser.id) align = "right";
      else align = "left";

      if (!chatUsers[msg.senderId]) return null;
      const senderPic = chatUsers[msg.senderId].imageUrl

      return (
        <li key={`chat-msg-${msg.id}`}
          className={`chat-msg chat-msg-align-${align}`}
        >
          <img src={senderPic} className="chat-msg-pic left" />
          <div className={`chat-msg-body chat-msg-body${align}`}>{msg.body}</div>
          <img src={senderPic} className="chat-msg-pic right" />
        </li>
      )
    })

    return (
      <div className="live-chat">
        <ul>
          {displayMessages}
        </ul>
      </div>
    )
  }
}

export default LiveChat;
