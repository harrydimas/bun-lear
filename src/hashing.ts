const password = "rahasia"
const pwdHash = await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 10
})

// const result = await Bun.password.verify("salah", pwdHash, "bcrypt")
const result = await Bun.password.verify("rahasia", pwdHash, "bcrypt")
console.info(result)