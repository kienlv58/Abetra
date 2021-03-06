export const allRank = (state = [], action = {}) => {
  switch (action.type) {
    case "GET_RANK":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const allHashTag = (state = [], action = {}) => {
  switch (action.type) {
    case "GET_HASHTAG":
      return [...state, ...action.payload];
    default:
      return state;
  }
};
