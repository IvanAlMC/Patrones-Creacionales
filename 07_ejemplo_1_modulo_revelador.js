const Users = (() => {

    const my_resource = 'https://jsonplaceholder.typicode.com/users'

    return{
        to_list: async () => {
            return await fetch(my_resource)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err))
        },
        create: async (data) => {
            return await fetch(my_resource,{
                type: 'POST',
                body: JSON.stringify(data)
            }).then(x => x.json())
        }
    }
}) ()

Users.to_list()