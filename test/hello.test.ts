import { describe, it, expect } from 'bun:test'
import { sayHello } from '../src/hello'

describe('Bun Test Runner', () => {
    it('shoild support unit test', async () => {
        const response = sayHello('Dimas')
        expect(response).toBe('Hello Dimas')
    })
})