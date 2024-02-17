export interface EmailAccessCodeDealershipDto {
    user_id: string;
    dealership_name: string;
    email: string;
    access_code: string;
    type: string;
    access_code_token: string;
}