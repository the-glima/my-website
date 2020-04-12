import {GistsComponent} from './components/gists/gists.component';
import {IntroComponent} from './components/intro/intro.component';

const COMPONENTS = [GistsComponent, IntroComponent];

export const App = {
  run: (components: any[]) => {
    components.forEach((component: any) => {
      component.render();
    });
  }
};

App.run(COMPONENTS);
