import { Component } from 'domr-framework';
import Image from '../components/Image';

export default class extends Component {
  constructor() {
    super();
  }

  Markup() {
    const image = new Image('1', 'img', true);

    return `
      <div class="home">
        ${image.Render()}
      </div>
    `;
  }
}
