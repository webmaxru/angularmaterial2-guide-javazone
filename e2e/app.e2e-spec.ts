import { Angularmaterial2GuideJavazonePage } from './app.po';

describe('angularmaterial2-guide-javazone App', function() {
  let page: Angularmaterial2GuideJavazonePage;

  beforeEach(() => {
    page = new Angularmaterial2GuideJavazonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
