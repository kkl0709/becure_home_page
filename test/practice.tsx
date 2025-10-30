import { useEffect } from "react";
useEffect(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(
            (entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    target.style.opacity = "1";
                    target.style.transform = "translateY(0)";
                }
            }
        )
    }, observerOptions);
}, []);