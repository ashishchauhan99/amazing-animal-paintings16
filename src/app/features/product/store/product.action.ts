import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/features/product/model/product";

export const AddProduct = createAction('[Product] Add Product', props<Product>());

export const RemoveProduct = createAction('[Product] Remove Product', props<{productId: number}>());

export const ClearProduct = createAction('[Product] Clear Product');