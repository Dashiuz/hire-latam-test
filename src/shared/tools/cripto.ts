import * as Bcrypt from 'bcrypt';

export const generateSalt = async () => {
  const saltRounds = 10;
  const salt = Bcrypt.genSaltSync(saltRounds);
  return salt;
};

export const encryptPassword = async (password: string) => {
  return Bcrypt.hashSync(password, await generateSalt());
};

export const validatePassword = async (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await Bcrypt.compare(password, hashedPassword);
};
