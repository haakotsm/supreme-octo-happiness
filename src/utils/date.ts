import { format, parse, parseISO } from "date-fns";
import { nb } from "date-fns/locale";
const INPUT_DATE_FORMAT = "yyyy-MM-dd HH:mm";
const OUTPUT_DATE_FORMAT = "dd.MM.yyyy HH:mm";

export function formatDate(date: Date): string {
  return format(date, OUTPUT_DATE_FORMAT, { locale: nb });
}

/**
 * Parse a date string into a Date object.
 *
 * @param date - The date string to parse.
 * @param format - The format of the date string. Defaults to 'yyyy-MM-dd HH:mm'.
 * @returns The parsed Date object, or a new Date object with the value 'Invalid Date' if the parsing fails.
 */
export function parseDate(
  date: string,
  format: string | "iso" = INPUT_DATE_FORMAT
): Date {
  let parsed: Date;
  if (format === "iso") {
    parsed = parseISO(date);
  } else {
    parsed = parse(date, format, new Date(), { locale: nb });
  }

  if (isValidDate(parsed)) {
    return parsed;
  }

  return new Date("Invalid Date");
}

export function isValidDate(date: Date): boolean {
  return !isNaN(date.getTime());
}
