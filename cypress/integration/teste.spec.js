/// <reference types="cypress" />


describe('Tricentis Vehicle Insurance',function() {
 beforeEach(function(){
    cy.visit('http://sampleapp.tricentis.com/');
    })
    it.only('Verificar o titulo da aplicação', function() {
        cy.title().should('be.equal', 'Tricentis Vehicle Insurance')
    })
    it.only('Preencher formulario', () => {
    cy.get('.main-navigation > .menu > :nth-child(2) > #nav_truck').type('{enter}');
    
    it('Selecionar modelo', );
    cy.get('select[name="Make"]').select('BMW');

    it('Selecionar performance', );
    cy.get('input[id="engineperformance"]').type('300');

    it('Selecionar data da fatura', );
    cy.get('input[id="dateofmanufacture"]').type('06/10/2022');
    
    it('Selecionar quantidade de assentos', );
    cy.get('select[id="numberofseats"]').select('7');

    it('Selecionar tipo de combustivel', );
    cy.get('select[id="fuel"]').select('Gas');

    it('Preencher carga util', );
    cy.get('input[id="payload"]').type('250');

    it('Preencher peso total', );
    cy.get('input[id="totalweight"]').type('500');

    it('Preencher preço de tabela', );
    cy.get('input[id="listprice"]').type('2500');

    it('Preencher numero da placa', );
    cy.get('input[id="licenseplatenumber"]').type('3000');

    it('Preencher quilometragem anual', );
    cy.get('input[id="annualmileage"]').type('600');

    it('Clicar em next', );
    cy.get('#nextenterinsurantdata').click();

    it('Preencher nome', );
    cy.get('input[id="firstname"]').type('Karina');

    it('Preencher sobrenome', );
    cy.get('input[id="lastname"]').type('Araujo');

    it('Preencher data de nascimento', );
    cy.get('input[id="birthdate"]').type('03/20/1988');

    it('Selecionar genero', );
    cy.get(':nth-child(4) > .group > :nth-child(2) > .ideal-radio').click();

    it('Preencher endereço', );
    cy.get('input[id="streetaddress"]').type('Rua Santa Zelia');

    it('Selecionar país', );
    cy.get('select[id="country"]').select('Brazil');

    it('Preencher cep', );
    cy.get('input[id="zipcode"]').type('04933110');

    it('Preencher cidade', );
    cy.get('input[id="city"]').type('São Paulo');

    it('Selecionar ocupação', );
    cy.get('select[id="occupation"]').select('Employee');

    it('Selecionar modelo', );
    cy.get(':nth-child(5) > .ideal-check').click();

    it('Selecionar Hobbies', );
    cy.get('button[id="nextenterproductdata"]').click();

    it('Preencher data de inicio', );
    cy.get('input[id="startdate"]').type('09/23/2022');

    it('Selecionar soma do seguro', );
    cy.get('select[id="insurancesum"]').select('3.000.000,00');
    
    it('Selecionar seguro de danos', );
    cy.get('select[id="damageinsurance"]').select('Full Coverage');

    it('Selecionar produtos opcionais', );
    cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(1) > .ideal-check').click();

    it('Clicar em next', );
    cy.get('#nextselectpriceoption').click();

    it('Selecionar opção de preço ', );
    cy.get(':nth-child(3) > .ideal-radio').click();

    it('Clicar em next', );
    cy.get('#nextsendquote').click();

    it('Preencher email', );
    cy.get('input[id="email"]').type('kaka_kaykay@hotmail.com');

    it('Preencher telefone', );
    cy.get('input[id="phone"]').type('986322541');

    it('Preencher usuario', );
    cy.get('input[id="username"]').type('teste');

    it('Preencher senha', );
    cy.get('input[id="password"]').type('999999Aa');

    it('Confirmar senha', );
    cy.get('input[id="confirmpassword"]').type('999999Aa');

    it('Clicar em enviar email', );
    cy.get('#sendemail').click();
it( 'trazer mensagem de sucesso'  );
   cy.get('h2').should('be.visible')






















});


});


