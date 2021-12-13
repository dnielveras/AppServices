import { Router } from "express"
import UsuariosController from "../../controllers/UsuariosController"
import isAuthenticated from "../../../../../shared/infra/http/middlewares/isAuthenticated"

const usuariosRouter = Router()
const usuariosController = new UsuariosController()

usuariosRouter.get('/', isAuthenticated, usuariosController.index)
usuariosRouter.post('/', usuariosController.create)

export default usuariosRouter