declare module "react-vertical-timeline-component" {
  import type { CSSProperties, FC, ReactNode } from "react";

  export interface VerticalTimelineProps {
    animate?: boolean;
    children?: ReactNode;
    className?: string;
    layout?: "1-column" | "1-column-left" | "1-column-right" | "2-columns";
    lineColor?: string;
  }

  export interface VerticalTimelineElementProps {
    children?: ReactNode;
    id?: string;
    className?: string;
    date?: string;
    dateClassName?: string;
    iconClassName?: string;
    iconOnClick?: () => void;
    iconStyle?: CSSProperties;
    icon?: ReactNode;
    intersectionObserverProps?: Record<string, unknown>;
    onTimelineElementClick?: () => void;
    position?: string;
    style?: CSSProperties;
    textClassName?: string;
    contentStyle?: CSSProperties;
    contentArrowStyle?: CSSProperties;
    visible?: boolean;
  }

  export const VerticalTimeline: FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: FC<VerticalTimelineElementProps>;
}
