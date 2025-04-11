const toggleBtn = document.getElementById("toggleBtn");
const foldBox = document.getElementById("foldBox");
let isOpen = false;
let animating = false;

toggleBtn.addEventListener("click", () => {
    if (animating) return; // undgå trælse spam-clicks

    animating = true;

    if (!isOpen) {
        // Fold ud
        foldBox.style.display = "block";
        const targetHeight = foldBox.scrollHeight;

        gsap.fromTo(
            foldBox,
            { height: 0 },
            {
                height: targetHeight,
                duration: 0.8,
                ease: "power1",
                onComplete: () => {
                    foldBox.style.height = "auto"; //reset til auto, så den tilpasser sig ved indhold.
                    isOpen = true;
                    animating = false;

                },
            }

        );
    } else {
        // Fold ind
        const currentHeight = foldBox.scrollHeight;

        gsap.fromTo(
            foldBox,
            { height: currentHeight },
            {
                height: 0,
                duration: 0.8,
                ease: "power1",
                onComplete: () => {
                    foldBox.style.display = "none";
                    isOpen = false;
                    animating = false;

                },

            }
        );
    }
});