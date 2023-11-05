import { parseBoolean } from '../utils';

export const booleanColumnRegex = /^((is|has)(_|[A-Z]))/;

const booleanColumns = (columns: string[]) => columns.filter(
  (column) => column.match(booleanColumnRegex),
);

const postProcessRow = (row: any, boolColumns: string[]) => {
  boolColumns.forEach((column) => {
    row[column] = row[column] === null ? null : parseBoolean(row[column]);
  });
  return row;
};

const postProcess = (response: any) => {
  if (Array.isArray(response) && typeof response[0] === 'object') {
    for (const row of response) {
      postProcessRow(row, booleanColumns(Object.keys(response[0])));
    }
    return response;
  }
  if (typeof response === 'object') {
    return postProcessRow(response, booleanColumns(Object.keys(response)));
  }
  return response;
};

export default postProcess;
