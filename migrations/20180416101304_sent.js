exports.up = function (knex, Promise) {
    return knex.schema.createTable("sent", table => {
        table.increments('id').primary();
        table.text('emailSent');
        table.text('subject');
        table.json('recipients');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('sent');
};
