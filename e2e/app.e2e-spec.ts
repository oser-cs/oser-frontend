import { OserAppPage } from './app.po';

describe('oser-app App', () => {
  let page: OserAppPage;

  beforeEach(() => {
    page = new OserAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
