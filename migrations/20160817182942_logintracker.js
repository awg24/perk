
exports.up = function(knex, Promise) {
  return knex.schema.createTable('loginHistory', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();		
		t.integer('loginStatus').notNull();
		t.string('ipAddress').notNull();
		t.integer("authenticationId")
			.nullable()
			.unsigned()
			.references('id')
			.inTable('authentication')
			.onDelete('CASCADE')
	});
};

exports.down = function(knex, Promise) {
 	return knex.schema.dropTable('loginHistory'); 
};
