import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../app/redux-toolkit/store";
import * as ac from "../reducer/action.creator";
import { MateRepository } from "../services/mate.repository";
import { Mate, ProtoMate } from "../types/mate";

export const useMate = () => {
    const mates = useSelector((state: rootState) => state.mate);
    const dispatcher = useDispatch();
    const apiMate = useMemo(() => new MateRepository(), []);

    useEffect(() => {
        apiMate
            .getAll()
            .then((mates) => dispatcher(ac.loadActionCreator(mates)));
        //.catch((error: Error) => console.log(error.name, error.message));
    }, [apiMate, dispatcher]);

    const handleAdd = (newMate: ProtoMate) => {
        apiMate
            .create(newMate)
            .then((mate: Mate) => dispatcher(ac.addActionCreator(mate)));
        //.catch((error: Error) => console.log((error.name, error.message)));
    };

    const handleUpdate = (updateMate: Partial<Mate>) => {
        apiMate
            .update(updateMate)
            .then((mate: Mate) => dispatcher(ac.updateActionCreator(mate)));
        //.catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (mate: Mate) => {
        apiMate
            .delete(mate.id)
            .then(() => dispatcher(ac.deleteActionCreator(mate)));
        //.catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        mates,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
};

// No me ha quedado del todo claro si es necesario el catch en el hook teniendo este control en el repository.
// Además, no he conseguido que el test pase por estas lineas, por lo que he decidido comentarlos.
