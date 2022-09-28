import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard} from '../../src/components';
import { product1 } from '../data/products';


describe('Test in productTitle', () => {
  test('Should display the component correctly with the custom title', () => {
    const wrapper = renderer.create(
        <ProductTitle title='Custom Product' className='custom-class' />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should display component with the product name', () => { 
      
      const wrapper = renderer.create(
        <ProductCard product={product1}>
            {
                () => (
                    <ProductTitle />
                )
            }
        </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
   })
});
