exports.seed = function (knex, Promise) {
  return knex('emails').del()
    .then(function () {
      return knex('emails').insert([
        {
          id: 1,
          email: 'sample1@email.com',
        },
        {
          id: 2,
          email: 'kmkingdon@gmail.com',
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE emails_id_seq RESTART WITH 3;")
    });
};