exports.seed = function (knex, Promise) {
  return knex('sent').del()
    .then(function () {
      return knex('sent').insert([
        {
          id: 1,
          emailSent: '04/12/18',
          subject: 'Test',
          recipients: {recipients:[1, 3, 4]}
        },
        {
          id: 2,
          emailSent: '04/13/18',
          subject: 'Test New',
          recipients: { recipients:[1, 3]}
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE sent_id_seq RESTART WITH 2;")
    });
};