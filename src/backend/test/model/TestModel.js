import {HetaSequelize} from 'hetamvc'

/** @Model */
export default class TestModel extends HetaSequelize {
	init(Sequelize, options) {
		
		//options.indexes = [{ unique: false, fields: ['fileGroup']}];	// set index
		
		//set tableName, columnes, options
		return this.model('test', {
			id: {type: Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
			name: {type: Sequelize.STRING(200)},
			createUser: {type: Sequelize.STRING(16), allowNull: true},
			createdAt: {type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false}
			},
			options
		);
		
	}

//	associate(models) {
//		// Using additional options like CASCADE etc for demonstration
//		// Can also simply do Task.belongsTo(models.User);
//		this.hasMany(models.Post, {
//			onDelete: "CASCADE",
//			foreignKey: {
//				allowNull: false
//			}
//		});
//		// Using additional options like CASCADE etc for demonstration
//		// Can also simply do Task.belongsTo(models.User);
//		this.hasMany(models.Comment, {
//			onDelete: "CASCADE",
//			foreignKey: {
//				allowNull: false
//			}
//		});
//	}
}