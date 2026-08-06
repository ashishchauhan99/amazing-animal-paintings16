import { createReducer, on } from '@ngrx/store';
import { AddProduct, ClearProduct, RemoveProduct } from './product.action';
import { Product } from 'src/app/features/product/model/product';

export const initialState: Product[] = [];

export const ProductReducer = createReducer(
    initialState,
    // 'state' IS the Product[] array directly
    on(AddProduct, (state, newProduct) => [...state, newProduct]),

    // Handle RemoveProduct action
    on(RemoveProduct, (state, { productId }) => state.filter(p => p.id !== productId)),

    //Clear products
    on(ClearProduct, (state) => []),
)

// youu could also do the following if you want to keep Product[] in an wrapper

/**
 * 
 * // 1. Initial State is directly a Product[] array
export const initialState: Product[] = [];

// 2. The Reducer Function
export const productReducer = createReducer(
  initialState,

  // Handle AddBook action
  // 'state' IS the Product[] array directly
  on(AddBook, (state, newProduct) => [...state, newProduct]),

  // Handle RemoveBook action
  on(RemoveBook, (state, { productId }) => state.filter(p => p.id !== productId))
);
 * 
 */
