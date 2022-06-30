const path = require('path');
const unoconv = require('awesome-unoconv');
//Place your word file in source
const sourceFilePath = path.resolve('./word_file.docx');
const outputFilePath = path.resolve('./myDoc.pdf');
 
unoconv
  .convert(sourceFilePath, outputFilePath)
  .then(result => {
    console.log(result); // return outputFilePath
  })
  .catch(err => {
    console.log(err);
  });
  const libre = require('libreoffice-convert');
 
const path = require('path');
const fs = require('fs');
 
const extend = '.pdf'
const FilePath = path.join(__dirname, './word_file.docx');
const outputPath = path.join(__dirname, `./example${extend}`);
 
// Read file
const enterPath = fs.readFileSync(FilePath);
// Convert it to pdf format with undefined filter (see Libreoffice doc about filter)
libre.convert(enterPath, extend, undefined, (err, done) => {
    if (err) {
      console.log(`Error converting file: ${err}`);
    }
    
    // Here in done you have pdf file which you can save or transfer in another stream
    fs.writeFileSync(outputPath, done);
});
var docxConverter = require('docx-pdf');

docxConverter('./word_file.docx','./output.pdf',function(err,result){
  if(err){
    console.log(err);
  }
  console.log('result'+result);
}); 