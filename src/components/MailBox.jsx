import { MessageList } from "./MessageList";
export const Mailbox = ({ username, messages }) => {
    return (
      <div>
        <p>Hello {username}</p>
        {messages.length > 0 ? (
          <div>
            <p>You have {messages.length} unread messages</p>
            <MessageList messages={messages} />
          </div>
        ) : (
          <p>No unread messages</p>
        )}
      </div>
    );
  };