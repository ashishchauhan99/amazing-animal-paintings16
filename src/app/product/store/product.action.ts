import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product";

export const AddProduct = createAction('[Product] Add Product', props<Product>());

export const RemoveProduct = createAction('[Product] Remove Product', props<{productId: number}>());