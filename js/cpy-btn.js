import { Toast } from "https://cdn.jsdelivr.net/npm/kongari-toast/dist/toast.js";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".copy-btn").forEach(button => {
        button.addEventListener("click", async () => {
            const field = button.nextElementSibling;
            if (field && field.tagName === "TEXTAREA") {
                let lines = field.value.split("\n");

                while (lines.length && lines[0].trim() === "") lines.shift();
                while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();

                const indentLengths = lines
                    .filter(line => line.trim().length > 0)
                    .map(line => line.match(/^(\s*)/)[1].length);
                const minIndent = Math.min(...indentLengths);

                const cleanedText = lines.map(line => line.slice(minIndent)).join("\n");

                try {
                    await navigator.clipboard.writeText(cleanedText);
                    const successToast = new Toast("copied!!", "success", 2000);
                } catch (err) {
                    const successToast = new Toast("failed to copy", "success", 2000);
                }
            }
        });
    });
});