import React from "react";
import { StatusBarProps } from 'react-native';

export interface StatusBarCustomProps extends StatusBarProps {
  colorHelper?: string;
  isHelper?: boolean;
}

export declare const StatusBarCustom: React.FC<StatusBarCustomProps>;
