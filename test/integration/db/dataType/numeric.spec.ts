import '../../config'
import db, { SchemaBuilder } from 'db'

const schema = new SchemaBuilder(db)

afterEach(async () => {
  await schema.dropTableIfExists('foo')
})

afterAll(async () => {
  await db.destroy()
})

describe('Inserting / selecting numeric', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.numeric('one', 15, 0, 'null')
      table.numeric('two', 15, 1, 'null')
      table.numeric('three', 15, 14, 'null')
    })
    const data = [
      { one: null, two: null, three: null },
      { one: 0, two: 0, three: 0 },
      { one: 999999999999999, two: 99999999999999.9, three: 0.00000000000001 },
      { one: -999999999999999, two: -99999999999999.9, three: -0.00000000000001 },
    ]
    await db('foo').insert(data)
    const result = await db('foo').select()
    expect(result).toEqual(data)
  })
})

describe('Inserting null in numeric notNull', () => {
  test('Throws an error', async () => {
    await schema.createTable('foo', (table) => {
      table.numeric('one', 15, 0, 'notNull')
    })
    expect(async () => {
      await db('foo').insert({ one: null })
    }).toThrow()
  })
})
