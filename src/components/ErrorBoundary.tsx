import React from "react";

type Props = { children: React.ReactNode; fallback?: React.ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        this.props.fallback ?? (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
            <p className="text-lg font-semibold">Something went wrong</p>
            <p className="text-sm text-muted-foreground">
              {this.state.error.message}
            </p>
            <button
              className="text-sm underline"
              onClick={() => this.setState({ error: null })}
            >
              Try again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
