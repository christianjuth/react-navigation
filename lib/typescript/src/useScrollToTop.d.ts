import * as React from 'react';
declare type ScrollOptions = {
    offset?: number;
    animated?: boolean;
};
declare type ScrollableView = {
    scrollToTop(): void;
} | {
    scrollTo(options: ScrollOptions): void;
} | {
    scrollToOffset(options: ScrollOptions): void;
} | {
    scrollResponderScrollTo(options: ScrollOptions): void;
};
declare type ScrollableWrapper = {
    getScrollResponder(): ScrollableView;
} | {
    getNode(): ScrollableView;
} | ScrollableView;
export default function useScrollToTop(ref: React.RefObject<ScrollableWrapper>, offset?: number): void;
export {};
