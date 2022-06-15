import React from "react";
import { styled, css } from "@stitches/react";
import type * as Stitches from "@stitches/react";

//Types for MyButton component props
type MyButtonTypes = Stitches.VariantProps<typeof MyButtonTypes>;

const MyButtonTypes = css("button", {
  variants: {
    size: {
      small: {
        fontSize: 24,
        padding: 20,
      },
      large: {
        fontSize: 64,
        padding: 16,
      },
    },
    bgColor: {
      yellow: {
        backgroundColor: "yellow",
      },
      red: {
        backgroundColor: "red",
      },
      black: {
        backgroundColor: "black",
      },
      purple: {
        backgroundColor: "purple",
      },
      orange: {
        backgroundColor: "orange",
      },
      green: {
        backgroundColor: "green",
      },
    },
    color: {
      black: {
        color: "black",
      },
      white: {
        color: "white",
      },
    },
  },
});

export function MyButton({ size, bgColor, color }: MyButtonTypes) {
  // Component to Renderize
  const Button = styled("button", {
    padding: "0.75rem",
    borderRadius: "0.2rem",
    border: "1px solid #fff",
    color: "#fff",

    variants: {
      size: {
        small: {
          fontSize: 24,
          padding: 20,
        },
        large: {
          fontSize: 64,
          padding: 16,
        },
      },
      bgColor: {
        yellow: {
          backgroundColor: "yellow",
        },
        red: {
          backgroundColor: "red",
        },
        black: {
          backgroundColor: "black",
        },
        purple: {
          backgroundColor: "purple",
        },
        orange: {
          backgroundColor: "orange",
        },
        green: {
          backgroundColor: "green",
        },
      },
      color: {
        black: {
          color: "black",
        },
        white: {
          color: "white",
        },
      },
    },
    default: {
      backgroundColor: "white",
    },
  });

  return (
    <Button size={size} bgColor={bgColor} color={color}>
      Button
    </Button>
  );
}
