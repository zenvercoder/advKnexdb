
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table){
    table.increments();
    table.text('title');
    table.text('content');
    // cascade will delete all the posts from that user when the user is deleted
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
