export interface UserInterface {
  "message": "User register successfully",
  "error": boolean,
  "success": boolean,
  "data": {
    "name": string,
    "email": string,
    "password": string,
    "avatar": string,
    "mobile": string,
    "refresh_token": string,
    "verify_email": false,
    "last_login_date": string,
    "status": string,
    "address_details": [],
    "shopping_cart": [],
    "orderHistory": [],
    "forgot_password_otp": string,
    "forgot_password_expiry": string,
    "role": string,
    "_id": string,
    "createdAt": string,
    "updatedAt": string,
    "__v": number
  }
}
