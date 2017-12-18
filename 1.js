const readlineSync = require('readline-sync');
//let   aaaaa = readlineSync.question('please input student information (format:name, StuNumber, nation, class, subjects: score, ...),Enter submit:');
let   answer = readlineSync.question('1.add student\n'+'2.generate scoreForm\n'+'3.quit\n'+'please input your choice(1---3):');
    switch(Number(answer)){
        case 1:
            console.log(`请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：`);

            break;
        case 2:
            console.log(`请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
            break;
        case 3:
            console.log(`退出`);
            break;
    }



