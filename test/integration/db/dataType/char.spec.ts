import '../../config'
import { randomString } from 'utils'
import db, { SchemaBuilder } from 'db'

const schema = new SchemaBuilder(db)

afterEach(async () => {
  await schema.dropTableIfExists('foo')
})

afterAll(async () => {
  await db.destroy()
})

describe('Inserting / selecting char', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.char('one', 250, 'null')
    })
    const data = [
      { one: null },
      { one: '' },
      { one: randomString(250) },
    ]
    await db('foo').insert(data)
    const result = await db('foo').select()
    expect(result).toEqual(data)
  })
})

describe('Inserting null in char notNull', () => {
  test('Throws an error', async () => {
    await schema.createTable('foo', (table) => {
      table.char('one', 250, 'notNull')
    })
    expect(async () => {
      await db('foo').insert({ one: null })
    }).toThrow()
  })
})
