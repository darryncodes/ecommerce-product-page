/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                neutral100: "var(--clr-neutral-100)",
                neutral200: "var(--clr-neutral-200)",
                neutral400: "var(--clr-neutral-400)",
                neutral600: "var(--clr-neutral-600)",
                dark400: "var(--clr-dark-400)",
                dark600: "var(--clr-dark-600)",
                accent100: "var(--clr-accent-100)",
                accent400: "var(--clr-accent-400)",
            },
        },
    },
    plugins: [],
};
