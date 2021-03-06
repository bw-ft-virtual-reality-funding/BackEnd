const db = require('../../data/dbConfig');

module.exports = {
    add, 
    find,  
    findById, 
    remove, 
    update
  };
  
  function find() {
    return db('projects');
  };
  
  
   function add(project) {
    return db('projects')
      .insert(project);
  };
  
  function findById(id) {
    return db('projects')
      .where({ id })
      .first();
  };
  
  function remove(id) {
    return db('projects')
      .where({ id })
      .first()
      .del();
  };
  
  function update(project, id) {
    return db('projects')
      .where({ id })
      .update(project);
  };