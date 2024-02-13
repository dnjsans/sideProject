import {HetaSequelize} from 'hetamvc'

/** @Model */
export default class UserModel extends HetaSequelize {
	init(Sequelize, options) {
		
		//options.indexes = [{ unique: false, fields: ['fileGroup']}];	// set index
		
		//set tableName, columnes, options
		return this.model('user', {
			idx: {type: Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
			id :  {type: Sequelize.STRING(32)},
			pass: {type: Sequelize.STRING(32)},
			nickName: {type: Sequelize.STRING(64)}
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