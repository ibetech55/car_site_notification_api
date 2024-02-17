export interface EmailAccessCodePrivateUserDto {
  user_id: string;
  first_name: string;
  access_code: string;
  last_name: string;
  email: string;
  type: string;
  access_code_token: string;
}
