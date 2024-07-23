import { FluidActionType } from './fluid-action-type.enum';

export interface FluidAction {
  action?: Function;
  label: string;
  type?: FluidActionType;
  selected?: boolean;
  route?: string;
  disabled?: boolean;
}
