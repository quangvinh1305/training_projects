import { AlphaviecClientPage } from './app.po';

describe('alphaviec-client App', () => {
  let page: AlphaviecClientPage;

  beforeEach(() => {
    page = new AlphaviecClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
