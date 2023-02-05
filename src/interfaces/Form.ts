export interface FormData {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  streetAddress: string;
  streetNumber: string;
  city: string;
  postCode: string;
}

export interface FormConfimationProps {
  clickHandler: () => void;
  data: FormData;
}
