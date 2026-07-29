"use client";

import { Picker, PickerItem } from "@react-spectrum/s2/Picker";
import { Switch } from "@react-spectrum/s2/Switch";
import { useContext } from "react";
import {
  AccessibilityPreferencesContext,
  type ColorPreference,
  type TextSizePreference,
} from "./preferences-context";

export function PreferencesMenu() {
  const context = useContext(AccessibilityPreferencesContext);

  if (!context) {
    return null;
  }

  const { preferences, setPreferences } = context;

  return (
    <details className="preferences">
      <summary>Accessibility</summary>
      <div className="preferences-panel">
        <div>
          <h2>Accessibility preferences</h2>
          <p>Adjust this browser’s experience. The accessible default remains active.</p>
        </div>

        <Picker
          label="Appearance"
          selectedKey={preferences.colorScheme}
          onSelectionChange={(key) =>
            setPreferences((current) => ({
              ...current,
              colorScheme: key as ColorPreference,
            }))
          }
        >
          <PickerItem id="system">Use system setting</PickerItem>
          <PickerItem id="light">Light</PickerItem>
          <PickerItem id="dark">Dark</PickerItem>
        </Picker>

        <Picker
          label="Text size"
          selectedKey={preferences.textSize}
          onSelectionChange={(key) =>
            setPreferences((current) => ({
              ...current,
              textSize: key as TextSizePreference,
            }))
          }
        >
          <PickerItem id="default">Default</PickerItem>
          <PickerItem id="large">Large</PickerItem>
          <PickerItem id="larger">Larger</PickerItem>
        </Picker>

        <div className="preference-switches">
          <Switch
            isSelected={preferences.increasedContrast}
            onChange={(isSelected) =>
              setPreferences((current) => ({
                ...current,
                increasedContrast: isSelected,
              }))
            }
          >
            Increased contrast
          </Switch>
          <Switch
            isSelected={preferences.reducedMotion}
            onChange={(isSelected) =>
              setPreferences((current) => ({
                ...current,
                reducedMotion: isSelected,
              }))
            }
          >
            Reduced motion
          </Switch>
          <Switch
            isSelected={preferences.underlinedLinks}
            onChange={(isSelected) =>
              setPreferences((current) => ({
                ...current,
                underlinedLinks: isSelected,
              }))
            }
          >
            Always underline links
          </Switch>
        </div>
      </div>
    </details>
  );
}
