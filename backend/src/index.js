const express = require('express');
<<<<<<< HEAD
=======
const cors = require('cors');
>>>>>>> Conclusão da aula do segundo dia
const routes = require('./routes');

const app = express();

<<<<<<< HEAD
=======
app.use(cors());
>>>>>>> Conclusão da aula do segundo dia
app.use(express.json());
app.use(routes);

app.listen(3333);
