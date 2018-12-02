
module.exports = app => {
    return x => {
        console.log(`curried... ${app}, ${x}`);
        return x + app;
    }
}