import {HetaSequelize} from 'hetamvc'

/** @Model */
export default class CommonInfoModel extends HetaSequelize {
	init(Sequelize, options) {
		
		//options.indexes = [{ unique: false, fields: ['locale']}];	// set index
		
		//set tableName, columnes, options
		return this.model('common_info', {
			timezone: {type: Sequelize.STRING(64), allowNull: true, defaultValue: '-8'},	//LA
			locale: {type: Sequelize.STRING(8), allowNull: true, defaultValue: 'en'},	//kr,en
			email: {type: Sequelize.STRING(32), allowNull: true},	//mastar email 
			token: {type: Sequelize.STRING(32), allowNull: true},	//token you can get 
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