export const createSocketMiddleware = io => config => {
  const socket = io();
  return store => next => action => {
    Object.keys(config).map(key => {
      if (action.type === key) {
        socket.emit(config[key](action));
      }
    });

    const result = next(action);
    return result;
  };
};
