import { createContext, type Dispatch, type SetStateAction } from "react";

export type ColorPreference = "system" | "light" | "dark";
export type TextSizePreference = "default" | "large" | "larger";

export interface AccessibilityPreferences {
  colorScheme: ColorPreference;
  textSize: TextSizePreference;
  increasedContrast: boolean;
  reducedMotion: boolean;
  underlinedLinks: boolean;
}

export const DEFAULT_PREFERENCES: AccessibilityPreferences = {
  colorScheme: "system",
  textSize: "default",
  increasedContrast: false,
  reducedMotion: false,
  underlinedLinks: false,
};

export const AccessibilityPreferencesContext = createContext<{
  preferences: AccessibilityPreferences;
  setPreferences: Dispatch<SetStateAction<AccessibilityPreferences>>;
} | null>(null);
