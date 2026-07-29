"use client";

import { Provider } from "@react-spectrum/s2/Provider";
import { useEffect, useState } from "react";
import {
  AccessibilityPreferencesContext,
  DEFAULT_PREFERENCES,
  type AccessibilityPreferences,
  type ColorPreference,
} from "@/components/accessibility/preferences-context";
import {
  ACTIVE_THEME_STORAGE_KEY,
  applyThemeToSite,
  isThemeDraft,
  normalizeThemeDraft,
} from "@/components/design-system/theme-settings";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preferences, setPreferences] =
    useState<AccessibilityPreferences>(DEFAULT_PREFERENCES);
  const [systemColorScheme, setSystemColorScheme] =
    useState<Exclude<ColorPreference, "system">>("light");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const colorQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saved = window.localStorage.getItem("mykmhub-accessibility-preferences");
    const savedTheme = window.localStorage.getItem(ACTIVE_THEME_STORAGE_KEY);
    let isActive = true;

    if (savedTheme) {
      try {
        const parsed: unknown = JSON.parse(savedTheme);
        if (isThemeDraft(parsed)) {
          const normalized = normalizeThemeDraft(parsed);
          window.localStorage.setItem(
            ACTIVE_THEME_STORAGE_KEY,
            JSON.stringify(normalized),
          );
          applyThemeToSite(normalized);
        }
      } catch {
        window.localStorage.removeItem(ACTIVE_THEME_STORAGE_KEY);
      }
    }

    queueMicrotask(() => {
      if (!isActive) {
        return;
      }

      setSystemColorScheme(colorQuery.matches ? "dark" : "light");

      if (saved) {
        try {
          setPreferences({
            ...DEFAULT_PREFERENCES,
            ...(JSON.parse(saved) as Partial<AccessibilityPreferences>),
          });
        } catch {
          window.localStorage.removeItem("mykmhub-accessibility-preferences");
        }
      } else {
        setPreferences((current) => ({
          ...current,
          reducedMotion: motionQuery.matches,
        }));
      }
      setIsHydrated(true);
    });

    const updateColorScheme = (event: MediaQueryListEvent) => {
      setSystemColorScheme(event.matches ? "dark" : "light");
    };
    colorQuery.addEventListener("change", updateColorScheme);
    return () => {
      isActive = false;
      colorQuery.removeEventListener("change", updateColorScheme);
    };
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    const root = document.documentElement;
    root.dataset.textSize = preferences.textSize;
    root.dataset.contrast = preferences.increasedContrast ? "increased" : "standard";
    root.dataset.motion = preferences.reducedMotion ? "reduced" : "standard";
    root.dataset.links = preferences.underlinedLinks ? "underlined" : "standard";
    root.style.colorScheme =
      preferences.colorScheme === "system"
        ? systemColorScheme
        : preferences.colorScheme;

    window.localStorage.setItem(
      "mykmhub-accessibility-preferences",
      JSON.stringify(preferences),
    );
  }, [isHydrated, preferences, systemColorScheme]);

  const colorScheme =
    preferences.colorScheme === "system"
      ? systemColorScheme
      : preferences.colorScheme;

  return (
    <AccessibilityPreferencesContext.Provider
      value={{ preferences, setPreferences }}
    >
      <Provider locale="en-US" colorScheme={colorScheme}>
        {children}
      </Provider>
    </AccessibilityPreferencesContext.Provider>
  );
}
