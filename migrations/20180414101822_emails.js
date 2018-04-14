exports.up = function (knex, Promise) {
    return knex.schema.createTable("emails", table => {
        table.increments('id').primary();
        table.text('email');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('emails');
};
