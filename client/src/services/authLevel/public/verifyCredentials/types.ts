export interface IResponseFetchVerifyCredentials {
  message: string;
  isAuthenticated: boolean;
}

export interface IServiceVerifyCredentials
  extends IResponseFetchVerifyCredentials {}
