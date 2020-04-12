import {App} from '../../src/app';

describe('App', () => {
  it('run: should run render method of given components', () => {
    const ComponentFoo = {render: jest.fn(), private: jest.fn()};
    const ComponentBar = {render: jest.fn()};
    const ComponentZoo = {render: jest.fn()};

    App.run([ComponentFoo, ComponentBar]);

    expect(ComponentFoo.render).toHaveBeenCalledTimes(1);
    expect(ComponentFoo.private).toHaveBeenCalledTimes(0);
    expect(ComponentBar.render).toHaveBeenCalledTimes(1);
    expect(ComponentZoo.render).toHaveBeenCalledTimes(0);
  });
});
