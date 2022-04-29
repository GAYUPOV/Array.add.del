let result, userData;
let data = [];
while (true) {
    result = prompt(`Element qo'shish uchun "add" "add," "add." orasini ochib birnmala va o'chirish uchun add orniga del ishlatas`);
    if (result === "stop" || result === null || result === undefined) {
        break;
    }
    userData = result.split(' ');
    if (userData[0] == "add" || userData[0] == "add," || userData[0] == "add.") {
        userData.shift();
        data.push(...userData);
        console.log(data);
        for (let x = 0; x < data.length; x++) {
            if (data[x] == "" || data[x] == null|| data[x] == undefined) {
                data.splice(data[x], 1);
            }
        }
    } else if (userData[0] = "del" || userData[0] == "del," || userData[0] == "del.") {
        
        userData.shift();

        for (let i = 0; i < data.length; i++) {
            if (data[i] == userData) {
                data.splice(data[i], 1);
            }
        }

        console.log(data);
    }
}