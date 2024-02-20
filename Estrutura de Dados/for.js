for (var i = 10; i >= 0; i--) {
    if (i % 2 == 0 && i != 0) {
        console.log("".concat(i, " *tic*"));
    }
    else if (i % 2 !== 0) {
        console.log("".concat(i, " *tac*"));
    }
    else {
        console.log("".concat(i, " *BOOM*"));
    }
}
