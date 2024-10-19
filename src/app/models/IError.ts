export interface Error {
    label: string,
    code?: string
}

export interface Errors {
    error: Error | Error[],
}

export interface AppError {
    message: string,
    onError: boolean,
}
