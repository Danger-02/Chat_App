import { useState } from "react";
import {create} from "zustand";

type Preferences = {
    soundEnabled: boolean;
    setsoundEnabled: (soundEnabled: boolean) => void;
};

export const usePreferences = create<Preferences>((set) => ({
    soundEnabled: true,
    setsoundEnabled: (soundEnabled: boolean) => set({soundEnabled }),
}));
