import { parseMilliseconds } from 'utils';

describe('Parsing milliseconds', () => {
  test('Returns expected value', async () => {
    expect(parseMilliseconds(undefined)).toBe(0);
    expect(parseMilliseconds(false)).toBe(0);
    expect(parseMilliseconds(true)).toBe(0);
    expect(parseMilliseconds('')).toBe(0);
    expect(parseMilliseconds('foo')).toBe(0);
    expect(parseMilliseconds({ foo: 'bar' })).toBe(0);
    expect(parseMilliseconds(() => 'foo')).toBe(0);

    expect(parseMilliseconds(0)).toBe(0);
    expect(parseMilliseconds(3)).toBe(3);
    expect(parseMilliseconds(1.5)).toBe(1);
    expect(parseMilliseconds(-3)).toBe(-3);

    expect(parseMilliseconds('0')).toBe(0);
    expect(parseMilliseconds('3')).toBe(3);
    expect(parseMilliseconds('1.5')).toBe(1);
    expect(parseMilliseconds('-3')).toBe(-3);

    expect(parseMilliseconds('0ms')).toBe(0);
    expect(parseMilliseconds('3ms')).toBe(3);
    expect(parseMilliseconds('1.5ms')).toBe(1);
    expect(parseMilliseconds('-3ms')).toBe(-3);

    expect(parseMilliseconds('3 ms')).toBe(3);

    expect(parseMilliseconds('3mss')).toBe(3);
    expect(parseMilliseconds('3millisecond')).toBe(3);
    expect(parseMilliseconds('3milliseconds')).toBe(3);

    expect(parseMilliseconds('3s')).toBe(3000);
    expect(parseMilliseconds('3sec')).toBe(3000);
    expect(parseMilliseconds('3secs')).toBe(3000);
    expect(parseMilliseconds('3second')).toBe(3000);
    expect(parseMilliseconds('3seconds')).toBe(3000);

    expect(parseMilliseconds('3m')).toBe(180000);
    expect(parseMilliseconds('3min')).toBe(180000);
    expect(parseMilliseconds('3mins')).toBe(180000);
    expect(parseMilliseconds('3minute')).toBe(180000);
    expect(parseMilliseconds('3minutes')).toBe(180000);

    expect(parseMilliseconds('3h')).toBe(10800000);
    expect(parseMilliseconds('3hs')).toBe(10800000);
    expect(parseMilliseconds('3hr')).toBe(10800000);
    expect(parseMilliseconds('3hrs')).toBe(10800000);
    expect(parseMilliseconds('3hour')).toBe(10800000);
    expect(parseMilliseconds('3hours')).toBe(10800000);

    expect(parseMilliseconds('3d')).toBe(259200000);
    expect(parseMilliseconds('3ds')).toBe(259200000);
    expect(parseMilliseconds('3day')).toBe(259200000);
    expect(parseMilliseconds('3days')).toBe(259200000);

    expect(parseMilliseconds('3w')).toBe(1814400000);
    expect(parseMilliseconds('3ws')).toBe(1814400000);
    expect(parseMilliseconds('3wk')).toBe(1814400000);
    expect(parseMilliseconds('3wks')).toBe(1814400000);
    expect(parseMilliseconds('3week')).toBe(1814400000);
    expect(parseMilliseconds('3weeks')).toBe(1814400000);

    expect(parseMilliseconds('3month')).toBe(7889400000);
    expect(parseMilliseconds('3months')).toBe(7889400000);

    expect(parseMilliseconds('3y')).toBe(94672800000);
    expect(parseMilliseconds('3ys')).toBe(94672800000);
    expect(parseMilliseconds('3yr')).toBe(94672800000);
    expect(parseMilliseconds('3yrs')).toBe(94672800000);
    expect(parseMilliseconds('3year')).toBe(94672800000);
    expect(parseMilliseconds('3years')).toBe(94672800000);

    expect(parseMilliseconds('1h 5min 3seconds')).toBe(3903000);
  });
});
