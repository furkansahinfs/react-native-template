import { KeyboardTypeOptions } from "react-native";

export interface FileProps {
  uri: string;
  type: string;
  name: string;
}

export interface GottenFileProps {
  id: number;
  file: string;
  created_at: string;
}

export interface ItemProps {
  name: string;
  size: string;
  type: string;
}

export interface LocationProps {
  id: number;
  name: string;
  parent?: LocationProps;
}

export interface NotificationEntity {
  content: string | undefined | null;
  heading: string | undefined | null;
  id: number | string;
  parking_name: string | undefined | null;
  read: boolean | undefined | null;
  section_name: string | undefined | null;
  sent_at: string | undefined | null;
  sent_by: string | undefined | null;
}

export interface Point {
  lat: number;
  lng: number;
}

export interface MarkerLessDetailedProps {
  count: number;
  id: number;
  point: Point;
}

export interface PositionProps {
  llng: number;
  rlng: number;
  tlat: number;
  blat: number;
}

export interface IResponse {
  data: any;
  error?: string;
  success: boolean;
  status: number;
}

export interface RegionProps {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface ProfileData {
  email?: string;
  id?: number;
  name?: string;
  phone?: string;
  profile_picture?: string;
  surname?: string;
  address?: string;
}

export interface ChangeableProfileData {
  name?: string;
  phone?: string;
  surname?: string;
}

export interface SignupProps {
  email: string;
  name?: string;
  password: string;
  phone?: string;
  surname?: string;
}

export interface DropdownChoice {
  title: string;
  value: string;
  [key: string]: string;
}

export interface AgreementProp {
  name: string;
  placeHolder: string;
  underlinedPlaceholder?: string;
  type: string;
  errors: string;
  rules: Object;
}

export interface InputProp {
  name: string;
  placeHolder: string;
  type: string;
  errors: string;
  rules: Object;
  isSecureTextOnTextInput?: boolean;
  choices?: Array<{ title: string; value: string; extra?: any }>;
  maxDate?: Date;
  hasMultipleChoiceOnSelectbox?: boolean;
  hasSearchOnSelectbox?: boolean;
  keyboardTypeOnTextInput?: KeyboardTypeOptions;
  iconName?: string;
  editable?: boolean;
}
