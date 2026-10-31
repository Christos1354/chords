/* Ypografi - Christos S Magides - έκδοση 31-10-2026 (μικρή, μία γραμμή) */
(function () {
  if (window.__ypografiCSM) return; window.__ypografiCSM = true;
  var onoma = "Christos S Magides", mail = ["cyp", "11111"].join("") + "@" + ["gmail", "com"].join(".");
  function go() {
    try { if (!document.querySelector('meta[name="author"]')) { var m = document.createElement("meta"); m.name = "author"; m.content = onoma; document.head.appendChild(m); } } catch (e) {}
    if (document.getElementById("ypografi-csm")) return;
    var f = document.createElement("footer"); f.id = "ypografi-csm"; f.className = "notranslate"; f.setAttribute("translate", "no");
    f.style.cssText = "all:initial;display:block;width:100%;margin:16px 0 0;padding:6px 8px;text-align:center;font:12px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:#7a7a7a;opacity:.85;clear:both";
    f.innerHTML = "© 2026 " + onoma + " · <a href=\"mailto:" + mail + "\" style=\"color:inherit;font:inherit;text-decoration:underline\">" + mail + "</a>";
    document.body.appendChild(f);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", go); else go();
})();
