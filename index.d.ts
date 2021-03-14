import React, { ReactNode } from "react";
import { StatusBarProps } from 'react-native';

declare interface StatusBarCustomProps extends StatusBarProps {
  colorHelper?: string;
  children: ReactNode;
  isHelper?: boolean;
}

declare const StatusBarCustom: React.FC<StatusBarCustomProps>;

export default StatusBarCustom;
