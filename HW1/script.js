const ansi = require('ansi'); 

const cursor = ansi(process.stdout);
for (var i = 0; i<=5;i++){
    cursor.beep().red().bg.yellow().write('Hello, world!').reset().bg.reset().write('\n');
}
