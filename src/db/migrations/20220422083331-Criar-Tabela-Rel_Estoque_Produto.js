module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Rel_Estoque_Produto', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        id_produto: { 
          type: Sequelize.INTEGER 
        },
        id_estoque: { 
          type: Sequelize.INTEGER 
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  
    },
  
    down: async (queryInterface) => {
      await queryInterface.dropTable('Rel_Estoque_Produto');
    },
  };
  