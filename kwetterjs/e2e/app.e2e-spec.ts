import { KwetterjsPage } from './app.po';

describe('kwetterjs App', () => {
  let page: KwetterjsPage;

  beforeEach(() => {
    page = new KwetterjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
