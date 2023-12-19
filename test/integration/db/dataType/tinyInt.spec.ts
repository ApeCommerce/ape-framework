import '../../config'
import db, { SchemaBuilder } from 'db'

const schema = new SchemaBuilder(db)

afterEach(async () => {
  await schema.dropTableIfExists('foo')
})

afterAll(async () => {
  await db.destroy()
})

describe('Inserting / selecting tinyInt', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.tinyInt('one', 'null')
    })
    const data = [
      { one: null },
      { one: 0 },
      { one: 120 },
      { one: -120 },
    ]
    await db('foo').insert(data)
    const result = await db('foo').select()
    expect(result).toEqual(data)
  })
})

describe('Inserting null in tinyInt notNull', () => {
  test('Throws an error', async () => {
    await schema.createTable('foo', (table) => {
      table.tinyInt('one', 'notNull')
    })
    expect(async () => {
      await db('foo').insert({ one: null })
    }).toThrow()
  })
})
