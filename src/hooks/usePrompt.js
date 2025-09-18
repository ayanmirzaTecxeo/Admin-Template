import { useContext, useCallback, useEffect } from 'react';
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';

function useBlocker(blocker, when = true, isSubmitSuccessfully = false) {
  const { navigator } = useContext(NavigationContext);

  useEffect(() => {
    if (!when || isSubmitSuccessfully) return;

    const unblock = navigator.block((tx) => {
      const autoUnblockingTx = {
        ...tx,
        retry() {
          unblock();
          tx.retry();
        },
      };

      blocker(autoUnblockingTx);
    });

    return unblock;
  }, [navigator, blocker, when, isSubmitSuccessfully]);
}
export default function usePrompt(message, when = true, isSubmitSuccessfully = false) {
  const blocker = useCallback(
    (tx) => {
      if (window.confirm(message)) tx.retry();
    },
    [message]
  );

  useBlocker(blocker, when, isSubmitSuccessfully);
}
