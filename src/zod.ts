import { password } from 'bun'
import {z} from 'zod'

const loginValidation = z.object({
    username: z.string().min(1).max(50).email(),
    password: z.string().min(1).max(50)
})

// const request = {
//     username: 'dimas',
//     password: ''
// }
const request = {
    username: 'dimas@test.com',
    password: '123'
}

loginValidation.parse(request)