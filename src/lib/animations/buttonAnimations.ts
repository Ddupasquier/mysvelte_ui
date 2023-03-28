export const createAndAnimateCircle = (
    container: HTMLElement,
    animated: boolean,
    event: MouseEvent
) => {
    if (animated) {
        const circle = document.createElement("span");
        circle.classList.add("btn-circle");

        // Calculate the click coordinates relative to the container
        const offsetX = event.clientX - container.getBoundingClientRect().left;
        const offsetY = event.clientY - container.getBoundingClientRect().top;

        // Set the circle's position to the click coordinates
        circle.style.left = offsetX + "px";
        circle.style.top = offsetY + "px";
        circle.style.background = "rgba(255, 255, 255, 0.5)";
        container.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 300);
    }
};