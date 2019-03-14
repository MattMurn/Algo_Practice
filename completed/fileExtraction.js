let file = "1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34";

function extractFileName(dirtyFileName) {
    let fileArray = dirtyFileName.split('.');
    let numbers = fileArray[0].split('_');
    numbers.shift();
    let name = numbers.join('_');
    return `${name}.${fileArray[1]}`;   
}

console.log(extractFileName(file));