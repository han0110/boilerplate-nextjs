const db = require('../index');

describe('model/user', async () => {
  beforeAll(async () => {
    await db.sequelize.sync();
    await db.User.create({ name: 'test', userId: 'test' });
    await db.User.destroy({ truncate: true });
  });

  test('create user', async () => {
    const [name, userId] = ['Jason', 'B05901044'];

    await db.User.create({
      name,
      userId,
    });

    const user = await db.User.findOne();

    expect([
      user.get('name'),
      user.get('userId'),
    ]).toEqual([
      name,
      userId,
    ]);
  });
});
