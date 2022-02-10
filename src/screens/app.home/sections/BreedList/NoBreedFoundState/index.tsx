/**
 * Module Dependencies
 */
import Figure from 'react-bootstrap/Figure';

/**
 * Empty State. Displayed when there are no breeds on the store.
 * @parent BreedList
 *
 */
function NoBreedFoundState() {
  return (
    <>
      <Figure>
        <Figure.Image
          width={600}
          height={600}
          alt="171x180"
          src="https://e7.pngegg.com/pngimages/598/636/png-clipart-short-coated-white-and-brown-cat-grumpy-cat-snowshoe-cat-manx-cat-cat-face-miscellaneous-cat-like-mammal.png"
        />
        <Figure.Caption className="text-center">
          No cats found. <br />
          Here is a picture of a grumpy cat instead.
        </Figure.Caption>
      </Figure>
    </>
  );
}

export default NoBreedFoundState;
