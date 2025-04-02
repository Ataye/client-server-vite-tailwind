
module.exports = {
  
    fetchUsers: async (req, res) => {
        // 
        const users = [
            {name:'John', age: 30},
            {name:'Jane', age: 25},
        ]

        // return users:
        res.json(users)
    }

}