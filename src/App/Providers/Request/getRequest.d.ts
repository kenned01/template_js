export interface i_params {
    uri: string;
    id?: number;
    data?: Record<string, any> | null;
    headers?: Record<string, any> | null;
    params? : Record<string, any> | null;
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT';
  }
  
  export type i_initial = {
    data: any | null,
    error: any | null,
    isFailed: boolean,
    isLoading: boolean,
  }
  
  export type i_request = {
    event: 'GET' | 'GETONE' | 'POST' | 'DELETE' | 'PUT';
    config: i_params;
  }
  
  export type i_return<T> = {
    data: T | null;
    error: Error | null;
    isFailed: boolean;
    isLoading: boolean;
  }
  
  export const InitialState : i_initial
  
  export function getRequest<T>({
    event,
    config
  } : i_request
  ) : Promise<i_return<T>>