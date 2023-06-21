export const createLoadObserver = (handler: () => void) => {
    let waiting = 0;

    const onload = (event: Event) => {
        const img = event.target as HTMLImageElement;
        if (img.complete) {
            handler();
            return;
        }

        waiting++;
        img.addEventListener('load', () => {
            waiting--;
            if (waiting === 0) {
                handler();
            }
        });
    };

    return onload;
};
