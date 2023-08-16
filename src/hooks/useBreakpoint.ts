import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export enum ScreenSize {
    Xl,
    Lg,
    Md,
    Sm,
    Xs
}

export type BreakpointInfo = {
    isXs: boolean;
    isSm: boolean;
    isMd: boolean;
    isLg: boolean;
    isXl: boolean;
    active: ScreenSize;
}

export function useBreakpoint(): BreakpointInfo {
    const { breakpoints } = useTheme();

    const breakpointInfo: BreakpointInfo = {
        isXs: useMediaQuery(breakpoints.between(breakpoints.values.xs, breakpoints.values.sm)),
        isSm: useMediaQuery(breakpoints.between(breakpoints.values.sm, breakpoints.values.md)),
        isMd: useMediaQuery(breakpoints.between(breakpoints.values.md, breakpoints.values.lg)),
        isLg: useMediaQuery(breakpoints.between(breakpoints.values.lg, breakpoints.values.xl)),
        isXl: useMediaQuery(breakpoints.up(breakpoints.values.xl)),
        active: ScreenSize.Xs
    };

    if (breakpointInfo.isXl) {
        breakpointInfo.active = ScreenSize.Xl;
    }
    if (breakpointInfo.isLg) {
        breakpointInfo.active = ScreenSize.Lg;
    }
    if (breakpointInfo.isMd) {
        breakpointInfo.active = ScreenSize.Md;
    }
    if (breakpointInfo.isSm) {
        breakpointInfo.active = ScreenSize.Sm;
    }
    if (breakpointInfo.isXs) {
        breakpointInfo.active = ScreenSize.Xs;
    }

    return breakpointInfo;
}