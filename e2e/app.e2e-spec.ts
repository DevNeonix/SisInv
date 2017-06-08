import { SisInvPage } from './app.po';

describe('sis-inv App', () => {
  let page: SisInvPage;

  beforeEach(() => {
    page = new SisInvPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
