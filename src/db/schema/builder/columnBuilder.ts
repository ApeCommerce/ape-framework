import type { Database } from '../../database';

export class ColumnBuilder {
  private knexColumnBuilder: Database.ColumnBuilder;

  constructor(knexColumnBuilder: Database.ColumnBuilder) {
    this.knexColumnBuilder = knexColumnBuilder;
  }

  index() {
    this.knexColumnBuilder.index();
  }
}

export default ColumnBuilder;
