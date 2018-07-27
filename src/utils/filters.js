// TODO: delete - not used
const getChatMessagesFilter = (messages, myid, id) => {
  return messages.filter((msg) => {
    if (
      (msg.sender_id === id && msg.reciever_id === myid) ||
      (msg.reciever_id === id && msg.sender_id === myid) ||
      (msg.from_id === id && msg.to_id === myid) ||
      (msg.to_id === id && msg.from_id === myid)
    ) {
      return msg;
    }
    return false;
  });
};

export {
  getChatMessagesFilter
};
