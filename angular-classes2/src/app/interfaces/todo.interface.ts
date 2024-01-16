export interface ITodo{
    id: string;
    title: string;
    content: string;
}

export type TTodoCreateFormData = Omit<ITodo, 'id'>;