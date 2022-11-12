import { createAction } from "@reduxjs/toolkit";
import { Mate } from "../types/mate";
import { actionTypes } from "./action.types";

export const loadActionCreator = createAction<Array<Mate>>(actionTypes.load);
export const addActionCreator = createAction<Mate>(actionTypes.add);
export const updateActionCreator = createAction<Mate>(actionTypes.update);
export const deleteActionCreator = createAction<Mate>(actionTypes.delete);
