// product.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from 'src/app/features/product/model/product';


// 1. Grab JUST the 'products' slice registered in StoreModule.forFeature('products', ...)
export const selectProducts = createFeatureSelector<Product[]>('products');

// 2. Derived selector to compute the array size/length
export const selectProductsCount = createSelector(
  selectProducts,
  (products: Product[]) => products ? products.length : 0
);

export const selectCartTotalPrice = createSelector(
  selectProducts,
  (products: Product[]) => products ? products.reduce((total, item) => total + item.price, 0) : 0
);


/** 
// 1. Grab ProductState instead of the 'products' directly from the global store
export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state ? state.products : []
);

export const selectProductsCount = createSelector(
  selectProductState,
  (state: ProductState) => (state && state.products) ? state.products.length : 0
);

export const selectCartTotalPrice = createSelector(
  selectProductState,
  (state: ProductState) => (state && state.products) ? state.products.reduce((total, item) => total + item.price, 0) : 0
);
*/