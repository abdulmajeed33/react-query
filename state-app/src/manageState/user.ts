import { createGlobalState } from '.';

type UserState = {
  name: string;
  isSignedIn: boolean;
};

export const useUserState = createGlobalState<UserState>('user', {
  name: 'Abdul Majeed',
  isSignedIn: true,
});