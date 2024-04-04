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

export interface IRegisterForm {
  fullName: string
  email: string
  emailRepeat: string
  password: string
  passwordRepeat: string
  address: string
  birthday: Date
}

export interface IJwtPayload extends JwtPayload {
  scope: string
}
