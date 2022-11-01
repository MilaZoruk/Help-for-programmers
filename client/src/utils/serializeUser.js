const serializeUser = (data) =>
  data.user ? { id: data.user.id, email: data.user.email } : null;
export default serializeUser;
