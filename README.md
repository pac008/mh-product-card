# MH-Product-Card

Este es un paquete de pruebas de despliegue en npm


### Miguel Herrera


## Ejemplo

```
import {
import ProductCard from '../components';
import { ProductImage, ProductTitle, ProductButtons }  '../components';
```

```
<ProductCard 
    product={product} 
    initialValues={{
        count: 3,
        maxCount: 10
    }}
    >
        {
            ({reset, count, increaseBy, isMaxCountReached}) => (
                <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons/>
                </>
            )
        }
</ProductCard>
```