const args = process.argv.slice(2);
const count = parseInt(args[0]);

if (isNaN(count)) {
    console.log("Missing number of occurences");
} else if(count > 0) {
    let output = "";
    for (let i = 0; i<count; i++) {
        output += "C is fun\n"
    } console.log(output.trim());
}
