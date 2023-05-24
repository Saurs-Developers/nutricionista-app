export interface LoginBody {
  email: string
  password: string
}

export interface ResetPasswordBody {
  password: string
}

export interface FirstAccessBody {
  password: string
}
