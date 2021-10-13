describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  // Do the number buttons update the display of the running total?
  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  // Do the arithmetical operations update the display with the result of the operation?
  it('should update the display with the result of arithmetical operations', ()=>{
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2');
  })
  // Can multiple operations be chained together?
  it('should allow for multiple operations to be chained together', ()=>{ 
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8');
  });
  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('should display the expected output for negative numbers', ()=>{
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1');
  });

  it('should display the expected output for decimals numbers', ()=>{
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1');
  });

  it('should display the expected output for very large numbers', ()=>{
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2000000');
  });

  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a 
  // test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify 
  // the Calculator model to meet this requirement).

})