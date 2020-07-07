let app = require('express')();
// var pythonshell = require('python-shell');
const {exec} = require('child_process');
const path = require('path');

var options = {
    // mode: 'text',
    pythonPath: 'C:/Users/J/AppData/Local/Programs/Python/Python36/python.exe',
    // args: []
};


function runPython() {
    pythonshell.PythonShell.run('C:/Users/J/Desktop/Programs/JavaScript/MouseScript.py', options, function (err, results) {
        if (err) throw err;
    });
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', (req, res) => {
    res.send(200);
    console.log("Recieved POST request");
    // console.log(req.headers.mouselocX)
    // console.log(req.headers.mouselocY)
    // options.pythonOptions.push(req.headers.mouselocX, req.headers.mouselocY)
    exec("sudo python3 MouseScript.py")
    // options.pythonOptions.push("50", "50")
    // runPython()
    console.log("Script Run")
});

app.listen(3000, console.log("Server Listening on Port 3000"));

/*
TODO:
Get Header and info
Touch input
*/