import React from "react";

import { Tailwind } from "@react-email/tailwind";

interface ITailiwindConfigProps {
  children: React.ReactNode
}

export function TailwindConfig({ children }: ITailiwindConfigProps) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              foodiary: {
                green: '#64A30D',
                gray: {
                  400: '#E4E4E7',
                  600: '#A1A1AA',
                }
              },
            }
          },
        }
      }}>
      {children}
    </Tailwind>
  )
}
