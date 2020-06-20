const mysql = require('mysql')

//创建连接对象
const connection = mysql.createConnection({
    //如果是线上用的话，你这里需要填写线上的地址
    host:"localhost",
    user:'root',
    password:'123456',
    port:'3306',
    database:'myblog'
})

//开始连接
connection.connect()

//执行 sql 语句
const sql = 'select * from users'
connection.query(sql,(err,result)=>{
    if (err){
        console.log(err);
        return;
    }

    console.log(result);
})

//关闭连接
connection.end()