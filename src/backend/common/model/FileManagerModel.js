import {HetaSequelize} from 'hetamvc'

/** @Model */
export default class FileManagerModel extends HetaSequelize {
	init(Sequelize, options) {
		
		options.indexes = [{ unique: false, fields: ['fileGroup']}];	// set index
		
		//set tableName, columnes, options
		return this.model('filemanager', {
			id: {type: Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true},
			fileGroup: {type: Sequelize.INTEGER.UNSIGNED,defaultValue: 0},		//for group id
			fileName: {type: Sequelize.STRING(200)},
			filePath: {type: Sequelize.STRING(100)},
			mimeType:  {type: Sequelize.STRING(20)},
			fileSize: {type: Sequelize.INTEGER.UNSIGNED,defaultValue: 0},
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