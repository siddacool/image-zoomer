import HomePageContainer from '../containers/HomePageContainer';

export default function () {
  const homeContainer = new HomePageContainer();

  const wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = homeContainer.Render();
}
