var express = require('express');
var mysql = require('mysql');

var app = express();
const port = 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);



// 

router.get('/alunos', (req, res) =>{
    execSQLQuery('SELECT * FROM aluno', res);
})

router.get('/disciplinas', (req, res) =>{
    execSQLQuery('SELECT * FROM disciplina', res);
})

router.get('/turmas', (req, res) =>{
    execSQLQuery('SELECT * FROM turma', res);
})

router.get('/dados', (req, res) =>{
    execSQLQuery('select al.nome nome_al,matricula,ano_formacao,d.nome nm_disciplina,d.codigo cod_disciplina,turm.ano ano_cursado,ve,vc,vf,er_escrita,er_oral,pontos from (aluno al join turma turm on al.id = turm.aluno) join disciplina d on d.id = turm.disciplina', res);
})

app.listen(port);
console.log('API funcionando!');

function execSQLQuery(sqlQry,res){
    const connection = mysql.createConnection({
        host:'localhost',
        //host: '200.98.66.123',
        password: '123456',
        //  password: '8vXhrrAnmEs7JyYL',
        user: 'root',
        database: 'base3',
        port: 3306
    });
    
    connection.connect(function(error){
        if(!!error){
            console.log('Error');
            console.log(error.code);
        }
        else{
            console.log('Connected');
        }
    });

    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
}