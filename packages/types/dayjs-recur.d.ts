declare module "dayjs-recur" {
  import { Dayjs, PluginFunc } from "dayjs";

  interface Recurrence {
    every(unit: number | string, measurementType?: string): Recurrence;
    every(units: number[] | string[], measurementType?: string): Recurrence;
    day(unit?: string): Recurrence;
    days(unit?: string): Recurrence;
    week(unit?: string): Recurrence;
    weeks(unit?: string): Recurrence;
    month(unit?: string): Recurrence;
    months(unit?: string): Recurrence;
    year(unit?: string): Recurrence;
    years(unit?: string): Recurrence;
    dayOfWeek(unit?: string): Recurrence;
    daysOfWeek(unit?: string): Recurrence;
    dayOfMonth(unit?: string): Recurrence;
    daysOfMonth(unit?: string): Recurrence;
    weekOfMonth(unit?: string): Recurrence;
    weeksOfMonth(unit?: string): Recurrence;
    weekOfYear(unit?: string): Recurrence;
    weeksOfYear(unit?: string): Recurrence;
    monthOfYear(unit?: string): Recurrence;
    monthsOfYear(unit?: string): Recurrence;
    forget(date: string): Recurrence;
    except(date: string): Recurrence;
    matches(date: string, outbound?: boolean): boolean;
    fromDate(date: string | Dayjs): Recurrence;
    next(count?: number): Dayjs[];
    previous(count?: number): Dayjs | Dayjs[];
    all(): Dayjs[];
  }

  declare module "dayjs" {
    export function recur(): Recurrence;
    export function recur(start?: string | Dayjs, end?: string | Dayjs): Recurrence;
    export function recur(options: { start: string | Dayjs; end: string | Dayjs }): Recurrence;

    interface Dayjs {
      recur(): Recurrence;
      recur(start?: string | Dayjs, end?: string | Dayjs): Recurrence;
      recur(options: { start: string | Dayjs; end: string | Dayjs }): Recurrence;
    }
  }

  const defaultExport: PluginFunc<unknown>;
  export = defaultExport;
}