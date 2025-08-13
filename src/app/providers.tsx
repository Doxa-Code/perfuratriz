"use client";
import { Flowbite } from "flowbite-react";
import customTheme from "@/lib/theme/custom-theme";
import { CustomizerContextProvider } from "@/app/context/customizer-context";
import NextTopLoader from "nextjs-toploader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <Flowbite theme={{ theme: customTheme }}>
        <CustomizerContextProvider>
          <NextTopLoader color="var(--color-primary)" />
          <Toaster />
          {children}
        </CustomizerContextProvider>
      </Flowbite>
    </QueryClientProvider>
  );
}
