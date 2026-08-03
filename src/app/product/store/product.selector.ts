// product.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from 'src/app/models/product';

// 1. Grab JUST the 'products' slice registered in StoreModule.forFeature('products', ...)
export const selectProducts = createFeatureSelector<Product[]>('products');

// 2. Derived selector to compute the array size/length
export const selectProductsCount = createSelector(
  selectProducts,
  (products: Product[]) => products.length
);

export const selectCartTotalPrice = createSelector(
  selectProducts,
  (products: Product[]) => products.reduce((total, item) => total + item.price, 0)
);