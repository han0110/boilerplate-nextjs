const db = require('../index');

describe('model/project', async () => {
  beforeAll(async () => {
    await db.Project.destroy({ truncate: true });
  });

  test('create project', async () => {
    const [name] = ['Barista'];

    await db.Project.create({
      name,
    });

    const project = await db.Project.findOne();

    expect([
      project.get('name'),
    ]).toEqual([
      name,
    ]);
  });
});
