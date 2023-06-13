import { BaseUserInfo } from "./base"

export interface LoginBody extends BaseUserInfo {
  email: string
}

export interface ResetPasswordBody extends BaseUserInfo {}

export interface FirstAccessBody extends BaseUserInfo {}
