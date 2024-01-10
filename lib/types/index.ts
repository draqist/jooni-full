export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

export interface UserRegistrationData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
export interface LogInData {
  email: string;
  password: string;
}
export interface AppAuth {
  user: string | null; // To be changed to User type
  registrationData: UserRegistrationData | null;
  isLoggedIn: boolean;
  isActivated: boolean;
  loginData: LogInData | null;
}

export type Cart = CartItem[];
