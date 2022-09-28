import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard} from '../../src/components';
import { product2 } from '../data/products';


describe('Test in productImage', () => {
  test('Should display the component correctly with the custom image', () => {
    const wrapper = renderer.create(
        <ProductImage img='custom-product-image' className='custom-class' />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should display component with the product name', () => { 
      
      const wrapper = renderer.create(
        <ProductCard product={product2}>
            {
                () => (
                    <ProductImage  />
                )
            }
        </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
   })
});
