"use client";

import { Provider } from "@react-spectrum/s2/Provider";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider locale="en-US" background="base">
      {children}
    </Provider>
  );
}