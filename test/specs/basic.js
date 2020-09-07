describe('nicasource.com page', () => {
  before(() => {
    browser.url('/');
  });

  it('should have the right title', () => {
    wdioExpect(browser).toHaveTitle(
      'NicaSource - Partners in building and testing your source code.'
    );
  });

  it('should have the a welcome message', () => {
    const welcomeMessageEl = $('.home-content-tablecell div h3.animate-intro');
    browser.waitUntil(() => welcomeMessageEl.getText().length > 0);
    expect(welcomeMessageEl.getText()).to.equal('WE ARE NICASOURCE.');
  });
});
