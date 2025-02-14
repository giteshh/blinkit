import {UserInterface} from './userInterface';

export interface AuthResponseInterface {
  user: UserInterface;
  access: string;
  refresh: string;
}
