
// ===== header and footer =====
async function loadHTML(id, file){
    const el = document.getElementById(id);
    const resp = await fetch(file);
    el.innerHTML = await resp.text();
}
loadHTML("header", "header.html");
loadHTML("footer", "footer.html");