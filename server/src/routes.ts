import { Express } from 'express'
var usersRouter = require('./routes/userRouter');
var postsRouter = require('./routes/postRouter');
function routes(app: Express) {
    app.use('/api/users', usersRouter);
    app.use('/api/posts', postsRouter);
}

export default routes;