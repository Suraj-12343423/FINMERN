/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import FlexBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";

type Props = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  sideText: string;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();

  return (
    <FlexBetween color={palette.grey[400]} marginRight="2px 1rem 0 3rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem" pl="0.5rem" pt="0.3rem">
            {title}
          </Typography>
          <Typography variant="h6" pl="0.5rem">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]} pr="0.4rem">
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
