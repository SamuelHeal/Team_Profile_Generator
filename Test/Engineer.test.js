const engineer = require("../Classes/Engineer")

it("Can set GitHUB account via constructor", () => {
    const test = new engineer("test", 1, "testEmail", "testGitHUB")

    expect(test.github).toEqual("testGitHUB")
}),
it('getRole() should return "Engineer', () => {
    const test = new engineer("test", 1, "testEmail", "testGitHUB")

    expect(test.getRole()).toEqual("Engineer")
}),
it("Can get GitHub username via getGithub()", () => {
    const test = new engineer("test", 1, "testEmail", "testGitHUB")

    expect(test.getGithub()).toEqual("testGitHUB")
})
