import { Image } from './widgets';

const EXAMPLE_IMAGE_WIDGET_OPTIONS = {
    src: 'https://assets-global.website-files.com/5aa16619a722600001c19c3f/5ad4d8b3d3f2b047b6e10cde_cs-hero-adiparley2017.jpg',
    alt: 'Sneakers and phone displaying a website. The text reads "We are working with Parley to transform marine plastic pollution into high performance sportswear. Spinning the problem into a solution. The threat into a thread. #ADIDASPARLEY"',
};

const App = () => (
    <Image options={EXAMPLE_IMAGE_WIDGET_OPTIONS} />
);

export default App;
