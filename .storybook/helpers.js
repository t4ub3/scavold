export function buildTemplate(components, styles) {
    let template = "<div>";
    components.forEach((component) => {
        template += `<div style="${buildStyles(styles)}">${component}</div>`;
    });
    template += "</div>";
    return template;
}

function buildStyles(styles) {
    let styleString = "";
    if (styles && !styles.padding) {
        styleString += "padding:8px;"
    }
    if (styles) {          
        for (let style in styles) {
            styleString += `${style}:${styles[style]};`;
        }
    }
    return styleString;
}