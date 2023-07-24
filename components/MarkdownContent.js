"use client";
import Markdown from "markdown-to-jsx";
import Code from "./Markdown/Code";

const MarkdownContent = ({ children }) => {
    return (
        <Markdown
            options={{
                overrides: {
                    Code: {
                        component: Code,
                    },
                },
            }}
        >
            {children}
        </Markdown>
    );
};
export default MarkdownContent;
