import { UseFormReturn } from "react-hook-form";

export const AppName: string = "Organiser";

export interface MenuListProps {
  path: string;
  label: string;
}

export interface CoursesListProps {
  label: string;
  value: string;
}

export enum Position {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
  CENTER = "center",
}

export interface MenuItem {
  text: string;
  key: string;
  url?: string;
  active?: boolean;
  previous?: boolean;
}

export enum ButtonType {
  SUBMIT = "submit",
  BUTTON = "button",
  RESET = "reset",
}

export enum FormType {
  EMAIL = "email",
  TEXT = "text",
  NUMBER = "number",
  TEL = "tel",
  TIME = "time",
  DATE = "date",
  CHECKBOX = "checkbox",
  RADIO = "radio",
}

export interface IconProps {
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  onClick?: () => void;
}

export interface ModalData {
  open: boolean;
  close?: () => void;
}

export enum ModalSize {
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export interface FormInputProps {
  label?: string;
  placeholder?: string;
  title: string;
  handler: UseFormReturn;
  className?: string;
  type?: FormType;
  disabled?: boolean;
  max?: number;
  min?: number;
  readonly?: boolean;
  fileType?: string;
}

export interface SelectListProps {
  label: string;
  value: string;
}

export type FormInputValue = string | number | readonly string[] | undefined;

export interface CustomListProps {
  text: string;
  key: string;
}

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export enum Status {
  SUCCESS = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  SERVER_ERROR = 500,
}
