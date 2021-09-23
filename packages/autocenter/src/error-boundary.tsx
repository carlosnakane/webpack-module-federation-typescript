import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
    errorMessage: string;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <span>{this.props.errorMessage}</span>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;