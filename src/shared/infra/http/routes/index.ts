import clientesRouter from "@modules/clientes/infra/http/routes/clientes.routes"
import produtosRouter from "@modules/produtos/infra/http/routes/produtos.routes"
import sessionsRouter from "@modules/usuarios/infra/http/routes/sessions.routes"
import usuariosRouter from "@modules/usuarios/infra/http/routes/usuarios.routes"
import { Router } from "express"

const routes = Router()

routes.use('/produtos', produtosRouter)
routes.use('/usuarios', usuariosRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/clientes', clientesRouter)


export default routes