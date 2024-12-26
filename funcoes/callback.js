const teste= function (cb) {
    console.log("funcao teste")
    console.log(cb)
    if (typeof cb === "function") {
        cb(30)
    }
}

const fn = function (param) {
    console.log("essa é uma função anonima de callback")
    console.log(param)
}
// nunca é executada

// fn(30)

teste(fn)

// teste(function () {
//     console.log("essa é uma função anonima de callback")
// })