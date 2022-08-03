const userDB = [
    {
        id:1,
        name:"",
        music:"",
        hobbie:"",
        country:"",
        age:20
    }, 
  ];
  /*
   *    {
   *        id: 1,
   *        name: "",
   *        age: 20,
   *        email: "",
   *        country: "",
   *        phone: ""
   *    }
   */
  
  //? El controlador para retornar todos mis usuarios
  const getAllUsers = () => {
    return userDB;
  };
  
  const getUserById = (id) => {
    const filteredDB = userDB.filter((user) => user.id === id);
    return filteredDB[0];
  };
  
  const createUser = (data)=> {
    
    if (userDB.length === 0) {
      const newUser = {
        id:1,
      name: data.name,
      age: data.age,
      country: data.country,
      hobbie: data.hobbie,
      music: data.music
      }
      userDB.push(newUser)
      return newUser
    }
   
       const newUser = {
        id:userDB[userDB.length-1].id+1, 
        name: data.name,
      age: data.age,
      country: data.country,
      hobbie: data.hobbie,
      music: data.music
       }
       userDB.push(newUser)
       return newUser
  } 

  // TODO : hacer controladores de Delete y update
  
  const deleteUser = (id) => {
    const index = userDB.findIndex((item) => item.id === id);
    if (index !== -1){
      userDB.splice(index, 1)
      return true
    }
    return false
  }
  
  const editUser = (id, data) => {
    const index = userDB.findIndex(item => item.id === id);
    if (data.name && data.music && data.country && data.hobbie && data.age ){
      userDB[index] = {
        id,
        name: data.name,
        age:data.age,
        music: data.music,
        country: data.country,
        hobbie: data.hobbie
      }
      return userDB[index]
    } else {
        return res.status(400).json({message:'missing'})
    }
  }
  
  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    editUser
  };
 
  