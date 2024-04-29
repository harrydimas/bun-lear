import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const contact = await prisma.contact.create({
    data: {
        name: "Dimas",
        email: "dimas@test.com",
        phone: "08123456789"
    }
})

console.info(contact)