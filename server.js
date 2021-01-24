const express = require('express');
const path = require('path');
const app = express();
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));
const MongoClient = require('mongodb').MongoClient;


var db;
MongoClient.connect('mongodb+srv://reactBank:1q2w3e4r@cluster0.30535.mongodb.net/reactBank?retryWrites=true&w=majority',function(에러,client){
    //db연결되면 서버 활성화
    if(에러) {return console.log(에러)}
    db = client.db('reactBank');
   
    const http = require('http').createServer(app);
        http.listen(8080, function() {
        console.log('listening on 8080')
    });
})
//MongoDB 이 URL로 접속요청
//mongodb+srv://HwajunSong:Shj5889548!@cluster0.2vee4.mongodb.net/<dbname>?retryWrites=true&w=majority
//mongodb+srv://reactBank:1q2w3e4r@cluster0.30535.mongodb.net/<dbname>?retryWrites=true&w=majority


//유저가 /react포함된 URL로 요청시 요청과 응답 사이에 실행할 코드(미들웨어)
app.use (express.static(path.join(__dirname, 'client/build')))

//내가 작성한 페이지를 전달 하고 싶을 때 sendFile 활용
app.get('/', function(요청, 응답){
    응답.sendFile( path.join(__dirname, 'client/build/index.html'))
});


//react router 기능을 사용하기 위해 아래와 같이 작성
app.get('*', function(요청, 응답){
        응답.sendFile( path.join(__dirname, 'client/build/index.html'))
    });

//server.js에는 axios나 ajax요청에 대한 DB입출력 코드를 작성한다.