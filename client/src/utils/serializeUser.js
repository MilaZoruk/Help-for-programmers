export const makeRandomString = (length) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const serializeUser = (data) =>
  data.user
    ? {
        id: data.user.id,
        email: data.user.email,
        avatar_url: `https://avatars.dicebear.com/api/croodles/${makeRandomString(
          10
        )}.svg`,
      }
    : null;
