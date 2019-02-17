
const pw_check = pw => {

    let upper_test = /[A-Z]/.test(pw);
    let lower_test = /[a-z]/.test(pw);
    let num_test = /[0-9]/.test(pw);

    return pw.length >= 8 && upper_test && lower_test;
}

console.log(pw_check('passRrd88'));