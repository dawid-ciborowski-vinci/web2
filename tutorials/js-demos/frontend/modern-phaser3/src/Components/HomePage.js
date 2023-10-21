//import PhaserGame from "./PhaserGamePage.js";
import { setLayout } from "../utils/render.js";
let homePage = `<p>This frontend provides a configuration that enables Phaser 3 through Webpack.
The base of the webpack configuration comes from <a href="https://github.com/photonstorm/phaser3-project-template">
Phaser 3 Webpack Project Template
</a>.  
</p>
<p>The game presented has been developped based on the <a href="https://blog.ourcade.co/posts/2020/make-first-phaser-3-game-modern-javascript-part1/">
Modern JavaScript Phaser 3 Tutorial : Part 1 to Part 5
</a> and uses Webpack instead of Parcel as module bundler.
<br>The provided webpack configuration files allows, for instance :
<ul>
  <li>to load your assets (scripts, images) directly through Webpack</li>
  <li>to use a development proxy (to redirect to your API)</li>
  <li>to dynamically generate an index.html based on the src/index.html template which will include the bundled modules</li>
  <li>to transpile your modern JavaScript to a version that you want your project to support (.babelrc)</li>
</ul>
</p>

`;

const HomePage = () => {    
  setLayout("Home");
  let page = document.querySelector("#page");
  page.innerHTML = homePage;
};

export default HomePage;
