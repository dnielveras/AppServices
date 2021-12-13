import { Router } from "express"
import ProdutosController from "../../controllers/ProdutosController"

const produtosRouter = Router()
const produtosController = new ProdutosController()

produtosRouter.get('/', produtosController.index)
produtosRouter.get('/:id', produtosController.show)
produtosRouter.post('/',produtosController.create)
produtosRouter.put('/:id', produtosController.update)
produtosRouter.delete('/:id', produtosController.delete)

export default produtosRouter