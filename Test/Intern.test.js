const intern = require("../Classes/Intern")


it("Can set school via constructor", () => {
    const test = new intern("test", 1, "testEmail", "testSchool")

    expect(test.school).toEqual("testSchool")
}),
it('getRole() should return "Intern"', () => {
    const test = new intern("test", 1, "testEmail", "testSchool")

    expect(test.getRole()).toEqual("Intern")
}),
it("Can get school via getSchool()", () => {
    const test = new intern("test", 1, "testEmail", "testSchool")

    expect(test.getSchool()).toEqual("testSchool")
})
