const s1 = setInterval(() => {
    console.log("calling from interval")
}, 1000)

setTimeout(() => {
    clearInterval(s1);
}, 6000)
