import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AlertCircle, RefreshCw } from "lucide-react";

type Props = { children: React.ReactNode; fallback?: React.ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    const { error } = this.state;

    if (error && this.props.fallback) {
      return this.props.fallback;
    }

    const tryAgain = () => this.setState({ error: null });

    return (
      <>
        {!error && this.props.children}
        <Dialog.Root open={!!error} onOpenChange={() => {}}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 duration-200" />
            <Dialog.Content
              role="alertdialog"
              aria-describedby="error-desc"
              onInteractOutside={(e) => e.preventDefault()}
              onEscapeKeyDown={(e) => e.preventDefault()}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-200 focus:outline-none"
            >
              <div className="flex flex-col gap-5 rounded-[var(--radius)] border border-border bg-card p-6 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 shrink-0 rounded-full bg-destructive/10 p-2">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Dialog.Title className="text-base font-semibold text-card-foreground leading-tight">
                      Something went wrong
                    </Dialog.Title>
                    <Dialog.Description
                      id="error-desc"
                      className="text-sm text-muted-foreground"
                    >
                      An unexpected error occurred. Try again or reload the page
                      if the problem persists.
                    </Dialog.Description>
                  </div>
                </div>

                {error && (
                  <pre className="overflow-x-auto whitespace-pre-wrap break-all rounded-lg border border-border bg-muted px-4 py-3 font-mono text-xs text-foreground">
                    {error.message}
                  </pre>
                )}

                <button
                  autoFocus
                  onClick={tryAgain}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Try again
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </>
    );
  }
}
