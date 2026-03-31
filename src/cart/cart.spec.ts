import Product from "../products/products"
import Cart from "./cart"

const makeCart = (): Cart => {
  return new Cart
}

const makeProduct = (name:string, price: number): Product => {
  return new Product(name, price)
}

const makeSut = () => {
  const sut = makeCart()

  return {
    sut
  }
}

describe('Card', () => {
  it('should empty cart', () => {
    const {sut} = makeSut()
    expect(sut.items.length).toBe(0)
  })

  it('should has one item in cart', () => {
    const {sut} = makeSut()
    expect(sut.items.length).toBe(0)
    sut.addItem(makeProduct('prod1', 10))
    expect(sut.items.length).toBe(1)
  })

  it('should has two item in cart', () => {
    const {sut} = makeSut()
    sut.addItem(makeProduct('prod1', 10))
    sut.addItem(makeProduct('prod1', 10))
    expect(sut.items.length).toBe(2)
  })

  it('should have one item if add two and remove one', () => {
    const {sut} = makeSut()
    const prod1 = makeProduct('prod1', 10)

    sut.addItem(prod1)
    sut.addItem(makeProduct('prod2', 10))
    expect(sut.items.length).toBe(2)

    sut.removeItem(prod1)
    expect(sut.items.length).toBe(1)
  })

  it('should have one item if add two and remove one', () => {
    const {sut} = makeSut()
    const prod1 = makeProduct('prod1', 10)
    const prod2 = makeProduct('prod2', 20)

    sut.addItem(prod1)
    sut.addItem(prod2)
    expect(sut.items.length).toBe(2)

    sut.removeItem(prod1)
    sut.removeItem(prod2)
    expect(sut.isEmpty).toBeTruthy()
  })

  it('should total equals 10, with two products', () => {
    const {sut} = makeSut()

    sut.addItem(makeProduct('prod1', 10))
    sut.addItem(makeProduct('prod2', 20))

    expect(sut.total()).toBe(30)
  })

  it('should total equals 0, with two products', () => {
    const {sut} = makeSut()
    expect(sut.total()).toBe(0)
  })

  it('should clear cart', () => {
    const {sut} = makeSut()

    sut.addItem(makeProduct('prod1', 10))
    sut.addItem(makeProduct('prod2', 20))
    sut.clear()

    expect(sut.isEmpty()).toBeTruthy()
  })
})
