export type TypeModalKey = "login" | "confirm" | null;

export interface IModal {
  key: TypeModalKey;
  func?: () => void;
}
