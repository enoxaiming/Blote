import { BlotePage } from './app.po';

describe('blote App', () => {
  let page: BlotePage;

  beforeEach(() => {
    page = new BlotePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
