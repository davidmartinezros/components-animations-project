import { AnimationsProjectPage } from './app.po';

describe('animations-project App', function() {
  let page: AnimationsProjectPage;

  beforeEach(() => {
    page = new AnimationsProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
