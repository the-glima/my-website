describe('String Custom IndexOf App', function () {
  beforeEach(function(){
    this.fixture = fixture.load('app.fixture.html');
    this.buttonEl = document.getElementById('run-tests');
    this.resultEl = document.getElementById('result');
    this.stringEl = document.getElementById('string');
    this.fromIndex = document.getElementById('from-index');
    this.searchValueEl = document.getElementById('search-value');
  });

  afterEach(function(){
    fixture.cleanup();
  });

  it('should show index equal 0', function () {
    this.buttonEl.click();

    expect(this.resultEl.innerText).toBe('Success: the index is 0');

    this.searchValueEl.value = '';
    expect(this.resultEl.innerText).toBe('Success: the index is 0');
  });

  it('should match index changing the searchValue value', function () {
    this.searchValueEl.value = 'GREEN';
    this.buttonEl.click();
    expect(this.resultEl.innerText).toBe('Success: the index is 11');

    this.searchValueEl.value = '!@#$%ˆ&*';
    this.buttonEl.click();
    expect(this.resultEl.innerText).toBe('Success: the index is 69');

    this.searchValueEl.value = 'test';
    this.buttonEl.click();
    expect(this.resultEl.innerText).toBe('Success: the index is -1');

    this.searchValueEl.value = 1000;
    this.buttonEl.click();
    expect(this.resultEl.innerText).toBe('Success: the index is -1');
  });

  it('should match index changing fromIndex value', function () {
    this.searchValueEl.value = 'ABC';
    this.fromIndex.value = 0;
    this.buttonEl.click();

    expect(this.resultEl.innerText).toBe('Success: the index is 27');

    this.fromIndex.value = 10;
    this.buttonEl.click();
    expect(this.resultEl.innerText).toBe('Success: the index is 27');

    this.fromIndex.value = 28;
    this.buttonEl.click();
    expect(this.resultEl.innerText).toBe('Success: the index is -1');

    this.fromIndex.value = [];
    this.buttonEl.click();
    expect(this.resultEl.innerText).toBe('Success: the index is 27');
  });
});
