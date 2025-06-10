 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/script.js
index 0000000000000000000000000000000000000000..0f1a14f1335113c89ac68793ed9320bd643d70fe 100644
--- a//dev/null
+++ b/script.js
@@ -0,0 +1,27 @@
+const container = document.getElementById('symbols');
+const symbols = [
+  '\u262F', // Yin Yang
+  '\u2721', // Star of David
+  '\u262A', // Star and Crescent
+  '\u26B2', // Turned cross
+  '\u269A', // Staff of Hermes
+  '\u269C', // Fleur-de-lis
+  '\u26E4', // Pentagram
+  '\u26E7', // Alchemical symbol for Earth
+  '\u26B0', // Coffin
+  '\u2605', // Star
+  '\u262E'  // Peace symbol
+];
+
+function addSymbol() {
+  const span = document.createElement('span');
+  span.className = 'symbol';
+  span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
+  container.appendChild(span);
+  if (container.children.length > 60) {
+    container.removeChild(container.firstChild);
+  }
+}
+
+setInterval(addSymbol, 100);
+
 
EOF
)