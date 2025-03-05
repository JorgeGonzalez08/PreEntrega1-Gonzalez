import {Router} from 'express'
import passport from 'passport';
import jwt from 'jsonwebtoken'
import { userModel } from '../dao/model/userModel.js';
import {createHash , isValidPassword, processError} from '../utils.js'
import {CartsManagerMongoose} from '../dao/CartsManagerMongoose.js'

export const sessionsRouter = Router();

sessionsRouter.post('/login',async(req,res)=>{
    try {

        const { first_name, password } = req.body
        const user = await userModel.findOne({first_name})

        if (!user) {
            return res.status(401).send('Usuario no encontrado')
        }
        if (!isValidPassword(password,user)) {
            return res.status(401).send('Contraseña incorrecta')
        }
        const tokenUser = jwt.sign({user_name: user.first_name, rol: user.role},'coderhouse',{expiresIn:'1h'})
        res.cookie('cookieToken',tokenUser,{httpOnly:true, maxAge:3600000})
        res.redirect('/api/sessions/current')

    } catch (error) {
        processError(error,res)
    }
})
sessionsRouter.post('/register',async(req,res)=>{
    try {
        const {first_name,last_name,email,age,password} = req.body;
        const existsEmail = await userModel.findOne({email})

        if (existsEmail) {
            return res.status(401).send(`Ya existe el email: ${email}`)
        }
        if (isNaN(age)) {
            return res.status(401).send(`El campo edad solo permmite valores numericos`)
        }

        const newCart = await CartsManagerMongoose.createCarts()
        const user = {
            first_name,
            last_name,
            email,
            age,
            password: createHash(password),
            cart: newCart._id
        }

        const createUser = await userModel.create(user)
        res.redirect('/login')

    } catch (error) {
        processError(error,res)
    }
})

sessionsRouter.post('/logout',(req,res)=>{
    res.clearCookie("cookieToken"); 
    res.redirect("/login"); 
})

sessionsRouter.get("/current", passport.authenticate("current", {session: false}), (req, res) => {
    if (req.user) {
        res.render("profile", {user: req.user.user_name});
    } else {
        res.send('Acceso denegado');
    }
})