import { Mate } from "../types/mate";
import { Repository } from "./repository";

export class MateRepository implements Repository<Mate> {
    url: string;
    constructor(url = "") {
        this.url = url
            ? url
            : "https://202211w6ch1saramireyapatricia-production.up.railway.app/mates";
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = "HTTPError";
        return error;
    }

    getAll(): Promise<Array<Mate>> {
        return fetch(this.url).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    create(mate: Partial<Mate>): Promise<Mate> {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(mate),
            headers: {
                "Content-type": "application/json",
            },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    update(partialMate: Partial<Mate>): Promise<Mate> {
        return fetch(`${this.url}/${partialMate.id}`, {
            method: "PATCH",
            body: JSON.stringify(partialMate),
            headers: { "Content-type": "application/json" },
        }).then((response) => {
            if (response.ok) return response.json();
            throw this.createError(response);
        });
    }

    delete(id: number): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: "DELETE",
        }).then((response) => {
            if (!response.ok) throw this.createError(response);
        });
    }
}
