import { createAction } from "@reduxjs/toolkit";
import { Dessert } from "../types/dessert";
import { actionTypes } from "./action.types";

export const loadActionCreator = createAction<Array<Dessert>>(actionTypes.load);
export const addActionCreator = createAction<Dessert>(actionTypes.add);
export const updateActionCreator = createAction<Dessert>(actionTypes.update);
export const deleteActionCreator = createAction<Dessert>(actionTypes.delete);
