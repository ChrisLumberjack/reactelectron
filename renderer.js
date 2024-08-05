/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

function nombreFunction(param1, param2) {
  const var1 = param1;
  const var2 = param2;

  return console.log(var1, var2);
}

nombreFunction("Hola", "Geek");

const nombreFunction2 = (param1, param2) => {
  const var1 = param1;
  const var2 = param2;

  return console.log(var1, var2);
};

nombreFunction2("Hola", "Geek");
