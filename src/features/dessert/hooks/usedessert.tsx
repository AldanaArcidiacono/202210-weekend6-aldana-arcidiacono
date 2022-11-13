import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../infrastructure/app/redux-toolkit/store";
import * as ac from "../reducer/action.creator";
import { DessertRepository } from "../services/dessert.repository";
import { Dessert, ProtoDessert } from "../types/dessert";

export const useDessert = () => {
    const desserts = useSelector((state: rootState) => state.dessert);
    const dispatcher = useDispatch();
    const apiDessert = useMemo(() => new DessertRepository(), []);

    useEffect(() => {
        apiDessert
            .getAllDessert()
            .then((desserts) => dispatcher(ac.loadActionCreator(desserts)));
    }, [apiDessert, dispatcher]);

    const handleAdd = (newDessert: ProtoDessert) => {
        apiDessert
            .createDessert(newDessert)
            .then((dessert: Dessert) =>
                dispatcher(ac.addActionCreator(dessert))
            );
    };

    const handleUpdate = (updateDessert: Partial<Dessert>) => {
        apiDessert
            .updateDessert(updateDessert)
            .then((dessert: Dessert) =>
                dispatcher(ac.updateActionCreator(dessert))
            );
    };

    const handleDelete = (dessert: Dessert) => {
        apiDessert
            .deleteDessert(dessert.id)
            .then(() => dispatcher(ac.deleteActionCreator(dessert)));
    };

    return {
        desserts,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};
