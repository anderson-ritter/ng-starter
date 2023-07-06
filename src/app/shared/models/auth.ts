export interface Token {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

export interface UserInfo {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  role: string;
  preferred_username: string;
  email: string;
}
