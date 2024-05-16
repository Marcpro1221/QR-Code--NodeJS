/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
const question = [{ type:'png', name: 'URL', message: "Enter URL Link you want to scan: "}];
inquirer.prompt(question).then(answer=>{
    const urlLink = answer.URL;
    var qr_img = qr.image(urlLink, answer.type);
    qr_img.pipe(fs.createWriteStream("./qr_img.png"));
    fs.writeFile("URL.txt", urlLink, function(err){
        if(err) throw err;
        console.log("Link has been saved");
    })
})
