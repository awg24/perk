require('./Authentication');
module.exports = bookshelf.model('LoginHistory', {
	tableName: 'loginHistory',
	hasTimestamps: ['createdAt'],
	authentication: function() {
		return this.belongsTo('Authentication', 'authenticationId');
	}
});