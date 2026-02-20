import { add, sub } from '../src/calc'

describe("Test CALC", () => {
  it("Show return 15 for add(10, 5)", () => {
    expect(add(10, 5)).toBe(15)
  })
  it("Show return 5 for sub(10, 5)", () => {
    expect(sub(10, 5)).toBe(5)
  })
})
