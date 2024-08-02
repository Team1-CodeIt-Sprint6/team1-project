import { atom } from 'jotai';

import { User } from '@/types/userTypes';

export const isLoggedInAtom = atom(false);
export const userAtom = atom<User | null>(null);
