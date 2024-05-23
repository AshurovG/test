export function mediapipeWorkaround() {
  return {
    name: "mediapipe-workaround",
    load(id) {
      if (id.endsWith("selfie_segmentation.js")) {
        // Читаем исходный код файла
        const code = require(`fs`).readFileSync(id, "utf-8");

        // Добавляем экспорт SelfieSegmentation
        const modifiedCode = `${code}\nexports.SelfieSegmentation = SelfieSegmentation;`;

        // Возвращаем модифицированный код
        return { code: modifiedCode };
      } else {
        // Возвращаем оригинальный код для других файлов
        return null;
      }
    },
  };
}
