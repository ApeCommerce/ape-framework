import { parseBoolean } from 'utils';

const boolColumnRegex = /^is[A-Z]/;

const filterBoolColumns = (columns: string[]) => columns.filter((c) => c.match(boolColumnRegex));

const postProcessRow = (row: any, boolColumns: string[]) => {
  boolColumns.forEach((column) => { row[column] = parseBoolean(row[column]); });
  return row;
};

const postProcessResponse = (result: any) => {
  if (Array.isArray(result) && typeof result[0] === 'object') {
    return result.map((row) => postProcessRow(row, filterBoolColumns(Object.keys(result[0]))));
  }
  if (typeof result === 'object') {
    return postProcessRow(result, filterBoolColumns(Object.keys(result)));
  }
  return result;
};

export default postProcessResponse;
