import { Component } from 'domr-framework';
import imageLoadPromise from '../utils/image-load-promise';

function setScale(target, scale, x, y) {
  const thisTarget = target;
  const transform = thisTarget.style['transform-origin'] || '';
  thisTarget.style.transform = `scale(${scale})`;
  
  if (x && y) {
    thisTarget.style['transform-origin'] = `${x}px ${y}px`;
  }

  if (transform && transform.trim() !== '') {
    console.log('called');
  }
}

const testWebP = () => {
  const canvas = typeof document === 'object' ?
  document.createElement('canvas') : {};
  canvas.width = canvas.height = 1;
  return canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false;
};

export default class extends Component {
  constructor(name, folder, isWebP = true) {
    super();
    this.name = name;
    this.folder = folder;
    this.isWebP = isWebP;
    this.isChrome = testWebP();
    this.format = this.isWebP && this.isChrome ? 'webp' : 'jpg';
    this.src = `${this.folder}/${this.name}.${this.format}`;
  }

  Markup() {
    const src = this.src;

    return `
      <div class="image" style="background-image: url(${src});"></div>
    `;
  }

  AfterRenderDone() {
    const thisSelf = this.GetThisComponent();
    const src = this.src;

    imageLoadPromise(src)
    .then((data) => {
      const body = document.querySelector('body');
      const img = data.path[0];
      const zoomPositions = 6;
      const scaleStepValue = (img.naturalHeight / body.clientHeight);
      let zoomStepValue = scaleStepValue / zoomPositions.toFixed(5);
      zoomStepValue = zoomStepValue.toFixed(5);
      let curruntZoomPosition = 1;
      let scale = 1;
      let mouseX;
      let mouseY;

      addEventListener('wheel', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (e.deltaY < 0) {
          if (curruntZoomPosition < zoomPositions) {
            curruntZoomPosition += 1;
            scale = curruntZoomPosition * zoomStepValue;
            scale = scale.toFixed(2);

            setScale(thisSelf, scale, mouseX, mouseY);
          }
        } else if (e.deltaY > 0) {
          if (curruntZoomPosition > 1) {
            curruntZoomPosition -= 1;
            scale = curruntZoomPosition * zoomStepValue;
            scale = scale.toFixed(2);

            if (curruntZoomPosition === 1) {
              scale = 1;
            }

            setScale(thisSelf, scale);
          }
        }
      });
    })
    .catch(() => {
      console.log('error');
    });
  }
}
