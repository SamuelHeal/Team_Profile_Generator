
const manager = require("../Classes/Manager")


it("Can set office number via constructor argument", () => {
    const test = new manager("test", 1, "testEmail", "testOffice")

    expect(test.officeNumber).toEqual("testOffice")
}),
it('getRole() should return "Manager"', () => {
    const test = new manager("test", 1, "testEmail", "testOffice")

    expect(test.getRole()).toEqual("Manager")
}),
it("Can get officeNumber via getOffice()", () => {
    const test = new manager("test", 1, "testEmail", "testOffice")

    expect(test.getOffice()).toEqual("testOffice")
})