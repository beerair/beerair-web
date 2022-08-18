const defaultSearchHistories = ['제주 위트 에일', '클라우드', '카스', '기네스', '제주 펠롱 에일'];

context('Search Page Test', () => {
  beforeEach(() => {
    const recoilSearchHistoriesKey = 'persist:recoil@search-histories';
    localStorage.setItem(recoilSearchHistoriesKey, JSON.stringify(defaultSearchHistories));

    cy.visit('/search');
  });

  describe('Search Item Test', () => {
    it('Check Search Item', () => {
      cy.get('[data-cy=search-item]')
        .should('have.length', 5)
        .each(($searchItem, i) => {
          cy.wrap($searchItem)
            .find('[data-cy=search-item-text]')
            .should('have.text', defaultSearchHistories[i]);
        });
    });

    it('Check Highlighting Text', () => {
      const highlightingIndexs = [0, 4];

      cy.get('[data-cy=search-page-input]').type('에일');

      cy.get('[data-cy=search-item]')
        .should('have.length', 5)
        .each(($searchItem, i) => {
          if (highlightingIndexs.includes(i)) {
            cy.wrap($searchItem)
              .find('[data-cy=search-item-text] > strong')
              .should('have.text', '에일');
          }
        });
    });

    it('Add Search Item', () => {
      // TODO: 추후 맥주 목록 페이지로 라우팅 기능이 추가되면 테스트 작성 예정
    });

    it('Remove Search Text', () => {
      cy.get('[data-cy=search-page-input]').type('에일');
      cy.get('[data-cy=search-page-input]').should('have.value', '에일');

      cy.get('[data-cy=search-page-input-reset-btn]').click();
      cy.get('[data-cy=search-page-input]').should('have.value', '');
    });

    it('Remove Search Item', () => {
      const removeIndexs = [1, 2];
      const restedHistories = [...defaultSearchHistories].filter(
        (_, i) => !removeIndexs.includes(i),
      );

      cy.get('[data-cy=search-item]')
        .should('have.length', 5)
        .each(($searchItem, i) => {
          if (removeIndexs.includes(i)) {
            cy.wrap($searchItem).find('[data-cy=search-item-delete-btn]').click();
          }
        });

      cy.get('[data-cy=search-item]')
        .should('have.length', 3)
        .each(($searchItem, i) => {
          cy.wrap($searchItem)
            .find('[data-cy=search-item-text]')
            .should('have.text', restedHistories[i]);
        });
    });
  });
});

export {};
