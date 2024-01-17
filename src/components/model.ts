export interface INote {
    id?: number;
    title: string;
    body: string;
    createdAt?: string;
    updatedAt?:string;
}

export const baseUrl = 'http://localhost:5000/api/'