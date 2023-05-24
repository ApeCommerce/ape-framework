import { parseSeconds } from 'utils';

describe('Parsing seconds', () => {
  test('Returns expected value', async () => {
    expect(parseSeconds(undefined)).toBe(0);
    expect(parseSeconds(false)).toBe(0);
    expect(parseSeconds(true)).toBe(0);
    expect(parseSeconds('')).toBe(0);
    expect(parseSeconds('foo')).toBe(0);
    expect(parseSeconds({ foo: 'bar' })).toBe(0);
    expect(parseSeconds(() => 'foo')).toBe(0);

    expect(parseSeconds(0)).toBe(0);
    expect(parseSeconds(3)).toBe(3);
    expect(parseSeconds(1.5)).toBe(1);
    expect(parseSeconds(-3)).toBe(-3);

    expect(parseSeconds('0')).toBe(0);
    expect(parseSeconds('3')).toBe(3);
    expect(parseSeconds('1.5')).toBe(1);
    expect(parseSeconds('-3')).toBe(-3);

    expect(parseSeconds('3000ms')).toBe(3);
    expect(parseSeconds('3000milliseconds')).toBe(3);

    expect(parseSeconds('3000 ms')).toBe(3);
    expect(parseSeconds('3000 milliseconds')).toBe(3);

    expect(parseSeconds('1500ms')).toBe(1);
    expect(parseSeconds('-3000ms')).toBe(-3);

    expect(parseSeconds('3s')).toBe(3);
    expect(parseSeconds('3sec')).toBe(3);
    expect(parseSeconds('3secs')).toBe(3);
    expect(parseSeconds('3second')).toBe(3);
    expect(parseSeconds('3seconds')).toBe(3);

    expect(parseSeconds('3m')).toBe(180);
    expect(parseSeconds('3min')).toBe(180);
    expect(parseSeconds('3mins')).toBe(180);
    expect(parseSeconds('3minute')).toBe(180);
    expect(parseSeconds('3minutes')).toBe(180);

    expect(parseSeconds('3h')).toBe(10800);
    expect(parseSeconds('3hs')).toBe(10800);
    expect(parseSeconds('3hr')).toBe(10800);
    expect(parseSeconds('3hrs')).toBe(10800);
    expect(parseSeconds('3hour')).toBe(10800);
    expect(parseSeconds('3hours')).toBe(10800);

    expect(parseSeconds('3d')).toBe(259200);
    expect(parseSeconds('3ds')).toBe(259200);
    expect(parseSeconds('3day')).toBe(259200);
    expect(parseSeconds('3days')).toBe(259200);

    expect(parseSeconds('3w')).toBe(1814400);
    expect(parseSeconds('3ws')).toBe(1814400);
    expect(parseSeconds('3wk')).toBe(1814400);
    expect(parseSeconds('3wks')).toBe(1814400);
    expect(parseSeconds('3week')).toBe(1814400);
    expect(parseSeconds('3weeks')).toBe(1814400);

    expect(parseSeconds('3month')).toBe(7889400);
    expect(parseSeconds('3months')).toBe(7889400);

    expect(parseSeconds('3y')).toBe(94672800);
    expect(parseSeconds('3ys')).toBe(94672800);
    expect(parseSeconds('3yr')).toBe(94672800);
    expect(parseSeconds('3yrs')).toBe(94672800);
    expect(parseSeconds('3year')).toBe(94672800);
    expect(parseSeconds('3years')).toBe(94672800);

    expect(parseSeconds('1h 5min 3seconds')).toBe(3903);
  });
});
