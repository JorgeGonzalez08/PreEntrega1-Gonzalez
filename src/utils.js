import bcrypt from "bcrypt"

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
export const isValidPassword = (password, user) => bcrypt.compareSync(password, user.password);

export const processError = (error, res) => {
   console.log(error);
   res.setHeader('Content-Type', 'application/json');
   res.status(500).json({ status: 'error', detalle: `${error.message}` })
}
