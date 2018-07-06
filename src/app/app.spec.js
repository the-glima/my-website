describe('App', function () {
  beforeEach(function(){
    this.fixture = fixture.load('app.fixture.html');
    this.buttonEl = fixture.el.querySelector('button');
    const buttonTests = document.getElementById('run-tests');

    console.log(fixture);
  });

  afterEach(function(){
    fixture.cleanup();
  });

  it('should return the index of a certain value', function () {
    var y = document.getElementById('result');
    y.click();

    expect(y).not.toBeNull();
  });
});
