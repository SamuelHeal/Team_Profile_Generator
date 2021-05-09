const employee = require("../Classes/Employee")

describe("employee", () => {
    it("Can instantiate Employee instance", () => {
        const test = new employee("test", 1, "test")

        expect("name" in test).toEqual(true)
        expect("id" in test).toEqual(true)
        expect("email" in test).toEqual(true)
    }),
    it("Can set name via constructor arguments", () => {
        const test = new employee("test", 1, "test")

        expect(test.name).toEqual("test")
    }),
    it("Can set id via constructor arguments", () => {
        const test = new employee("test", 1, "test")

        expect(test.id).toEqual(1)
    }),
    it("Can set email via constructor arguments", () => {
        const test = new employee("test", 1, "test")

        expect(test.email).toEqual("test")

    }),
    it("Can get name via getName()", () => {
        const test = new employee("test", 1, "test")

        expect(test.getName()).toEqual("test")

    }),
    it("Can get id via getID()", () => {
        const test = new employee("test", 1, "test")

        expect(test.getID()).toEqual(1)
    }),
    it("Can get email via getEmail()", () => {
        const test = new employee("test", 1, "test")

        expect(test.getEmail()).toEqual("test")
    }),
    it('getRole() should return with "Employee', () => {
        const test = new employee("test", 1, "test")

        expect(test.getRole()).toEqual("Employee")
    })
    
})

