const mapMessagesToList = (messages, myid) => {
  return messages.map(m => {
    const timestamp = new Date(m.created_at); // updated_at?

    return {
      text: m.content || m.text,
      // mine: m.class === 'me',
      mine: (m.sender_id === myid) || (m.from_id === myid),
      timestamp: `${timestamp.getHours()}:${timestamp.getMinutes()}`
    };
  });
};

/**
 * This should not exist at all.
 * TODO: refactor the store so that users contain
 * references on interests which should be stored
 * in it's own storage. Then map by id for example.
 * May be use transformer for incoming data &
 * outgoung data for consistency (layer).
 */
const prepareUsersForListRender = (users) => {
  return users.map(user => {
    return Object.assign({}, user, {
      interests: mapInterestsToList(user.interests)
    });
  });
};
const prepareUserForRender = (user) => {
  return Object.assign({}, user, {
    interests: mapInterestsToList(user.interests)
  });
};
const mapInterestsToList = (interests) => {
  if (!interests) return [];

  return interests.map(i => {
    if (typeof i.content === "undefined" || typeof i.proficiency === "undefined") {
      return {
        content: i.name || i.text || i.content,
        proficiency: i.skill_level || i.level || i.match
      };
    }
    return i;
  });
};

const mapTagsToDropdown = (tags) => {
  return tags.map(t => ({ content: t.text || t.content, id: t.id }));
};

const mapUnreadMessagesToDropdown = (messages) => {
  return messages.map(m => ({ content: m.text, id: m.id, from_id: m.from_id }));
};

export {
  mapMessagesToList,
  mapInterestsToList,
  prepareUsersForListRender,
  prepareUserForRender,
  mapTagsToDropdown,
  mapUnreadMessagesToDropdown,
};
