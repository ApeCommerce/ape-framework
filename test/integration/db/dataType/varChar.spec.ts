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

describe('Inserting / selecting varChar', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.varChar('one', 16000, 'null')
    })
    const data = [
      { one: null },
      { one: '' },
      { one: randomString(16000) },
    ]
    await db('foo').insert(data)
    const result = await db('foo').select()
    expect(result).toEqual(data)
  })
})

describe('Inserting null in varChar notNull', () => {
  test('Throws an error', async () => {
    await schema.createTable('foo', (table) => {
      table.varChar('one', 16000, 'notNull')
    })
    expect(async () => {
      await db('foo').insert({ one: null })
    }).toThrow()
  })
})
