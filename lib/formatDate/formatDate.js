// формат RU даты ДД/ММ/ГГ ЧЧ:ММ
export function formatDateToRu(date) {
  return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/${
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }/${date.getFullYear()} ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
}

// формат US даты ММ-ДД-ГГ ЧЧ:ММ
export function formatDateToUs(date) {
  return `${
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  }-${
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  }-${date.getFullYear()} ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;
}
