import { Dessert } from "../types/dessert";
import { RepositoryD } from "./repository";

export class DessertRepository implements RepositoryD<Dessert> {
    url: string;
    constructor(url = "") {
        this.url =
            "https://202211w6ch1saramireyapatricia-production.up.railway.app/desserts";
    }

    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = "HTTPError";
        return error;
    }

    getAllDessert(): Promise<Array<Dessert>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    createDessert(dessert: Partial<Dessert>): Promise<Dessert> {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(dessert),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    updateDessert(partialDessert: Partial<Dessert>): Promise<Dessert> {
        return fetch(`${this.url}/${partialDessert.id}`, {
            method: "PATCH",
            body: JSON.stringify(partialDessert),
            headers: { "Content-type": "application/json" },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }

    deleteDessert(id: number): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) throw this.createError(response);
            })
            .catch((error) => {
                return `${error}` as unknown as void;
            });
    }
}
