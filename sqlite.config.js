module.exports = {
  dialect: "sqlite",
  force: false,       //강제 테이블변경
  operatorsAliases: false,    
  dialectOptions: {
      charset: 'utf8mb4',
      dateStrings: true,
      typeCast: true
  },
  define: {
      freezeTableName: true,  //테이블에s 제거
      timestamps: false    //false : 자동으로 CreatedAt, UpdatedAt 방지 
  },
  pool:{
      max:20,
      min:5,
      idle:10000
  },
  storage: __dirname+"/db.sqlite" // default Sequelize('sqlite::memory:');
};