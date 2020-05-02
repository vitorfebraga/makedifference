//npx knex migrate:make create_ongs => cria a migrate
//npx knex migrate:latest => executa a migrate


exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();//Segundo parametro é o tamanho
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
