import { JwtPayload } from "jwt-decode"

export interface ILoginCredentials {
    authority: string | undefined
    user: string | undefined
    jwtToken: string
}

export interface ILoginForm {
  email: string
  password: string
}

export interface IJwtPayload extends JwtPayload {
  scope: string
}
