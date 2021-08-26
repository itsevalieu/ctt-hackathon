describe("App", () => {
  const url = "/";
  beforeEach(() => {
    cy.visit(url);
  });
  it("should show text", () => {
    cy.contains("a radio").click();
    expect(true).to.equal(false);
    //Arrange - setup initial app state
    //- visit web page
    //- query for an element
    //Act - take an action
    //- interact with that element
    //Assert - make an assertion
    //- make an assertion about page content
  });
});
