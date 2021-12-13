import isAuthenticated from "@shared/infra/http/middlewares/isAuthenticated"
import { Router } from "express"
import ClientesController from "../ClientesController"

const clientesRouter = Router()
const clientesController = new ClientesController()

clientesRouter.use(isAuthenticated)
clientesRouter.get('/', clientesController.index)
clientesRouter.get('/:id', clientesController.show)
clientesRouter.post('/',clientesController.create)
clientesRouter.put('/:id', clientesController.update)
clientesRouter.delete('/:id', clientesController.delete)

export default clientesRouter