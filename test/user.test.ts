import { describe, it, expect } from 'bun:test'
import { User } from '../packages/user/user'

describe('User Package', () => {
    it('should access from main package', async () => {
        const user = new User("Dimas")
        expect(user.name).toBe("Dimas")
    })
})