export interface FileProps {
  uri: string;
  type: string;
  name: string;
}

export interface ItemProps {
  name: string;
  size: string;
  type: string;
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
  address?: string;
}

export interface SignupProps {
  email: string;
  name?: string;
  password: string;
  phone?: string;
  surname?: string;
}
