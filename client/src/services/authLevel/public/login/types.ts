export interface IResponseFetchLogin {
  message: string;
}

export interface IServiceLogin extends IResponseFetchLogin {
  isLogged: boolean;
}
