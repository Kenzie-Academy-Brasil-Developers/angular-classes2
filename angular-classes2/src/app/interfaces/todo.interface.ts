export interface ITodo{
    id: number;
    title: string;
    content: string;
}

export type TTodoCreateFormData = Omit<ITodo, 'id'>;