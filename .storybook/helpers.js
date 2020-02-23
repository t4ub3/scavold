export function buildTemplate(components) {
    let template = "<div>";
    components.forEach((component) => {
        template += "<div style='padding:8px;'>";
        template += component;
        template += "</div>";

    });
    template += "</div>";
    return template;
}